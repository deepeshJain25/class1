import React, { useState, useEffect, useRef } from "react";
import SubChild from "./SubChild";
import axios from "axios";

const FunctionalComp = (props) => {
  const [state, setState] = useState({
    loading: false,
    data: [],
    count: 0,
  });
  // const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("https://reqres.in/api/users?page=1").then((res) => {
      console.log(res.data.data);
      setState({ ...state, data: res.data.data });
    });
  }, []);

  const incrementCount = () => {
    console.log("prev count", state.count);
    const newCount = state.count + 1;
    setState({ ...state, count: newCount });
  };

  const catchInfo = (data) => {
    console.log("Child Component ", data);
    props.sendInfo(data);
  };

  return (
    <div>
      <h2>Class Component</h2>
      <button onClick={incrementCount}>Increase Count</button>
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
