
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function Login() {
  const navigate = useNavigate();

  function entrarDemonstracao() {
    localStorage.setItem(
      "usuario",
      JSON.stringify({
        nome: "Visitante",
        demo: true,
      })
    );

    navigate("/dashboard");
  }

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.titulo}>
          Smart Tech
        </h2>

        <p style={styles.descricao}>
          Sistema de Controle de Estoque
        </p>

        <p style={styles.aviso}>
          Este é um projeto demonstrativo.
          Utilize o botão abaixo para conhecer
          as funcionalidades do sistema.
        </p>

        <Button
          variant="contained"
          fullWidth
          onClick={entrarDemonstracao}
        >
          Acessar demonstração
        </Button>
      </div>
    </div>
  );
}

export default Login;

const styles = {
  container: {
    backgroundColor: "#f4f6f9",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  loginBox: {
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: "380px",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
    textAlign: "center",
  },

  titulo: {
    fontSize: "28px",
    color: "#1976d2",
    marginBottom: "10px",
  },

  descricao: {
    color: "#333",
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "20px",
  },

  aviso: {
    color: "#666",
    fontSize: "14px",
    lineHeight: "1.6",
    marginBottom: "25px",
  },
};
