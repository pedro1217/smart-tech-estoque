function Header() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1 className="title">SmartTech</h1>
          <h2 className="subtitle">Loja de Produtos Eletrônicos</h2>
        </div>
      </header>
      <style>{`
        .header {
          background: linear-gradient(90deg, #0f172a, #1e293b);
          color: #ffffff;
          padding: 20px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        .header-content {
          display: flex;
          flex-direction: column;
        }
        .title {
          margin: 0;
          font-size: 28px;
          font-weight: bold;
          letter-spacing: 1px;
          color: #38bdf8;
        }
        .subtitle {
          margin: 0;
          font-size: 14px;
          color: #cbd5e1;
        }
        .nav {
          display: flex;
          gap: 20px;
        }
        .nav a {
          color: #ffffff;
          text-decoration: none;
          font-weight: 500;
          transition: 0.3s;
        }
        .nav a:hover {
          color: #38bdf8;
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
}

export default Header;