import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'

 class Booklist extends Component {
    static contextType = ThemeContext;
    render() {
        console.log(this.context)
        const {isLightTheme ,light , dark} = this.context;
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
}
export default Booklist