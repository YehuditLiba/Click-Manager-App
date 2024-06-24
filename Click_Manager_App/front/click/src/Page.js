import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

const Page = ({ buttons }) => {
  const { id } = useParams();
  const [button, setButton] = useState(null);

  useEffect(() => {
    const selectedButton = buttons.find(button => button.id === id);
    if (selectedButton) {
      setButton(selectedButton);
    }
  }, [buttons, id]);

  const saveChanges = () => {
    if (button) {
      const updatedButtons = buttons.map(b => b.id === button.id ? button : b);
      localStorage.setItem('buttons', JSON.stringify(updatedButtons));
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setButton(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const formatDateTime = (dateTime) => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    return new Date(dateTime).toLocaleString('he-IL', options);
  };

  if (!button) {
    return <div>רשימה לא נמצאה</div>;
  }

  return (
    <div className="page-container">
      <h1>{button.name}</h1>
      <p>{button.description}</p>
      <div className="info">
        <h3>תאריך יצירת הרשימה</h3>
        <p>{formatDateTime(button.creationDate)}</p>
        <h3>עדכון אחרון</h3>
        <p>{formatDateTime(button.lastUpdateDate)}</p>
        <p>{button.lastUpdateDescription}</p>
        <h3>מגבלה</h3>
        <p>לא מעודכן</p>
        <button className="save-button" onClick={saveChanges}>שמור</button>
      </div>
    </div>
  );
}

export default Page;
