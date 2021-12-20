import React from "react";
const NextLevel = (props) => {
  const array = props.data;

  const renderedArray = array.map((a, i) => {
    return (
      <div style={{ backgroundColor: "lightblue", margin: "50px" }} key={i}>
        <p>My name is {`${a.first_name} ${a.last_name}`}</p>
        <p>My email is {a.email}</p>
      </div>
    );
  });

  const backInfo = () => {
    props.backInfo("Deepesh Jain");
  };
  return (
    <div>
      <p>{props.name}</p>
      <button onClick={backInfo}>Send Data back</button>
      {props.loading ? renderedArray : null}
    </div>
  );
};

export default NextLevel;
