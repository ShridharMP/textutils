import React, { useState } from "react";

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
    //props.showAlert("Converted to LowerCase","success");
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
            id="myTextAreaBox"
            value={text}
            rows="8"
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white',color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={changeToUpperCase}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={changeToLowerCase}>
          Convert To LowerCase
        </button>
        <button
          type="submit"
          onClick={speak}
          className="btn btn-warning mx-2 my-2"
        >
          Speak
        </button>
        <button className="btn btn-primary mx-2" onClick={clearText}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handlePaste}>
          Reload Previous Text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={removeExtraSpaces}
        >
          Remove Extra Space In Paragraph
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'grey' }}>
        <h2>Text Summary</h2>
        <b>{text.split(" ").length}</b> Words <b>{text.length}</b> Characters.
        Required <b>{0.008 * text.split(" ").length}</b> Minutes to Read.
        <h2>Preview</h2>
        {text.length > 0 ? text : "Enter something to preview"}
      </div>
    </>
  );
}
