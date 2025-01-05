import React, { useState } from "react";

export default function TextForm(props) {
  const changeToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const changeToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // const speak = () => {
  //   let msg = new SpeechSynthesisUtterance();
  //   msg.text = text;
  //   window.speechSynthesis.speak(msg);
  // };
  const handlePaste = async () => {
    try {
      let newText = await navigator.clipboard.readText();
      setText(newText);
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
  };

  const [text, setText] = useState("");

  const clearText = () => {
    setText("");
  };
  // const [countNoOfSentences, setCountNoOfSentences] = useState(
  //   text.split(/[".!?"]/).length - 1
  // );
  // const handleCountNoOfSentences = () => {
  //   setCountNoOfSentences(text.split(/[".!?"]/).length - 1);
  // };

  const removeExtraSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
  };
  return (
    <>
      <div className="container">
        <h1>{props.headings}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            id="myTextAreaBox"
            value={text}
            rows="8"
            onChange={handleOnChange}
          ></textarea>
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
        {/* <button
          className="btn btn-primary mx-2"
          onClick={handleCountNoOfSentences}
        >
          Count No Of Sentences
        </button> */}
      </div>
      <div className="container">
        <h2>Text Summary</h2>
        <b>{text.split(" ").length}</b> Words <b>{text.length}</b> Characters.
        Required <b>{0.008 * text.split(" ").length}</b> Minutes to Read. 
        {/*  No Of Sentences in Paragraph <b>{countNoOfSentences}</b> */}
        <h2>Preview</h2>
        {text}
      </div>
    </>
  );
}
