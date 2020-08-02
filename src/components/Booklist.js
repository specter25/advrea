import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


const Booklist = () => {
    const {isLightTheme ,light ,dark} = useContext(ThemeContext);
    const theme = isLightTheme?light:dark ;
    return (
        <div className="book-list" style ={{background:theme.bg, color:theme.syntax}}>
            
                <ul>
                    <li  style ={{background:theme.ui, }}>The Kill List</li>
                    <li  style ={{background:theme.ui, }}>The fault in our stars</li>
                    <li  style ={{background:theme.ui, }}>the Day of  the Jackal</li>
                </ul>   
        </div>
    )
}

export default Booklist