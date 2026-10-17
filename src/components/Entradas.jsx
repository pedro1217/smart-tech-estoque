import { useState } from "react";
import { styles } from "./Dados";

function Entradas({ produtos, setProdutos, movimentacoes, setMovimentacoes }) {
  const [form, setForm] = useState({ produtoId:"", quantidade:"" });

  function registrar() {
    if (!form.produtoId || !form.quantidade) return alert("Selecione o produto e a quantidade!");
    const qtd  = Number(form.quantidade);
    if (!Number.isSafeInteger(qtd) || qtd <= 0) return alert("Informe uma quantidade inteira maior que zero!");
    const prod = produtos.find(p => p.id === Number(form.produtoId));
    if (!prod) return alert("Selecione um produto valido!");
    setProdutos(produtos.map(p => p.id === Number(form.produtoId) ? {...p, quantidade: p.quantidade + qtd} : p));
    setMovimentacoes([{ id: Date.now(), tipo:"entrada", produto: prod.nome, quantidade: qtd, data: new Date().toISOString().slice(0,10), responsavel:"admin" }, ...movimentacoes]);
    setForm({ produtoId:"", quantidade:"" });
  }

  return (
    <div>
      <h2 style={styles.paginaTitulo}>Entradas de Estoque</h2>
      <div style={styles.formBox}>
        <h3 style={{marginBottom:16}}>Registrar Entrada</h3>
        <div style={styles.formGrid}>
          <div>
            <label style={styles.label}>Produto *</label>
            <select style={styles.input} value={form.produtoId} onChange={e => setForm({...form, produtoId: e.target.value})}>
              <option value="">Selecione...</option>
              {produtos.map(p => <option key={p.id} value={p.id}>{p.nome}</option>)}
            </select>
          </div>
          <div>
            <label style={styles.label}>Quantidade *</label>
            <input style={styles.input} type="number" min="1" value={form.quantidade} onChange={e => setForm({...form, quantidade: e.target.value})} />
          </div>
        </div>
        <button style={styles.botaoPrimario} onClick={registrar}>Registrar Entrada</button>
      </div>

      <h3 style={{margin:"24px 0 12px"}}>Histórico de Entradas</h3>
      <table style={styles.tabela}>
        <thead><tr>{["Data","Produto","Quantidade","Responsável"].map(h => <th key={h} style={styles.th}>{h}</th>)}</tr></thead>
        <tbody>
          {movimentacoes.filter(m => m.tipo === "entrada").map(m => (
            <tr key={m.id}>
              <td style={styles.td}>{m.data}</td>
              <td style={styles.td}>{m.produto}</td>
              <td style={styles.td}><span style={{...styles.badge, background:"#28a745"}}>+{m.quantidade}</span></td>
              <td style={styles.td}>{m.responsavel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Entradas;