import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainList from '../mainListComponent/mainList';
import AddListForm from './AddListForm';

function Home() {
    const [lists, setLists] = useState([]);
    const [selectedList, setSelectedList] = useState(null);

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

    const handleListClick = (list) => {
        setSelectedList(list);
    };

    const handleAddList = (newListData) => {
        setLists([...lists, newListData]);
        setSelectedList(newListData); // Show the newly added list
    };

    const renderLists = () => {
        return lists.map(list => (
            <button key={list._id} onClick={() => handleListClick(list)}>
                {list.name}
            </button>
        ));
    };

    return (
        <div>
            <h2>Lists</h2>
            <div>{renderLists()}</div>
            {selectedList && <MainList list={selectedList} />}
            <h2>Add List</h2>
            <AddListForm onAddList={handleAddList} />
        </div>
    );
}

export default Home;
