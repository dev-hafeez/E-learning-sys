// App.js
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import StudentLogin from "./components/StudentLogin";
import FacultyLogin from "./components/FacultyLogin";
import Dashboard from "./components/Dashboard";
import FacultyDash from "./components/FacultyDash";
import Marksst from './components/Marksst';
import Students from './components/Students';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        
        <Route path="/studentlogin" element={<StudentLogin />} />
        
        <Route path="/facultylogin" element={<FacultyLogin />} />

        <Route path="/Dashboard" element={<Dashboard />} />

        <Route path="/FacultyDash" element={<FacultyDash />} />

        <Route path="/Marksst" element={<Marksst />} />

        <Route path="/Students" element={<Students />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
