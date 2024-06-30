import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/navber';
import Home from '../src/components/home';
import AddListForm from '../src/components/AddListForm';
// import SearchLists from '../src/components/SearchLists';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-list" element={<AddListForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
