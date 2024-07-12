import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Header /> {/* Header will be shown on all routes */}
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} /> {/* Ensure /signup route is defined */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
