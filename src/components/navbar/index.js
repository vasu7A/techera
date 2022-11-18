import {Link} from 'react-router-dom'
import './index.css'

const NavBar = () => (
  <nav className="navbar">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
        className="icon"
      />
    </Link>
  </nav>
)

export default NavBar
