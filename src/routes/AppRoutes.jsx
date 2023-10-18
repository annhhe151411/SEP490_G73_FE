const { Routes, Route } = require("react-router-dom");
const { default: Login } = require("~/pages/Auth/Login");
const { default: HomePage } = require("~/pages/LandingPage/HomePage");

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
