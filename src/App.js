import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Booklist from './components/Booklist'
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <Booklist />
        <ThemeToggle />

      </ThemeContextProvider>
          </div>
  );
}

export default App;
