import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Booklist from './components/Booklist'
import Songlist from './components/SongList'

import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggle from './components/ThemeToggle'
import AuthContextProvider from "./context/AuthContext";
import BookContextProvider, { BookContext } from "./context/BookContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
        <Navbar />
        <BookContextProvider>
          <Booklist />
        </BookContextProvider>

        <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
      {/* <br></br>
      <br></br>
      <br></br>
      
      <Songlist /> */}
    </div>


  );
}

export default App;
