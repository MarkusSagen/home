import React, { Component } from 'react';
import Navitem from './Navitem';
import Profile from './Profile';


class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'NavItemActive':''
        }
    }
    activeitem=(x)=>
    {
        if(this.state.NavItemActive.length>0){
            document.getElementById(this.state.NavItemActive).classList.remove('active');
        }
        this.setState({'NavItemActive':x},()=>{
            document.getElementById(this.state.NavItemActive).classList.add('active');
        });
    };
    render() {
        return (
            <nav>
            <ul>
            <Navitem item="Home" tolink="/"  activec={this.activeitem}></Navitem>
            <Navitem item="About" tolink="/about"  activec={this.activeitem}></Navitem>
            <Navitem item="Projects" tolink="/projects"  activec={this.activeitem}></Navitem>
            <Navitem item="Blog" tolink="/blog"  activec={this.activeitem}></Navitem>
            </ul>
            <div>
              <Profile name="Markus Sagen" desc="AI, ML, Deep Learning,
              NLP, Probabilistic Programming,
              Bayesian Data Analysis,
              Time Series,
              Programming"></Profile>
            </div>
            </nav>
            )
        }
    }

    export default Navbar
