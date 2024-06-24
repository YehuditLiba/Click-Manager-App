//מה שהיה======================================================================================================
// // import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Lists from './Lists';
// import AboutPage from './AboutPage';

// // קומפוננטה הראשית שמכילה את הניווט ואת רכיב ה-Router
// function App() {
//   return (

//     <div className="App">
//       <tryButtons></tryButtons>
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a> 
//         מה שהצאט נתן לי=========================================================*/}
//         {/* <Router>
//           <div>
//             <nav>
//               <Link to="/Lists">לחץ כאן לעבור לדף אחר</Link>
//             </nav>
//             <Route path="/Lists">
//               <Lists />
//             </Route>
//           </div>
//         </Router> */}
//         {/* <Lists></Lists>============================================= */}
//         {/* <Router>
//           <div>
//             <nav>
//               <Link to="/AboutPage">
//                 <button style={buttonStyle}>Go to About Page</button>
//               </Link>
//               <Link to="/Lists">
//                 <button style={buttonStyle}>Go to Lists Page</button>
//               </Link>
//             </nav>
//             {/* <Switch>
//               <Route exact path="/" component={Lists} />
//               <Route path="./AboutPage" component={AboutPage} />
//             </Switch> 
//             <Routes>
//               <Route exact path="/Lists" component={Lists} />
//               <Route path="/AboutPage" component={AboutPage} />
//             </Routes>
//           </div>
//         </Router> */}
        
//       </header>
//     </div>

//   );
// }


// const buttonStyle = {
//   display: 'block',
//   width: '200px',
//   height: '50px',
//   backgroundColor: '#4CAF50',
//   color: 'white',
//   border: 'none',
//   borderRadius: '4px',
//   textAlign: 'center',
//   fontSize: '16px',
//   margin: '20px auto',
//   cursor: 'pointer'
// };

// export default App;

//מה שהצאט נתן לי===========================================================================================================
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Page from './Page';
import './App.css';

function App() {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    const savedButtons = JSON.parse(localStorage.getItem('savedButtons')) || [];
    setButtons(savedButtons);
  }, []);

  useEffect(() => {
    localStorage.setItem('savedButtons', JSON.stringify(buttons));
  }, [buttons]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home buttons={buttons} setButtons={setButtons} />} />
          <Route path="/page/:id" element={<Page buttons={buttons} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
