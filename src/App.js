import "./App.css";
import { useState } from "react";

function App() {
  const kmsPerFullTank = 500;
  const tankCapacity = 55;
  const costPerLitre = 1.55;
  const kmsPerLitre = tankCapacity / kmsPerFullTank;

  const [kmsDriven, setKmsDriven] = useState(0);

  const [costOfTrip, setCostOfTrip] = useState(0);

  function handleSubmit() {
    setCostOfTrip(kmsPerLitre * costPerLitre * kmsDriven);
  }

  return (
    <div className="App">
      <header>Fuel Cost Calculator</header>
      <br />
      How many KMs did you drive today?: <br />
      <input type="text" onChange={(e) => setKmsDriven(e.target.value)} />{" "}
      <button onClick={handleSubmit}>Submit</button>
      <br />
      Your fuel cost: {costOfTrip}
    </div>
  );
}

export default App;
