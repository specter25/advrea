import React ,{useState ,useContext} from 'react';
import {BookContext } from '../context/BookContext'


const NewBookForm = () =>{
    const [title ,setTitle]=useState('')
    const [author ,setAuthor]=useState('')
    const {addBook} = useContext(BookContext)
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(title)
        addBook(title , author)
        setTitle('')
        setAuthor('')

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label forhtml="title">Title</label>
                <input type="text" className="form-control" id="title"  
                onChange={(e)=>setTitle(e.target.value)}
                value =  {title}
                />

            </div>
            <div className="form-group">
                <label forhtml="author">Author</label>
                <input type="text" className="form-control" id="author" aria-describedby="emailHelp" 
                onChange={(e)=>setAuthor(e.target.value)}
                value =  {author}
                />
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    )
} 

export default NewBookForm