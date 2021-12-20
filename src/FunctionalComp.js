import React, { useState, useEffect, useRef } from "react";
import SubChild from "./SubChild";
import axios from "axios";

const FunctionalComp = (props) => {
  const [state, setState] = useState({
    loading: false,
    data: [],
    count: 0,
    time: 0,
    toggleClock: true,
  });

  const timer = useRef(null);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1").then((res) => {
      setState({ ...state, data: res.data.data });
    });
  }, []);

  useEffect(() => {
    if (state.toggleClock) {
      timer.current = setInterval(() => {
        setState((prev) => {
          return { ...prev, time: prev.time + 1 };
        });
      }, 1000);
    }
  }, [state.toggleClock]);

  const incrementCount = () => {
    const newCount = state.count + 1;
    setState({ ...state, count: newCount });
    console.log("new count", state.count);
  };
  // const a = 10;
  const catchInfo = (data) => {
    console.log("Child Component ", data);
    props.sendInfo(data);
  };

  const toggleClock = () => {
    clearInterval(timer.current);
    setState((prev) => {
      return { ...state, toggleClock: !prev.toggleClock };
    });
  };

  return (
    <div>
      <h2>Class Component</h2>
      <button onClick={incrementCount}>Increase Count</button>
      <p>
        <b>Counter : </b>
        {state.count}
      </p>
      {/*  dont do this : setState('changes') instead write : setState(()=> 'changes)*/}
      <button onClick={() => setState({ ...state, count: 0 })}>
        Clear Counter
      </button>
      <button onClick={toggleClock}>
        {state.toggleClock ? "Stop Clock" : "Start Clock"}
      </button>
      <p>Time passed: {state.time} secs</p>

      <SubChild
        data={state.data}
        name={props.name}
        backInfo={catchInfo}
        loading={props.loading}
      />
    </div>
  );
};

export default FunctionalComp;
