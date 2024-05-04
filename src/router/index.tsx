import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ForgotPassword, Home, Login, Register } from "../pages";
const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
