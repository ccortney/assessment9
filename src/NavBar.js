import "./NavBar.css";
import {useState} from "react"
import { Link } from "react-router-dom";

// a functional navbar with a dropdown for choosing snacks or drinks
function NavBar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="navbar-brand">Snack or Booze</Link>
        <ul className="navbar-items">
          <li className="navbar-item"><Link to="/suggestion">Add a Suggestion</Link></li>
          <li className="navbar-item" onClick={() => setDropdownOpen(!dropdownOpen)}>Menu
          </li>
          {dropdownOpen && 
            <ul className={dropdownOpen ? "menu" : "menu clicked"} onClick={() => setDropdownOpen(!dropdownOpen)}>
              <li className="menu-item" onClick={() => setDropdownOpen(false)}>
                <Link to="/snacks">Snacks</Link>
              </li>
              <li className="menu-item" onClick={() => setDropdownOpen(false)}>
                <Link to="/drinks">Drinks</Link>
              </li>
            </ul>
          }
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;