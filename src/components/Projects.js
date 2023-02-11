import { Oval } from 'react-loader-spinner'
import Github from '../api/Github'
import { useEffect, useState } from 'react';
export default function Projects() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch('https://api.lanyard.rest/v1/users/722901871001337968');
    const data = await response.json();
    const arr = await [data.data];
    await setData(arr);
  }


  useEffect(() => {
    getData();
  },[])
    return (
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
      <a style={{"marginRight":"10px"}} href="https://discord.com/users/722901871001337968" className="fab fa-discord"></a>
      <a style={{"margin":"10px"}} href="https://github.com/noneduck" className="fab fa-github"></a>
      </div>
      <hr className='hr'/>
      <h1 id="text2">projects</h1>
      <Github/>
      </div> 
    )
}
