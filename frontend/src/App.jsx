import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import Auth from "./Components/Auth/Auth";
import InputPage from "./Components/InputPage/InputPage"
import InputPageElectric from "./Components/InputPageElectric/InputPageElectric"
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/signin" element={<Auth/>} />
          <Route path="/signup" element={<Auth/>} />
          <Route path="/input" element ={<InputPage/>} />
          <Route path="/electric" element ={<InputPageElectric/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
