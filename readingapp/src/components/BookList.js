import React ,{useContext} from 'react'
import{ BookContext } from '../context/BookContext'
import BookDetails from './BookDetails'

const BookList = () => {
    const {books} = useContext(BookContext)


    return (
        <div>
            {books.length ?
             (
             <div className="book-list">
                 <ul>
                     {books.map(book=> <BookDetails book={book} key = {book.id} />)}
                 </ul>
             </div>
             ):
             (
             <div className="empty">
                 No books to read hello free time
             </div>
             )}
        </div>

    )
}
 export default BookList