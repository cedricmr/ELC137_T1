export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        padding: "1rem 2rem",
        backgroundColor: "var(--primary)",
        color: "#fff",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "1.5rem" }}>Banco Virtual SID</h1>
      <nav>
        <a href="/" style={{ marginRight: "1rem", color: "#fff" }}>Início</a>
        <a href="/conta" style={{ marginRight: "1rem", color: "#fff" }}>Conta</a>
        <a href="/transferir" style={{ marginRight: "1rem", color: "#fff" }}>Transferir</a>
        <a href="/extrato" style={{ marginRight: "1rem", color: "#fff" }}>Extrato</a>
        <a href="/cadastro" style={{ marginRight: "1rem", color: "#fff"}}>Cadastro</a>
        <a href="/emprestimo" style={{ color: "#fff" }}>Empréstimos</a>
      </nav>
    </header>
  );
}
