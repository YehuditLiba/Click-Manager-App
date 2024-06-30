import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MainList from './mainList';
import '../Designs/home.css';

const Home = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedList, setSelectedList] = useState(null);
    const [isListExisting, setIsListExisting] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    const [lists, setLists] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchLists();
    }, []);

    const deletePublisher = (lim,pub) => {
        console.log("enter to delete function")
        axios.delete(`http://localhost:5000/api/deletePublisher/${lim}/${pub}`)
            .then((response) => {
                console.log('Publisher deleted successfully');
                setSelectedList(prevSelectedList => ({
                    ...prevSelectedList,
                    publisherAppList: prevSelectedList.publisherAppList.filter(item => item.name !== pub)
                }));
                fetchLists();
            })
            .catch(error => {
                console.error('Error deleting publisher:', error);
            });
    };

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
        if (query.trim()) {
            axios.get(`http://localhost:5000/api/Mainlist/by_name/${encodeURIComponent(query)}`)
                .then(response => {
                    const matchingList = response.data;
                    if (matchingList) {
                        setSelectedList(matchingList);
                        setQuery('');
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
        if (query.trim()) {
            const filteredSuggestions = lists.filter(list =>
                list.name.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
        setIsListExisting(true);
        setErrorMessage('');
    };

    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion.name);
        setSelectedList(suggestion);
        setIsListExisting(true);
        setErrorMessage('');
        setSuggestions([]);
        navigate('/'); // Navigate to home page to refresh
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
                    className={!isListExisting && errorMessage ? 'invalid' : ''}
                />
                {!isListExisting && errorMessage && <p className="error-message">{errorMessage}</p>}
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
                    disabled={!query.trim()}
                >
                    Search
                </button>
            </div>
            {selectedList && (
                <div className="main-list-container">
                    <MainList list={selectedList} onDelete={handleDeleteList }deletePublisher={deletePublisher} />
                </div>
            )}
        </div>
    );
};

export default Home;
