import React from 'react';
import profileImage from '../assets/profile.png'

class Sidebar extends React.Component{
    render(){
        return(
            <div className="sidebar">
                <div className="image-wrapper">
                    <img src={profileImage} alt="profile image here"></img>
                </div>
                <p>Babloo Mishra</p>
                <ul className="menu">
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;