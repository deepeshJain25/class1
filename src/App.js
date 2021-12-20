import "./App.css";
import { useState, useRef, useEffect } from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComp from "./FunctionalComp";
import Button from "@mui/material/Button";
import Frag from "./Fragment";
import { Link } from "react-router-dom";

function App(props) {
  const clickHandler = () => {
    console.log(name);
  };

  const clearAll = () => {
    setName("");
  };

  const changeHandler = (e) => {
    setName(e.target.value);
  };

  const submitHandler = () => {
    setLoading((prev) => {
      return !prev;
    });
  };

  const catchInfo = (data) => {
    console.log("App catch");
    setName(data);
  };

  const inputRef = useRef("abc");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleRef = () => {
    console.log(inputRef.current.focus());
  };

  //state
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Class</h1>
      <input onChange={changeHandler} value={name} ref={inputRef} />

      <Frag>
        <Button variant="contained" onClick={clickHandler} margin="10px">
          Click me
        </Button>
        <Button variant="contained" onClick={clearAll} margin="10px">
          Clear input
        </Button>
        <Button variant="contained" onClick={submitHandler} margin="10px">
          {loading ? "Hide Info" : "Show Info"}
        </Button>
        <Button variant="contained" onClick={handleRef} margin="10px">
          Focus on input
        </Button>
      </Frag>
      <Link to="/about">About</Link>
      <FunctionalComp loading={loading} name={name} sendInfo={catchInfo} />
    </div>
  );
}

export default App;
