import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profile_img from '../img/profile_img.png';
import Social from '../components/Social'


class Blog extends Component {
    render() {
        return (
            <div className="condiv home">
            <ReactTypingEffect className="typingeffect" text={['Currently being restructured...','Please check back again soon...']} speed={100} eraseDelay={700}/>
            </div>
            )
        }
    }

    export default Blog
