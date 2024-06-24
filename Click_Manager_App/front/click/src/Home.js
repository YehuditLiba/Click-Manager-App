import React, { useState, useEffect } from 'react';
import Button from './Button';
import './App.css';

const Home = ({ buttons, setButtons }) => {
  const [newButtonName, setNewButtonName] = useState('');
  const [newButtonDescription, setNewButtonDescription] = useState('');

  useEffect(() => {
    // Load buttons from localStorage on component mount
    const storedButtons = localStorage.getItem('buttons');
    if (storedButtons) {
      setButtons(JSON.parse(storedButtons));
    }
  }, [setButtons]);

  const addButton = () => {
    if (newButtonName && newButtonDescription) {
      const now = new Date();
      const newButton = {
        id: Math.random().toString(36).substr(2, 9),
        name: newButtonName,
        description: newButtonDescription,
        creationDate: now,
        lastUpdateDate: now,
        lastUpdateDescription: 'הרשימה נוצרה'
      };
      setButtons([...buttons, newButton]);
      setNewButtonName('');
      setNewButtonDescription('');
      saveToLocalStorage([...buttons, newButton]);
    } else {
      alert('אנא הכנסו שם ותיאור לרשימה.');
    }
  };

  const removeButton = (id) => {
    if (window.confirm('האם אתם בטוחים שברצונכם למחוק את הרשימה?')) {
      setButtons(buttons.filter(button => button.id !== id));
      saveToLocalStorage(buttons.filter(button => button.id !== id));
    }
  };

  const saveToLocalStorage = (buttons) => {
    localStorage.setItem('buttons', JSON.stringify(buttons));
  };

  return (
    <div className="home-container">
      <h1>עמוד הבית</h1>
      <div className="add-button-form">
        <input
          type="text"
          placeholder="שם הרשימה"
          value={newButtonName}
          onChange={(e) => setNewButtonName(e.target.value)}
        />
        <input
          type="text"
          placeholder="תיאור הרשימה"
          value={newButtonDescription}
          onChange={(e) => setNewButtonDescription(e.target.value)}
        />
        <button className="add-button" onClick={addButton}>הוסף רשימה</button>
      </div>
      <div className="buttons-container">
        {buttons.map(button => (
          <Button
            key={button.id}
            id={button.id}
            buttonText={button.name}
            buttonDescription={button.description}
            onDelete={removeButton}
            creationDate={button.creationDate}
            lastUpdateDate={button.lastUpdateDate}
            lastUpdateDescription={button.lastUpdateDescription}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
