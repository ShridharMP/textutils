import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
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
    }, 3000);
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
      <div className="container my-3" mode={mode} style={{ color: mode === 'dark' ? 'light' : 'grey' }}>
        <TextForm headings="Enter The Text To Analyze" mode={mode} showAlert={showAlert}/>
      </div>
    </>
  );
}
export default App;
