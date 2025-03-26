

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Component/AuthContext";
import Signup from "./Component/signup";
import Login from "./Component/Login";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
