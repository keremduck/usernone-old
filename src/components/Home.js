import '../css/Home.css'
import '../css/Loader.css'
import {Oval} from 'react-loader-spinner'
import Card from './Card';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch('https://api.lanyard.rest/v1/users/722901871001337968');
    const data = await response.json();
    const arr = await [data.data];
    await setData(arr);
    console.log(arr)
  }


  useEffect(() => {
    getData();
  },[])
    return (
    <>
    <div>
      <title>None - Home Page</title>
    <div className={"row","loader hidden"}>
    <Oval
    heigth="100"
    width="100"
    color='white'
    ariaLabel='loading'
  />
    </div>
    {data.map(item => {
      return(<h1 id="text"><a href="https://discord.com/users/722901871001337968"><img src={"https://cdn.discordapp.com/avatars/722901871001337968/" + item.discord_user.avatar + ".gif"} align="right" className='rounded-circle'></img></a>{item.discord_user.username}</h1>)
    })}

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
      <Card src="https://i.hizliresim.com/2t1w66b.png" desc="I use NodeJS for 7 months"/>
      <Card src="https://i.hizliresim.com/7uptv1n.png" desc="I use MongoDB for 6 months"/>
      <Card src="https://i.hizliresim.com/mw62vg1." desc="I use NextJS for 2 months"/>
      <Card src="https://i.hizliresim.com/ipbg0j5.png" desc="I use Python for 1 months"/>
      <Card src="https://i.hizliresim.com/owvkeei.png" desc="I use Javascript for 1 years"/>
    </center>

    </div> 
    </> 
    )
  }

