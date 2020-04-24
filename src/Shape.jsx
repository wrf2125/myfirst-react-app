import React from "react";
import { pi } from "./Constants.jsx";

const Area = 0;
class Shape extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Rectangle", length: 20, breadth: 30 };
  }

  Area = (length, breadth) => {
    return pi * length * breadth;
  };

  render() {
    return (
      <h1>
        Welcome , {this.props.name} , your Area is{" "}
        {this.Area(this.props.length, this.props.breadth)}
        and the default {this.state.name}area is{" "}
        {this.Area(this.state.length, this.state.breadth)}
      </h1>
    );
  }
}

export default Shape;
