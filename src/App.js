import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState({ msg: "", type: "success" });

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const handleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("DarkMode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("LightMode has been Enabled", "success");
    }
  };

  return (
    <Router>
      <NavBar
        title="TextUtils"
        aboutText="About"
        handleMode={handleMode}
        mode={mode}
      />
      <Alert alert={alert}></Alert>
      <div className="container" mode={mode}>
        <Routes>
          <Route exact path="/" element={<TextForm headings="Enter The Text To Analyze" mode={mode} showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
