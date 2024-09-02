import React from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

const NavBar = (props) => {
  const { active } = props;

  return (
    <React.Fragment>
      <div className="nav-container ">
        <nav className="navbar ">
          <div className="nav-background content-center">
            <ul className="flex justify-around ">
              <li
                className={active === "home" ? "nav-item active" : "nav-item"}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                className={active === "about" ? "nav-item active" : "nav-item"}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                className={
                  active === "projects" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/projects">Projects</Link>
              </li>
              <li
                className={
                  active === "articles" ? "nav-item active" : "nav-item"
                }
                // className="article-wrapper"
              >
                <Link to="/articles">Articles</Link>
                {/* <div className="articles" to="/articles">Articles</div>
                <div className="popup">Coming Soon</div> */}
              </li>
              <li
                className={
                  active === "contact" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="/contact">Let's connect</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
