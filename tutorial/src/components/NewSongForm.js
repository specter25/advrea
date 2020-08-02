import React ,{useState} from 'react';


const NewSongForm = ({addSong}) =>{
    const [title ,setTitle]=useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(title)
        addSong(title)
        setTitle('')

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label forhtml="exampleInputEmail1">Email address</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                onChange={(e)=>setTitle(e.target.value)}
                value =  {title}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    )
} 

export default NewSongForm