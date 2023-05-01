import Qrcode from "./components/Qrcode";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Plant from "./components/Plant";

let data = require("./tree-data.json");

function App() {
  return (
    <>
      <div className="App">
        <div className="toolbar">
          <h1>Hello</h1>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/qrcode" element={<Qrcode />} />
        </Routes>
        <Routes>
          <Route path="/plant/:id" element={<Plant />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
