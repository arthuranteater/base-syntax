import React from "react";
import "../App.css";

const Userinput = props => {
  return (
    <div>
      <h1>Syntax Assignment</h1>
      <input
        className="input"
        type="text"
        onChange={props.changed}
        value={props.name}
      />
    </div>
  );
};

export default Userinput;
