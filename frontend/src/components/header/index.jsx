import React from "react";
import './header.css';

export function Header(){
    return (
        <header className="nome">
            <h1>Cabeçalho</h1>
        </header>
    );
}


// export function Header(){
//   return (
//     <header>
//       <h1>Banco</h1>
//     </header>
//   )
// }

// não usamos 'default' para exportar componentes

// export function Header() {
//   return (
//     <header
//       style={{
//         width: "100%",
//         padding: "1rem 2rem",
//         backgroundColor: "var(--primary)",
//         color: "#fff",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//       }}
//     >
//       <h1 style={{ fontSize: "1.5rem" }}>Banco Virtual SID</h1>
//       <nav>
//         <a href="/" style={{ marginRight: "1rem", color: "#fff" }}>Início</a>
//         <a href="/conta" style={{ marginRight: "1rem", color: "#fff" }}>Conta</a>
//         <a href="/transferir" style={{ marginRight: "1rem", color: "#fff" }}>Transferir</a>
//         <a href="/extrato" style={{ marginRight: "1rem", color: "#fff" }}>Extrato</a>
//         <a href="/cadastro" style={{ marginRight: "1rem", color: "#fff"}}>Cadastro</a>
//         <a href="/emprestimo" style={{ color: "#fff" }}>Empréstimos</a>
//       </nav>
//     </header>
//   );
// }
