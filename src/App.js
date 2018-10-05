import React, { Component } from "react";
import "./App.css";
import Userinput from "./User/Userinput";
import Useroutput from "./User/Useroutput";

class App extends Component {
  state = {
    name: "Hunt"
  };

  paragraphClickedHandler = newName => {
    //console.log("this was clicked");
    this.setState({ name: newName });
  };

  inputChangedHandler = event => {
    this.setState({ name: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Userinput name={this.state.name} changed={this.inputChangedHandler} />
        <Useroutput
          name={this.state.name}
          clicked={this.paragraphClickedHandler.bind(this.name, "Arthur")}
        />
      </div>
    );
  }
}

export default App;
