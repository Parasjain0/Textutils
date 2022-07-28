import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.myMode} bg-${props.myMode}`}
    >
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                {props.about}
              </Link>
            </li>
          </ul>
        </div>
        <div className={`form-check form-switch text-${props.myMode==='light'?'dark':'light'}`}>
          <input
            className="form-check-input"
            type="checkbox"
            onClick={props.togglemode}
            role="switch"
            id="themeSwitch"
          />
          <label className="form-check-label" htmlFor="themeSwitch">
            {`Dark mode ${props.myMode==='light'?'disabled':'enabled'} `}
          </label>
        </div>
      </div>
    </nav>
  );
}
Navbar.prototypes = {
  // this function only set the datatypes of receving props
  title: PropTypes.string.isRequired, // isRequired means that this value is nessasary to fill
  about: PropTypes.string,
};
Navbar.defaultProps = {
  // this set the default value if we do not pass any value
  title: "Set title here",
  about: "Write about here",
};
