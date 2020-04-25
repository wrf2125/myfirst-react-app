import React from "react";

const numbers = [1, 2, 3, 4, 5];
const total_num = [...numbers, 56, 57];

const myObj = {
  name: "RAJU",
  dob: "20-2020",
  age: 30,
};
const new_Obj = {
  ...myObj,
  place: "Hyderabad",
};

class Spread extends React.Component {
  render() {
    return (
      <div>
        {total_num} and obj name {new_Obj.name} dob{new_Obj.dob} and age{" "}
        {new_Obj.age} and place {new_Obj.place}
      </div>
    );
  }
}

export default Spread;
