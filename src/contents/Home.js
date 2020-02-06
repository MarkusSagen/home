import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profile_img from '../img/profile_img.png';
import Social from '../components/Social'



// class Home extends Component {
//     render() {
//         return (
//             <div className="condiv home">
//             <img src={profile_img} className="profile_img"></img>
//             <ReactTypingEffect className="typingeffect" text={['I am Abdul Wahid Naafi','I am a web developer']} speed={100} eraseDelay={700}/>
//             <Social />
//             </div>
//             )
//         }
//     }
//
//     export default Home
class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <ReactTypingEffect className="typingeffect" text={['Welcome!','Some sections are under Reconstruction']} speed={100} eraseDelay={700}/>
            </div>
            )
        }
    }

    export default Home
