import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { produtosIniciais, movimentacoesIniciais } from "../components/Dados";
import Inicio     from "../components/Inicio";
import Produtos   from "../components/Produtos";
import Entradas   from "../components/Entradas";
import Saidas     from "../components/Saidas";
import Relatorios from "../components/Relatorios";
import Header     from "../components/Header";
import Footer     from "../components/Footer";

function carregarDados(chave, inicial) {
  try {
    const dados = JSON.parse(localStorage.getItem(chave));
    return Array.isArray(dados) ? dados : inicial;
  } catch { return inicial; }
}

function Dashboard() {
  const navigate = useNavigate();
  const usuario  = JSON.parse(localStorage.getItem("usuario") || '{"nome":"Admin"}');

  const [tela, setTela]                   = useState("inicio");
  const [produtos, setProdutos]           = useState(() => carregarDados("estoque-produtos", produtosIniciais));
  const [movimentacoes, setMovimentacoes] = useState(() => carregarDados("estoque-movimentacoes", movimentacoesIniciais));

  useEffect(() => { localStorage.setItem("estoque-produtos", JSON.stringify(produtos)); }, [produtos]);
  useEffect(() => { localStorage.setItem("estoque-movimentacoes", JSON.stringify(movimentacoes)); }, [movimentacoes]);

  function sair() {
    localStorage.removeItem("usuario");
    navigate("/login");
  }

  const menuItens = [
    { id:"inicio",     label:" Início"     },
    { id:"produtos",   label:" Produtos"   },
    { id:"entradas",   label:" Entradas"   },
    { id:"saidas",     label:" Saídas"     },
    { id:"relatorios", label:" Relatórios" },
  ];

  function renderizar() {
    switch(tela) {
      case "produtos":   return <Produtos   produtos={produtos} setProdutos={setProdutos} />;
      case "entradas":   return <Entradas   produtos={produtos} setProdutos={setProdutos} movimentacoes={movimentacoes} setMovimentacoes={setMovimentacoes} />;
      case "saidas":     return <Saidas     produtos={produtos} setProdutos={setProdutos} movimentacoes={movimentacoes} setMovimentacoes={setMovimentacoes} />;
      case "relatorios": return <Relatorios produtos={produtos} movimentacoes={movimentacoes} />;
      default:           return <Inicio     produtos={produtos} />;
    }
  }

  return (
    <div style={styles.pagina}>

      <Header />

      <div style={styles.meio}>
        <div style={styles.sidebar}>
          <nav style={{flex:1}}>
            {menuItens.map(item => (
              <button key={item.id} onClick={() => setTela(item.id)} style={{
                ...styles.menuItem,
                background: tela === item.id ? "#0f172a" : "transparent",
                color:      tela === item.id ? "#38bdf8" : "#555",
                fontWeight: tela === item.id ? 600       : 400,
                borderLeft: tela === item.id ? "3px solid #38bdf8" : "3px solid transparent",
              }}>
                {item.label}
              </button>
            ))}
          </nav>
          <div style={styles.userBox}>
            <p style={styles.userNome}>👤 {usuario.nome}</p>
            <button style={styles.botaoSair} onClick={sair}>Sair</button>
          </div>
        </div>

        <div style={styles.conteudo}>{renderizar()}</div>
      </div>

      <Footer />

    </div>
  );
}

export default Dashboard;

const styles = {
  pagina:    { display:"flex", flexDirection:"column", minHeight:"100vh", fontFamily:"sans-serif" },
  meio:      { display:"flex", flex:1 },
  sidebar:   { width:"220px", background:"#f8f9fa", borderRight:"1px solid #dee2e6", display:"flex", flexDirection:"column" },
  menuItem:  { display:"block", width:"100%", padding:"12px 16px", border:"none", cursor:"pointer", fontSize:"14px", textAlign:"left", transition:"all 0.2s" },
  userBox:   { padding:"16px", borderTop:"1px solid #dee2e6" },
  userNome:  { fontSize:"13px", color:"#555", marginBottom:"10px" },
  botaoSair: { width:"100%", padding:"8px", background:"#dc3545", color:"#fff", border:"none", borderRadius:"6px", cursor:"pointer", fontSize:"13px" },
  conteudo:  { flex:1, padding:"30px", background:"#fff", overflowY:"auto" },
};
