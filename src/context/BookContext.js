import React  , {createContext ,useState} from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) => {
   const [books,setBooks] =  useState([
        {title:'The Killl List' ,id:1},
        {title:'The Fault In Our Stars' ,id:2},
        {title:'The Day' ,id:3},
        {title:'The Afghan' ,id:4}
    ])
    return (
        <BookContext.Provider value ={{books}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider