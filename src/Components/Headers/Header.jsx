import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/blog" className="nav-link">
        Blog
      </NavLink>
      <NavLink to="/contact" className="nav-link">
        Contact
      </NavLink>
      <NavLink to="/add" className="nav-link">
        DashBoard
      </NavLink>
    </nav>
  );
};

export default Header;
