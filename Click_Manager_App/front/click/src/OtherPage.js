import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './App.css';

const OtherPage = ({ buttons }) => {
  const { id } = useParams();
  const [buttonInfo, setButtonInfo] = useState(null);

  useEffect(() => {
    const selectedButton = buttons.find(button => button.id === parseInt(id));
    if (selectedButton) {
      setButtonInfo(selectedButton);
    }
  }, [id, buttons]);

  const formatDateTime = (dateTime) => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    return new Date(dateTime).toLocaleString('en-US', options);
  };

  return (
    <div className="other-page-container">
      {buttonInfo && (
        <>
          <h1>{buttonInfo.name}</h1>
          <p>{buttonInfo.description}</p>
          <div className="info">
            <h3>תאריך יצירת הרשימה</h3>
            <p>{formatDateTime(buttonInfo.creationDate)}</p>
            <h3>עדכון אחרון</h3>
            <p>{formatDateTime(buttonInfo.lastUpdateDate)}</p>
            <p>{buttonInfo.lastUpdateDescription}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default OtherPage;
