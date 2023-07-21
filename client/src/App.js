import './App.css';
import React from 'react';
import FrontPage from './components/FrontPage';
import BookPage from './components/BookPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () =>{  
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={ <FrontPage /> } />
            <Route  path="/book/:bookName" element={ <BookPage /> }/>
          </Routes>
        </div>
      </Router>
  )
}

export default App;
