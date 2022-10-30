import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css";

class NavBar extends React.Component{
    render(){
        return (
            <div className="nav">
                <div className="links">
                    <Link className="link" to="/About">About</Link>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/Profile">Profile</Link>
                </div>
            </div>
        )
    }
}

export default NavBar;