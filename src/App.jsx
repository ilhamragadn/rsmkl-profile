import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./pages/About";
import Doctor from "./pages/Doctor";
import InpatientRoom from "./pages/InpatientRoom";
import Polyclinic from "./pages/Polyclinic";
import Welcome from "./pages/Welcome";
import Navbar from "./components/main/Navbar";
import DetailInpatientRoom from "./pages/DetailInpatientRoom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/inpatient-room" element={<InpatientRoom />} />
        <Route
          path="/detail-inpatient-room/:id"
          element={<DetailInpatientRoom />}
        />
        <Route path="/polyclinic" element={<Polyclinic />} />
      </Routes>
    </Router>
  );
};

export default App;
