import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Doctor from "./pages/Doctor";
import Welcome from "./pages/Welcome";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
    </Router>
  );
};

export default App;
