import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Button = ({ id, buttonText, buttonDescription, onDelete }) => {
  return (
    <div className="main-button-container">
      <h3>{buttonText}</h3>
      <p>{buttonDescription}</p>
      <div className="nested-buttons">
        <Link to={`/page/${id}`}>
          <button className="nested-button">להצגת הרשימה</button>
        </Link>
        <button className="nested-button" onClick={() => onDelete(id)}>למחיקת הרשימה</button>
      </div>
    </div>
  );
}

export default Button;
