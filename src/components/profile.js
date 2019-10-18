import React from 'react';
import Typist from 'react-typist';

class Profile extends React.Component{
    render(){
        return(
            <div className="profile">
                <Typist className="typist">
                    <span>Hello, Babloo here</span>
                    <Typist.Backspace count={18} delay={500} />
                    <span>I am a javascript developer</span>
                    <Typist.Backspace count={27} delay={500} />
                    <span>I know React js</span>
                    <Typist.Backspace count={8} delay={500} />
                    <span>Redux</span>
                    <Typist.Backspace count={5} delay={500} />
                    <span>Linux</span>
                    <Typist.Backspace count={5} delay={500} />
                    <span>HTML</span>
                    <Typist.Backspace count={4} delay={500} />
                    <span>Scss, Sass</span>
                    <Typist.Backspace count={10} delay={500} />
                    <span>Git</span>
                    <Typist.Backspace count={3} delay={500} />
                    <span>MongoDB</span>
                    <Typist.Backspace count={18} delay={500} />
                    <span>Thank you!!!</span>
                </Typist>
            </div>
        );
    }
}

export default Profile;