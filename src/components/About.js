import React from "react";
import PropTypes from 'prop-types';

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
    border: '2px solid' + props.mode === 'dark' ? 'grey' : 'white',
    borderColor: props.mode === 'dark' ? 'grey' : 'white'
  };

  return (
    <div className="container my-3" style={myStyle}>
    <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white' }}>About US</h2>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong> Analyze Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Text Util web app helpyou to convrt the text to UpperCase
              ,lowercase,clear the text and copytext and etc functionality to work around the text
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong> About US</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              This website aims to help you with tasks where text formatting is needed.
              It's not intended to replace a word processor,
              but the formatting tools available here can help speed up some jobs which might otherwise be long and repetitive.
              TXTformat can also quickly tell you how many words and characters are in your text.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Comaptible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Different browsers read website code differently,
              so it's important to ensure that your website is compatible across multiple browsers.
              You can use tools like SortSite to scan your website for browser compatibility issues
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  mode: PropTypes.string.isRequired,
};
