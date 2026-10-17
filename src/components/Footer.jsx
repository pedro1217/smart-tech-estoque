

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.box}>
          <h1 style={styles.title}>SmartTech</h1>
          <p style={styles.text}>Sistema de Controle de Estoque</p>
          <span style={styles.subText}>Loja de Produtos Eletrônicos</span>
        </div>
        <div style={styles.box}>
          <h3 style={styles.subtitle}>Links</h3>
          <a style={styles.link} href="#">Dashboard</a>
          <a style={styles.link} href="#">Produtos</a>
          <a style={styles.link} href="#">Entradas</a>
          <a style={styles.link} href="#">Saídas</a>
        </div>
        <div style={styles.box}>
          <h3 style={styles.subtitle}>Contato</h3>
          <p style={styles.text}>Email: suporte@SmartTech.com</p>
          <p style={styles.text}>Telefone: (38) 98875-3014</p>
          <p style={styles.text}>Brasil</p>
        </div>
      </div>
      <div style={styles.bottom}>
        © {new Date().getFullYear()} SmartTech - Todos os direitos reservados
      </div>
    </footer>
  );
}

export default Footer;

const styles = {
  footer:    { backgroundColor: "#0f172a", color: "#fff", marginTop: "50px", padding: "40px 20px 20px" },
  container: { display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "30px" },
  box:       { minWidth: "200px", display: "flex", flexDirection: "column", gap: "8px" },
  title:     { color: "#3b82f6", marginBottom: "10px" },
  subtitle:  { color: "#e2e8f0", marginBottom: "10px" },
  text:      { color: "#94a3b8", fontSize: "14px", margin: 0 },
  subText:   { color: "#64748b", fontSize: "12px" },
  link:      { color: "#94a3b8", textDecoration: "none", fontSize: "14px", transition: "0.3s" },
  bottom:    { marginTop: "30px", borderTop: "1px solid #1e293b", paddingTop: "15px", textAlign: "center", fontSize: "13px", color: "#64748b" },
};