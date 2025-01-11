import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
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
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <button className="bg-primary rounded mx-2" onClick={() => { props.handleMode('primary') }} style={{ height: "20px", width: "20px", cursor: 'pointer', border: 'none' }}></button>
            <button className="bg-success rounded mx-2" onClick={() => { props.handleMode('success') }} style={{ height: "20px", width: "20px", cursor: 'pointer', border: 'none' }}></button>
            <button className="bg-danger rounded mx-2" onClick={() => { props.handleMode('danger') }} style={{ height: "20px", width: "20px", cursor: 'pointer', border: 'none' }}></button>
            <button className="bg-warning rounded mx-2" onClick={() => { props.handleMode('warning') }} style={{ height: "20px", width: "20px", cursor: 'pointer', border: 'none' }}></button>
            <button className="bg-info rounded mx-2" onClick={() => { props.handleMode('info') }} style={{ height: "20px", width: "20px", cursor: 'pointer', border: 'none' }}></button>
          </div>
          <div
            className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}
          >
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              onClick={() => { props.handleMode(props.mode === "light" ? "dark" : "light") }}
            />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Enable {props.mode === "light" ? "dark" : "light"} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  handleMode: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  aboutText: "About Text",
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
  mode: PropTypes.string.isRequired,
  handleMode: PropTypes.func.isRequired,
};

NavBar.defaultProps = {
  aboutText: "About Text",
};
