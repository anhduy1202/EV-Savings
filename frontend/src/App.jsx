import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Components/Home/HomePage";
import Auth from "./Components/Auth/Auth";
import InputPage from "./Components/InputPage/InputPage";
import UserProfile from "./Components/UserProfile/UserProfile";
import InputPageElectric from "./Components/InputPage/InputPageElectric/InputPageElectric";
import InputPageGas from "./Components/InputPage/InputPageGas/InputPageGas";
import ResultPage from "./Components/ResultPage/ResultPage";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/signin" element={<Auth />} />
          <Route path="/signup" element={<Auth />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/electric" element={<InputPageElectric />} />
          <Route path="/gasoline" element={<InputPageGas />} />
          <Route path="/result" element={<ResultPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
