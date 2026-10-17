export const produtosIniciais = [
  { id: 1, nome: "Notebook Dell",  categoria: "Informática", quantidade: 23, minimo: 5,  preco: 3500 },
  { id: 2, nome: "Mouse Logitech", categoria: "Periféricos", quantidade: 4,  minimo: 10, preco: 120  },
  { id: 3, nome: "Teclado RGB",    categoria: "Periféricos", quantidade: 0,  minimo: 5,  preco: 250  },
  { id: 4, nome: 'Monitor 24"',    categoria: "Informática", quantidade: 12, minimo: 3,  preco: 900  },
  { id: 5, nome: "Cabo HDMI",      categoria: "Acessórios",  quantidade: 3,  minimo: 10, preco: 40   },
  
];

export const movimentacoesIniciais = [
  { id: 1, tipo: "entrada", produto: "Notebook Dell",  quantidade: 5, data: "2025-05-10", responsavel: "admin" },
  { id: 2, tipo: "saida",   produto: "Mouse Logitech", quantidade: 2, data: "2025-05-12", responsavel: "admin" },
  { id: 3, tipo: "entrada", produto: 'Monitor 24"',    quantidade: 3, data: "2025-05-15", responsavel: "admin" },
];

export const styles = {
  paginaHeader:  { display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"20px" },
  paginaTitulo:  { fontSize:"22px", fontWeight:700, color:"#333", marginBottom:"20px" },
  cardsGrid:     { display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))", gap:"16px", marginBottom:"24px" },
  card:          { background:"#f8f9fa", borderRadius:"8px", padding:"16px", border:"1px solid #dee2e6" },
  cardLabel:     { fontSize:"12px", color:"#666", marginBottom:"6px" },
  cardValor:     { fontSize:"26px", fontWeight:700, color:"#333" },
  alerta:        { background:"#fff3cd", border:"1px solid #ffc107", borderRadius:"8px", padding:"14px 18px", color:"#856404", fontSize:"14px" },
  formBox:       { background:"#f8f9fa", border:"1px solid #dee2e6", borderRadius:"8px", padding:"20px", marginBottom:"24px" },
  formGrid:      { display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))", gap:"16px", marginBottom:"16px" },
  label:         { display:"block", fontSize:"13px", color:"#555", marginBottom:"4px" },
  input:         { width:"100%", padding:"9px 12px", border:"1px solid #ccc", borderRadius:"6px", fontSize:"14px" },
  botaoPrimario: { padding:"10px 20px", background:"#007bff", color:"#fff", border:"none", borderRadius:"6px", cursor:"pointer", fontSize:"14px", fontWeight:600 },
  botaoEditar:   { padding:"5px 12px", background:"#ffc107", color:"#333", border:"none", borderRadius:"4px", cursor:"pointer", fontSize:"12px", marginRight:"6px" },
  botaoExcluir:  { padding:"5px 12px", background:"#dc3545", color:"#fff", border:"none", borderRadius:"4px", cursor:"pointer", fontSize:"12px" },
  tabela:        { width:"100%", borderCollapse:"collapse", fontSize:"14px" },
  th:            { padding:"10px 12px", background:"#f8f9fa", borderBottom:"2px solid #dee2e6", textAlign:"left", color:"#555", fontWeight:600 },
  td:            { padding:"10px 12px", borderBottom:"1px solid #eee", color:"#333" },
  badge:         { display:"inline-block", padding:"3px 10px", borderRadius:"99px", fontSize:"12px", color:"#fff", fontWeight:600 },
};