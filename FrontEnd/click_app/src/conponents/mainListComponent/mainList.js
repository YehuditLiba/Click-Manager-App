import React from 'react';

function MainList({ list }) {
    const renderApps = () => {
        return list.publisherAppList.map(app => {
            return (
                React.createElement('li', { key: app._id },
                    React.createElement('strong', null, app.name + ': '),
                    app.description
                )
            );
        });
    };

    return (
        React.createElement('div', null,
            React.createElement('h2', null, list.name),
            React.createElement('p', null, React.createElement('strong', null, 'Description: '), list.description),
            React.createElement('p', null, React.createElement('strong', null, 'Limit: '), list.limit),
            React.createElement('h3', null, 'Publisher Apps:'),
            React.createElement('ul', null, renderApps()),
            React.createElement('p', null, React.createElement('strong', null, 'Creation Date: '), list.creationDate),
            React.createElement('p', null, React.createElement('strong', null, 'Last Updated: '), list.lastUpdatedDate)
        )
    );
}

export default MainList;