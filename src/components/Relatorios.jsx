import { styles } from "./Dados";

function Relatorios({ produtos, movimentacoes }) {
  const valorTotal     = produtos.reduce((acc, p) => acc + p.quantidade * p.preco, 0);
  const totalEntradas  = movimentacoes.filter(m => m.tipo === "entrada").reduce((acc, m) => acc + m.quantidade, 0);
  const totalSaidas    = movimentacoes.filter(m => m.tipo === "saida").reduce((acc, m) => acc + m.quantidade, 0);

  return (
    <div>
      <h2 style={styles.paginaTitulo}>Relatórios</h2>
      <div style={styles.cardsGrid}>
        <div style={styles.card}><p style={styles.cardLabel}>Valor total em estoque</p><p style={{...styles.cardValor, color:"#007bff"}}>R$ {valorTotal.toLocaleString("pt-BR")}</p></div>
        <div style={styles.card}><p style={styles.cardLabel}>Total de entradas (unid.)</p><p style={{...styles.cardValor, color:"#28a745"}}>{totalEntradas}</p></div>
        <div style={styles.card}><p style={styles.cardLabel}>Total de saídas (unid.)</p><p style={{...styles.cardValor, color:"#dc3545"}}>{totalSaidas}</p></div>
      </div>

      <h3 style={{margin:"24px 0 12px"}}>Situação dos produtos</h3>
      <table style={styles.tabela}>
        <thead><tr>{["Produto","Categoria","Qtd atual","Valor em estoque","Situação"].map(h => <th key={h} style={styles.th}>{h}</th>)}</tr></thead>
        <tbody>
          {[...produtos].sort((a,b) => a.quantidade - b.quantidade).map(p => (
            <tr key={p.id}>
              <td style={styles.td}>{p.nome}</td>
              <td style={styles.td}>{p.categoria}</td>
              <td style={styles.td}>{p.quantidade}</td>
              <td style={styles.td}>R$ {(p.quantidade * p.preco).toLocaleString("pt-BR")}</td>
              <td style={styles.td}>
                {p.quantidade === 0
                  ? <span style={{...styles.badge, background:"#dc3545"}}>Esgotado</span>
                  : p.quantidade <= p.minimo
                  ? <span style={{...styles.badge, background:"#ffc107", color:"#333"}}>Baixo</span>
                  : <span style={{...styles.badge, background:"#28a745"}}>Normal</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Relatorios;