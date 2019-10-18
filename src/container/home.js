import React from 'react';
import Sidebar from '../components/sidebar';
import Profile from '../components/profile';

class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <Sidebar/>
                <Profile/>
            </div>
        );
    }
}

export default Home;