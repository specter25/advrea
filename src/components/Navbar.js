import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { AuthContext } from '../context/AuthContext';



class Navbar extends Component {


    render() {

        return (
            <AuthContext.Consumer>{(authContext) =>(
                <ThemeContext.Consumer>{(themeContext)=>{
                    console.log(this.context)
                    const {isLightTheme ,light , dark} = 
                    themeContext;
                    const {isAuthenticated ,toggleAuth} = authContext;
                    const theme = isLightTheme?light:dark ;
                    return (
                        <nav style ={{background:theme.ui , color:theme.syntax}}>
                            <h1>Context App</h1> 
                            <div>
                                {isAuthenticated?'Loggedin':'Loggedout'}
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>               
                        </nav>
                    )
                    }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>
        )
        
    }
}

export default Navbar