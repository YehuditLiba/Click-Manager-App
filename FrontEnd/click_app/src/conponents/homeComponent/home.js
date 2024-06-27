import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainList from '../mainListComponent/mainList';
import AddListForm from './AddListForm';

const Home = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedList, setSelectedList] = useState(null);
    const [isListExisting, setIsListExisting] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [lists, setLists] = useState([]);

    useEffect(() => {
        fetchLists();
    }, []);

    const fetchLists = () => {
        axios.get('http://localhost:5000/api/lists')
            .then(response => {
                setLists(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    };

    const handleSearch = () => {
        if (query) {
            axios.get(`http://localhost:5000/api/Mainlist/by_name/${encodeURIComponent(query)}`)
                .then(response => {
                    const matchingList = response.data;
                    if (matchingList) {
                        setSelectedList(matchingList);
                        setQuery('');
                        setSuggestions([]); // Clear suggestions after selecting a valid list
                        setIsListExisting(true);
                        setErrorMessage('');
                    } else {
                        setIsListExisting(false);
                        setErrorMessage('List not found. Please enter a valid list name.');
                    }
                })
                .catch(error => {
                    console.error("Error fetching list details:", error);
                    setIsListExisting(false);
                    setErrorMessage('Error fetching list details. Please try again.');
                });
        } else {
            setErrorMessage('Please enter a list name.');
        }
    };

    const handleInputChange = (e) => {
        const query = e.target.value;
        setQuery(query);
        if (query) {
            const filteredSuggestions = lists.filter(list =>
                list.name.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion.name);
        setSuggestions([]);
        setSelectedList(suggestion); // Automatically select the list upon suggestion click
    };

    const handleDeleteList = () => {
        if (selectedList) {
            axios.delete(`http://localhost:5000/api/lists/${selectedList.name}`)
                .then(response => {
                    console.log("List deleted successfully:", response.data);
                    setSelectedList(null);
                    setIsListExisting(false);
                    fetchLists(); // Fetch updated list after deletion
                })
                .catch(error => {
                    console.error("Error deleting list:", error);
                });
        }
    };

    return (
        <div className="home-container">
            <div className="search-container">
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search for a list"
                    className={isListExisting ? '' : 'invalid'}
                />
                {!isListExisting && <p className="error-message">{errorMessage}</p>}
                {suggestions.length > 0 && (
                    <div className="suggestions-container">
                        {suggestions.map(suggestion => (
                            <div
                                key={suggestion._id}
                                className="suggestion-item"
                                onClick={() => handleSuggestionClick(suggestion)}
                            >
                                {suggestion.name}
                            </div>
                        ))}
                    </div>
                )}
                <button
                    className="search-button"
                    onClick={handleSearch}
                    disabled={!query}
                >
                    Search
                </button>
            </div>
            {selectedList && (
                <div className="main-list-container">
                    <MainList list={selectedList} onDelete={handleDeleteList} />
                </div>
            )}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {selectedList && isListExisting && (
                <div className="list-details">
                    <h2>List Details</h2>
                    <MainList list={selectedList} onDelete={handleDeleteList} />
                </div>
            )}
            <h2>Add List</h2>
            <AddListForm />
        </div>
    );
};

export default Home;
