import "./styles.css";
import React, { useState } from "react";
function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [name, setName] = useState("");
  const calculateBMI = () => {
    var heightSquare = ((height / 100) * height) / 100;
    var bmi = weight / heightSquare;
    if (bmi < 16)
      window.alert(
        "Hi " + name + "You are completely underweight(severe thinner)"
      );
    else if (bmi >= 16 && bmi < 17)
      window.alert(
        "Hi" + name + "You are moderately underweight(Moderate thinner)"
      );
    else if (bmi >= 17 && bmi < 18.5)
      window.alert("Hi" + name + "You are little underweight(Mild thinness)");
    else if (bmi >= 18.5 && bmi <= 24.99) {
      window.alert("Hi.." + name + "...You are in a healthy weight range");
    } else if (bmi >= 25 && bmi <= 29.9) {
      window.alert("Hi.." + name + "...You are overweight");
    } else if (bmi >= 30) {
      window.alert("Hi.." + name + "...You are obese");
    } else if (bmi < 18.5) {
      window.alert("Hi.." + name + "...You are under weight");
    }
  };
  const handleHeight = (e) => {
    setHeight(e.traget.value);
  };
  const handleWeight = (e) => {
    setWeight(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const submitMe = (e) => {
    e.preventDefault();
    calculateBMI();
  };

  return (
    <div className="App">
      <h1>BMI CALCULATOR</h1>
      <form onSubmit={submitMe}>
        <label>Enter your name</label>
        <input type="text" name="name" value={name} onChange={handleName} />
        <br />
        <label>Enter height in cm</label>
        <input
          type="text"
          name="height"
          value={height}
          onChange={handleHeight}
        />
        <label>Enter weight in kg</label>
        <input
          type="text"
          name="weight"
          value={weight}
          onChange={handleWeight}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
export default App;
