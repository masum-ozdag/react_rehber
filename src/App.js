import React, { useState } from "react";
import ExampleModal from "./companents/ExampleModal";
import Tablee from "./companents/Tablee";
import "bootstrap/dist/css/bootstrap.min.css";
import Update from "./companents/Update";

function App() {
  const [person, setPerson] = useState([]);

  return (
    <div>
      {/* <Update /> */}
      <ExampleModal person={person} setPerson={setPerson} />

      <Tablee person={person} setPerson={setPerson} />
    </div>
  );
}

export default App;
