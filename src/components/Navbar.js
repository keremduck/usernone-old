import '../css/Navbar.css'

export default function Navbar() {
    return (
        <div>
        <nav className="justify-content-between navbar navbar-expand-lg navbar-dark">
  <a className="navbar-brand" href="/">
      usernone.me
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link mr-sm-2 my-2 my-lg-0" href="/" id="home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/projects" id="projects">Projects</a>
      </li>
    </ul>
</nav>
</div>
    )
}
