import "./App.css";
import { useState } from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComp from "./FunctionalComp";
import Button from "@mui/material/Button";
import Frag from "./Fragment";

function App() {
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

  //state
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Class</h1>
      <input onChange={changeHandler} value={name} />
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
      </Frag>
      <FunctionalComp loading={loading} name={name} sendInfo={catchInfo} />
    </div>
  );
}

export default App;
