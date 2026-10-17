import { useState } from "react";
import { styles } from "./Dados";

function Produtos({ produtos, setProdutos }) {
  const [form, setForm] = useState({ nome:"", categoria:"", quantidade:"", minimo:"", preco:"" });
  const [editandoId, setEditandoId] = useState(null);
  const [mostrarForm, setMostrarForm] = useState(false);

  function salvar() {
    if (!form.nome.trim() || form.quantidade === "") return alert("Preencha nome e quantidade!");
    if (!Number.isSafeInteger(Number(form.quantidade)) || Number(form.quantidade) < 0 || !Number.isSafeInteger(Number(form.minimo)) || Number(form.minimo) < 0 || !Number.isFinite(Number(form.preco)) || Number(form.preco) < 0) return alert("Informe quantidades inteiras e valores maiores ou iguais a zero!");
    if (editandoId) {
      setProdutos(produtos.map(p => p.id === editandoId
        ? { ...p, ...form, quantidade: Number(form.quantidade), minimo: Number(form.minimo), preco: Number(form.preco) }
        : p
      ));
      setEditandoId(null);
    } else {
      setProdutos([...produtos, { id: Date.now(), ...form, quantidade: Number(form.quantidade), minimo: Number(form.minimo), preco: Number(form.preco) }]);
    }
    setForm({ nome:"", categoria:"", quantidade:"", minimo:"", preco:"" });
    setMostrarForm(false);
  }

  function editar(p) {
    setForm({ nome: p.nome, categoria: p.categoria, quantidade: p.quantidade, minimo: p.minimo, preco: p.preco });
    setEditandoId(p.id);
    setMostrarForm(true);
  }

  function excluir(id) {
    if (window.confirm("Excluir produto?")) setProdutos(produtos.filter(p => p.id !== id));
  }

  function statusBadge(p) {
    if (p.quantidade === 0)        return <span style={{...styles.badge, background:"#dc3545"}}>Esgotado</span>;
    if (p.quantidade <= p.minimo)  return <span style={{...styles.badge, background:"#ffc107", color:"#333"}}>Baixo</span>;
    return <span style={{...styles.badge, background:"#28a745"}}>Normal</span>;
  }

  return (
    <div>
      <div style={styles.paginaHeader}>
        <h2 style={styles.paginaTitulo}>Produtos</h2>
        <button style={styles.botaoPrimario} onClick={() => {
          setMostrarForm(!mostrarForm);
          setEditandoId(null);
          setForm({ nome:"", categoria:"", quantidade:"", minimo:"", preco:"" });
        }}>
          {mostrarForm ? "Cancelar" : "+ Novo Produto"}
        </button>
      </div>

      {mostrarForm && (
        <div style={styles.formBox}>
          <h3 style={{marginBottom:16}}>{editandoId ? "Editar Produto" : "Novo Produto"}</h3>
          <div style={styles.formGrid}>
            <div><label style={styles.label}>Nome *</label><input style={styles.input} value={form.nome} onChange={e => setForm({...form, nome: e.target.value})} /></div>
            <div><label style={styles.label}>Categoria</label><input style={styles.input} value={form.categoria} onChange={e => setForm({...form, categoria: e.target.value})} /></div>
            <div><label style={styles.label}>Quantidade *</label><input style={styles.input} type="number" value={form.quantidade} onChange={e => setForm({...form, quantidade: e.target.value})} /></div>
            <div><label style={styles.label}>Estoque mínimo</label><input style={styles.input} type="number" value={form.minimo} onChange={e => setForm({...form, minimo: e.target.value})} /></div>
            <div><label style={styles.label}>Preço (R$)</label><input style={styles.input} type="number" value={form.preco} onChange={e => setForm({...form, preco: e.target.value})} /></div>
          </div>
          <button style={styles.botaoPrimario} onClick={salvar}>{editandoId ? "Salvar alterações" : "Cadastrar"}</button>
        </div>
      )}

      <table style={styles.tabela}>
        <thead><tr>{["Nome","Categoria","Qtd","Mín","Preço","Status","Ações"].map(h => <th key={h} style={styles.th}>{h}</th>)}</tr></thead>
        <tbody>
          {produtos.map(p => (
            <tr key={p.id}>
              <td style={styles.td}>{p.nome}</td>
              <td style={styles.td}>{p.categoria}</td>
              <td style={styles.td}>{p.quantidade}</td>
              <td style={styles.td}>{p.minimo}</td>
              <td style={styles.td}>R$ {Number(p.preco).toLocaleString("pt-BR")}</td>
              <td style={styles.td}>{statusBadge(p)}</td>
              <td style={styles.td}>
                <button style={styles.botaoEditar} onClick={() => editar(p)}>Editar</button>
                <button style={styles.botaoExcluir} onClick={() => excluir(p.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Produtos;