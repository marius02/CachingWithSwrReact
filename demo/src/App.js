import React from "react";
import { Button } from "@material-ui/core";

const data = ["BMW", "Audi", "Mercedes", "Fiat"];
function App() {
  return (
    <div className="App">
      {data.map((car) => {
        return (
          <Button variant="contained" color="primary">
            {car}
          </Button>
        );
      })}
    </div>
  );
}

export default App;
