import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import Auth from "./Components/Auth/Auth";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/signin" element={<Auth/>} />
          <Route path="/signup" element={<Auth/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
