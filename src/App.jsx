import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./page/log";
import Dashboard from "./page/Dashboard";
import RotasProtegidas from "./components/RotasProtegidas";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RotasProtegidas>
              <Dashboard />
            </RotasProtegidas>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;