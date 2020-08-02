import React  , {createContext ,useState} from 'react'
import uuid from 'uuid/dist/v1'
export const BookContext = createContext();

const BookContextProvider = (props) => {
   const [books,setBooks] =  useState([
        {title:'The Killl List' , author :' Frederick Forsyth' ,id:1},
        {title:'The Fault In Our Stars', author :' Frederick Forsyth' ,id:2},
        {title:'The Day', author :' Frederick Forsyth' ,id:3},
        {title:'The Afghan', author :' Frederick Forsyth' ,id:4}
    ])
    const addBook=(title,author)=>{
        setBooks([ ... books , {title,author ,id:uuid() }])
    }
    const deleteBook=(id)=>{
        setBooks(books.filter(book=> book.id!==id))
    }
    return (
        <BookContext.Provider value ={{books , addBook ,deleteBook}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider