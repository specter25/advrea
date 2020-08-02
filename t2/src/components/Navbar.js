import React, { useContext } from 'react'
import { BookContext } from '../context/BookContext';




const Navbar=()=> {
    const {books} = useContext(BookContext);


    return (

        <div className="navbar">
            <h1 className="mx-auto h1">Ujjwal's Reading list</h1>
            <h4 className="mx-auto h4">Currently i have {books.length} books to get through</h4>
        </div>
    )
}


export default Navbar