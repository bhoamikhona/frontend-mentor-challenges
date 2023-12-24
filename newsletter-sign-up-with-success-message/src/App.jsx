import { Routes, Route } from "react-router-dom";
import Signup from "./Components/Signup";
import Success from "./Components/Success";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </>
  );
}

export default App;
