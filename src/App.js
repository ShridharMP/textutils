import "./App.css";
import TextForm from "./components/TextForm";
import NavBar from "./components/NavBar";
import React, { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const [mode, setMode] = useState("dark");

  const [alert, setAlert] = useState({ msg: "", type: "success" });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Darkmode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode has been Enabled", "success");
    }
  };

  return (
    <>
      <NavBar
        title="TextUtils"
        aboutText="About"
        handleMode={handleMode}
        mode={mode}
      />
      <Alert alert={alert}></Alert>
      <div className="container" mode={mode}>
        <TextForm headings="Enter The Text To Analyze" mode={mode} />
      </div>
    </>
  );
}
export default App;
