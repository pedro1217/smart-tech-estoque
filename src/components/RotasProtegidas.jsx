// src/components/RotasProtegidas.jsx
import { Navigate } from "react-router-dom";

function RotasProtegidas({ children }) {
  const usuario = localStorage.getItem("usuario");

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default RotasProtegidas;