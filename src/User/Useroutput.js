import React from "react";
import "../App.css";

const Useroutput = props => {
  return (
    <div>
      <p className="output" onClick={props.clicked}>
        Change Name to Arthur
      </p>
      <p>
        {props.name}
        's Paragraph
      </p>
    </div>
  );
};

export default Useroutput;
