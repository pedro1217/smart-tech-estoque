import { styles } from "./Dados";

function Inicio({ produtos }) {
  const total     = produtos.length;
  const normais   = produtos.filter(p => p.quantidade > p.minimo).length;
  const baixos    = produtos.filter(p => p.quantidade > 0 && p.quantidade <= p.minimo).length;
  const esgotados = produtos.filter(p => p.quantidade === 0).length;
  const valorTotal = produtos.reduce((acc, p) => acc + p.quantidade * p.preco, 0);

  return (
    <div>
      <h2 style={styles.paginaTitulo}>Visão Geral</h2>
      <div style={styles.cardsGrid}>
        <div style={styles.card}><p style={styles.cardLabel}>Total de produtos</p><p style={styles.cardValor}>{total}</p></div>
        <div style={styles.card}><p style={styles.cardLabel}>Em estoque normal</p><p style={{...styles.cardValor, color:"#28a745"}}>{normais}</p></div>
        <div style={styles.card}><p style={styles.cardLabel}>Estoque baixo</p><p style={{...styles.cardValor, color:"#ffc107"}}>{baixos}</p></div>
        <div style={styles.card}><p style={styles.cardLabel}>Esgotados</p><p style={{...styles.cardValor, color:"#dc3545"}}>{esgotados}</p></div>
        <div style={{...styles.card, gridColumn:"span 2"}}>
          <p style={styles.cardLabel}>Valor total em estoque</p>
          <p style={{...styles.cardValor, color:"#007bff"}}>R$ {valorTotal.toLocaleString("pt-BR")}</p>
        </div>
      </div>
      {(baixos > 0 || esgotados > 0) && (
        <div style={styles.alerta}>
          ⚠️ Atenção: {esgotados} produto(s) esgotado(s) e {baixos} com estoque baixo!
        </div>
      )}
    </div>
  );
}

export default Inicio;