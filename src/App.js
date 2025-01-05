import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
//import About from "./components/About";
function App() {
  return (
    <>
      <NavBar title="TextUtils" aboutText="About" />
      <div className="container">
        <TextForm headings="Enter The Text To Analyze"/>
        {/* <About /> */}
      </div>
    </>
  );
}
export default App;
