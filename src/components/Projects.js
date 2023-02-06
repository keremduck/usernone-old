import { Oval } from 'react-loader-spinner'
import Github from '../api/Github'
export default function Projects() {
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
      <h1 id="text"><a href="https://discord.com/users/722901871001337968"><img src="https://cdn.discordapp.com/avatars/722901871001337968/09609854bdd661d39e25f53e7b9abf30.webp" align="right" className='rounded-circle'></img></a>none</h1>
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
