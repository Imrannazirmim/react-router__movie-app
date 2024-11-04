
import {NavLink} from "react-router-dom"

export const Header = () => {

  const NavLinkStyle = ({isActive}) => {
    return{
      color: isActive ? 'blue' : 'black',
    }
  }
  return(
    <>
      <header>
        <nav className="flex justify-between p-8 bg-slate-300">
          <h4>Web Store</h4>
          <ul className="flex gap-4">
            <li><NavLink to="/" style={NavLinkStyle}>Home</NavLink></li>
            <li><NavLink to="/contact" style={NavLinkStyle}>Contact</NavLink></li>
            <li><NavLink to="/about" style={NavLinkStyle}>About</NavLink></li>
            <li><NavLink to="/movie" style={NavLinkStyle}>Movie</NavLink></li>
          </ul>
        </nav>

      </header>
    </>
  )
};