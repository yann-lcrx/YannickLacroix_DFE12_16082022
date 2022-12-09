import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";

function AppRouter() {
  return (
    <Routes>
      <Route path="/:userId" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRouter;
