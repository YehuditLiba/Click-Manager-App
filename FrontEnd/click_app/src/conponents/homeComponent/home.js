import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home';
import MainList from '../mainListComponent/mainList';


function Home() {
    const [lists, setLists] = useState([]);
    const [selectedList, setSelectedList] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5000/api/lists')
            .then(response => {
                setLists(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);

    const handleListClick = (list) => {
        setSelectedList(list);
    };

    const renderLists = () => {
        return lists.map(list => {
            return (
                React.createElement('button', {
                    key: list._id,
                    onClick: () => handleListClick(list)
                }, list.name)
            );
        });
    };

    return (
        React.createElement('div', null,
            React.createElement('h2', null, 'Lists'),
            React.createElement('div', null, renderLists()),
            selectedList && React.createElement(MainList, { list: selectedList })
        )
    );
}

export default Home;
