//ModeSelect

import HomePage from "~/pages/LandingPage/HomePage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "~/pages/Auth/Login";
import Register from "./pages/Auth/Register";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
