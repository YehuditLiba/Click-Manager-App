import React from 'react';
import { useHistory } from 'react-router-dom';

const MainButton = () => {
  const history = useHistory();

  const handleButtonClick = () => {
    // Navigate to another page when the button is clicked
    history.push('/another-page');
  };

  return (
    <button onClick={handleButtonClick}>
      Main Button
      <button>Inner Button 1</button>
      <button>Inner Button 2</button>
    </button>
  );
};

export default MainButton;