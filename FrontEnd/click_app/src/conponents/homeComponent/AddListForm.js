import React, { useState } from 'react';
import axios from 'axios';

function AddListForm({ onAddList }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [limit, setLimit] = useState('');
    const [publisherApps, setPublisherApps] = useState([{ name: '', description: '' }]);

    const handlePublisherAppNameChange = (index, value) => {
        const updatedPublisherApps = [...publisherApps];
        updatedPublisherApps[index].name = value;
        setPublisherApps(updatedPublisherApps);
    };

    const handlePublisherAppDescriptionChange = (index, value) => {
        const updatedPublisherApps = [...publisherApps];
        updatedPublisherApps[index].description = value;
        setPublisherApps(updatedPublisherApps);
    };

    const handleAddPublisherApp = () => {
        setPublisherApps([...publisherApps, { name: '', description: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newList = {
            name,
            description,
            limit,
            publisherAppList: publisherApps
        };

        try {
            console.log('Submitting new list:', newList);
            const response = await axios.post('http://localhost:5000/api/Addlists', newList);
            onAddList(response.data);
            setName('');
            setDescription('');
            setLimit('');
            setPublisherApps([{ name: '', description: '' }]);
        } catch (error) {
            console.error('Error adding list: ', error);
        }
    };

    const renderPublisherAppsInputs = () => {
        return publisherApps.map((app, index) => (
            <div key={index}>
                <label>Publisher App Name:</label>
                <input type="text" value={app.name} onChange={(e) => handlePublisherAppNameChange(index, e.target.value)} />
                <label>Publisher App Description:</label>
                <input type="text" value={app.description} onChange={(e) => handlePublisherAppDescriptionChange(index, e.target.value)} />
            </div>
        ));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
            <input type="number" placeholder="Limit" value={limit} onChange={(e) => setLimit(e.target.value)} required />
            <div>
                <h3>Publisher Apps:</h3>
                {renderPublisherAppsInputs()}
                <button type="button" onClick={handleAddPublisherApp}>Add Publisher App</button>
            </div>
            <button type="submit">Add List</button>
        </form>
    );
}

export default AddListForm;
