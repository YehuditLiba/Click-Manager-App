import React from 'react';
import '../Designs/AddList.css';

const MainList = ({ list, onDelete }) => {
    return (
        <div className="main-list">
            <h2>{list.name}</h2>
            {list.description && <p><strong>Description:</strong> {list.description}</p>}
            {list.limit && <p><strong>Limit:</strong> {list.limit}</p>}
            {list.creationDate && <p><strong>Creation Date:</strong> {new Date(list.creationDate).toLocaleDateString()}</p>}
            {list.lastUpdatedDate && <p><strong>Last Updated Date:</strong> {new Date(list.lastUpdatedDate).toLocaleDateString()}</p>}
            {list.publisherAppList && list.publisherAppList.length > 0 && (
                <div>
                    <p><strong>Publisher App List:</strong></p>
                    <ul>
                        {list.publisherAppList.map((item, index) => (
                            <li key={index}>
                                {JSON.stringify(item)}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {onDelete && (
                <button onClick={onDelete}>Delete List</button>
            )}
        </div>
    );
};

export default MainList;
