import React from "react";

class Person extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.name}</div>;
  }
}

export default Person;
