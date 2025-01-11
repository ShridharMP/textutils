import React, { useState } from "react";
import PropTypes from 'prop-types';

TextForm.propTypes = {
  showAlert: PropTypes.func.isRequired,
  headings: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired
};

export default function TextForm(props) {
  const [text, setText] = useState("");

  const changeToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const changeToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handlePaste = async () => {
    try {
      let newText = await navigator.clipboard.readText();
      setText(newText);
      props.showAlert("Copied Text", "success")
    } catch (err) {
      console.log(err);
    }
  };
  const speak = () => {
    const msg = new SpeechSynthesisUtterance();
    msg.text = text;
    msg.volume = 1;
    msg.pitch = 1;
    const voices = window.speechSynthesis.getVoices();
    const femaleVoice = voices.find(
      (voice) => voice.name === "Google US English" && voice.gender === "female"
    );
    if (femaleVoice) {
      msg.voice = femaleVoice;
    }
    window.speechSynthesis.speak(msg);
    props.showAlert("Speker Enabled", "success")
  };


  const clearText = () => {
    setText("");
    props.showAlert("Cleared the text", "success")
  };
  const removeExtraSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
    props.showAlert("Removed Extra Space", "success")
  };
  return (
    < >
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'grey' }}>
        <h1>{props.headings}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            placeholder="Enter the text here"
            id="myTextAreaBox"
            value={text}
            rows="8"
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? '#39393e' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1" onClick={changeToUpperCase}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={changeToLowerCase}>
          Convert To LowerCase
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-1"
        >
          Speak
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handlePaste}>
          Reload Previous Text
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={removeExtraSpaces}
        >
          Remove Extra Space In Paragraph
        </button>
      </div>
      <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'grey' }}>
        <h2>Text Summary</h2>
        <b>{text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> Words <b>{text.length}</b> Characters.
        Required <b>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length}</b> Minutes to Read.
        <h2>Preview</h2>
        {text.length > 0 ? text : "Nothing to preview!"}
      </div>
    </>
  );
}
