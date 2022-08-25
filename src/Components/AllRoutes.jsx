import { Routes, Route } from "react-router-dom";

import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignupPage";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
       </Routes>
    </div>
  );
}
export default AllRoutes;
