import React, { Component } from 'react';
import '../css/Home.css'
import '../css/Loader.css'
import {Oval} from 'react-loader-spinner'
import Card from './Card';

class Home extends Component {
  render() {
    return <div>
      <title>None - Home Page</title>
    <div className={"row","loader hidden"}>
    <Oval
    heigth="100"
    width="100"
    color='white'
    ariaLabel='loading'
  />
    </div>
    <h1 id="text"><a href="https://discord.com/users/722901871001337968"><img src="https://cdn.discordapp.com/avatars/722901871001337968/a_f6f1063debb6d26f25a4971df4d617e6.gif" align="right" className='rounded-circle'></img></a>none</h1>
    <div className="word"></div>
    <br/>
    <div className="emojis">
    <a style={{"marginRight":"10px", "textDecoration":"none"}} href="https://discord.com/users/722901871001337968" className="fab fa-discord"></a>
    <a style={{"margin":"10px", "textDecoration":"none"}} href="https://github.com/noneduck" className="fab fa-github"></a>
    </div>
    <hr className='hr'/>
    <h1 id="text2">about me</h1>
    <p id="paragraph">
      Hello, I'm None. I am a high-school student from Turkey. I have been in coding since 2020. I am a newbie full stack developer.<br/> I have been working on web development for the last 4 months. I mainly use Node based technologies. My favourite technologies is ReactJS.
    </p>
    <center>
      <Card src="https://i.hizliresim.com/qk2h7ay.png" desc="I use ReactJS for 4 months"/>
      <Card src="https://i.hizliresim.com/2t1w66b.png" desc="I use NodeJS for 1 years"/>
      <Card src="https://i.hizliresim.com/7uptv1n.png" desc="I use MongoDB for 6 months"/>
      <Card src="https://i.hizliresim.com/mw62vg1." desc="I use NextJS for 2 months"/>
      <Card src="https://i.hizliresim.com/ipbg0j5.png" desc="I use Python for 1 months"/>
      <Card src="https://i.hizliresim.com/owvkeei.png" desc="I use Javascript for 1 years"/>
    </center>

    </div>  
  }
}

export default Home;