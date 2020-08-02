import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import NewBookForm from './components/NewBookForm'

import BookContextProvider from "./context/BookContext";

function App() {
  return (
    <div className="App">


        <BookContextProvider>
        <Navbar />
        <BookList />
        <NewBookForm />
        </BookContextProvider>

    </div>


  );
}

export default App;
