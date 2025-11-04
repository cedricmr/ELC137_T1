// 'use client'
// import React, { useState } from "react";
// import './novo.css';

// export default function Dashboard() {
//   const [showBalance, setShowBalance] = useState(false);

//   // Dados fictícios do cliente — depois podem vir do backend
//   const cliente = {
//     nome: "Gabriel França",
//     agencia: "0001",
//     conta: "123456-7",
//     saldo: 2580.75,
//   };

//   const toggleBalance = () => {
//     setShowBalance(!showBalance);
//   };

//   const handleLogout = () => {
//     alert("Você saiu da conta.");
//   };

//   return (
//     <div className="dashboard-container">
//       {/* Cabeçalho da Conta */}
//       <div className="account-header">
//         <h2>Olá, {cliente.nome}</h2>
//         <div className="account-info">
//           <div className="account-details">
//             <p>Agência: {cliente.agencia}</p>
//             <p>Conta Corrente: {cliente.conta}</p>
//           </div>
//           <button className="logout-btn" onClick={handleLogout}>
//             Sair
//           </button>
//         </div>
//       </div>

//       {/* Ações principais */}
//       <div className="actions-container">
//         <button className="action-btn">
//           Ver extrato
//           <div style={{ marginTop: "8px", fontSize: "0.9rem", color: "#555" }}>
//             Saldo:{" "}
//             {showBalance ? (
//               <strong>R$ {cliente.saldo.toFixed(2)}</strong>
//             ) : (
//               <strong>••••••</strong>
//             )}
//             <button
//               onClick={toggleBalance}
//               style={{
//                 marginLeft: "8px",
//                 border: "none",
//                 background: "none",
//                 cursor: "pointer",
//               }}
//               title="Mostrar/ocultar saldo"
//             >
//               {showBalance ? "🙈" : "👁️"}
//             </button>
//           </div>
//         </button>
//         <button className="action-btn">Depositar</button>
//         <button className="action-btn">Pagar</button>
//         <button className="action-btn">Transferir</button>
//         <button className="action-btn">Simular Empréstimo</button>
//       </div>

//       {/* Seção de gerenciamento da conta */}
//       <div className="manage-container">
//         <button className="manage-btn">Alterar Senha</button>
//         <button className="manage-btn" style={{ backgroundColor: "#ff3b3b" }}>
//           Encerrar Conta
//         </button>
//       </div>
//     </div>
//   );
// }


// // import React, { useState } from 'react';
// // import { Button } from '@/components/ui/button';
// // import { Eye, EyeOff, LogOut } from 'lucide-react';

// // export default function Dashboard() {
// //   const [showBalance, setShowBalance] = useState(false);
// //   const [balance] = useState(12500.75);
// //   const [client] = useState({
// //     nome: 'Gabriel França',
// //     agencia: '0001',
// //     conta: '123456-7',
// //   });

// //   const toggleBalance = () => setShowBalance(!showBalance);

// //   return (
// //     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-10">
// //       <div className="w-full max-w-5xl bg-white shadow-lg rounded-2xl p-8">
// //         {/* Cabeçalho da conta */}
// //         <div className="flex justify-between items-center border-b pb-6 mb-6">
// //           <div>
// //             <h1 className="text-2xl font-semibold text-gray-800">Olá, {client.nome}</h1>
// //             <p className="text-gray-500">Agência: {client.agencia} | Conta: {client.conta}</p>
// //           </div>
// //           <Button variant="destructive" className="flex items-center gap-2">
// //             <LogOut size={18} /> Sair da Conta
// //           </Button>
// //         </div>

// //         {/* Botões de ações principais */}
// //         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
// //           <Button className="bg-blue-600 hover:bg-blue-700 text-white">Ver Extrato</Button>
// //           <Button className="bg-green-600 hover:bg-green-700 text-white">Depositar</Button>
// //           <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Pagar</Button>
// //           <Button className="bg-purple-600 hover:bg-purple-700 text-white">Transferir</Button>
// //           <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Simular Empréstimo</Button>
// //         </div>

// //         {/* Seção de saldo e extrato resumido */}
// //         <div className="bg-gray-100 rounded-xl p-6 shadow-inner mb-10">
// //           <div className="flex justify-between items-center mb-4">
// //             <h2 className="text-xl font-semibold text-gray-700">Saldo disponível</h2>
// //             <Button variant="ghost" onClick={toggleBalance}>
// //               {showBalance ? <EyeOff size={18} /> : <Eye size={18} />}
// //             </Button>
// //           </div>
// //           <p className="text-3xl font-bold text-gray-900">
// //             {showBalance ? `R$ ${balance.toFixed(2)}` : '•••••••'}
// //           </p>
// //         </div>

// //         {/* Botões de segurança da conta */}
// //         <div className="flex flex-col sm:flex-row justify-end gap-4">
// //           <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
// //             Alterar Senha
// //           </Button>
// //           <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
// //             Encerrar Conta
// //           </Button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }



// // import React from "react";
// // //import "./Dashboard.css";

// // export default function Dashboard() {
// //   return (
// //     <div className="dashboard-container">
// //       <header className="dashboard-header">
// //         <h1 className="logo">Banco Distribuído</h1>
// //         <button className="nav-btn">Sair</button>
// //       </header>

// //       <main className="dashboard-main">
// //         <section className="account-section">
// //           <div className="account-info">
// //             <h2>Olá, Gabriel França 👋</h2>
// //             <p>Agência: 0001</p>
// //             <p>Conta Corrente: 12345-6</p>
// //           </div>

// //           <div className="account-actions">
// //             <button className="secondary-btn">Alterar Senha</button>
// //             <button className="secondary-btn danger">Encerrar Conta</button>
// //           </div>
// //         </section>

// //         <section className="bank-actions">
// //           <button className="action-btn primary">Ver Extrato</button>
// //           <button className="action-btn">Depositar</button>
// //           <button className="action-btn">Pagar</button>
// //           <button className="action-btn">Transferir</button>
// //           <button className="action-btn">Simular Empréstimo</button>
// //         </section>
// //       </main>

// //       <footer className="dashboard-footer">
// //         <p>© 2025 Banco Distribuído — sistema tolerante a falhas</p>
// //       </footer>
// //     </div>
// //   );
// // }




// // import React from "react";
// // import './dashboard.css';

// // export default function Dashboard() {
// //   return (
// //     <div className="dashboard-container">
// //       <header className="dashboard-header">
// //         <h1 className="logo">Banco Distribuído</h1>
// //         <nav className="nav">
// //           <button className="nav-btn">Sair</button>
// //         </nav>
// //       </header>

// //       <main className="dashboard-main">
// //         <section className="user-info">
// //           <h2>Olá, Gabriel 👋</h2>
// //           <p>agência 0001 • conta 12345-6</p>
// //         </section>

// //         <section className="account-summary">
// //           <div className="card saldo">
// //             <h3>Saldo disponível</h3>
// //             <p className="value">R$ 3.257,40</p>
// //           </div>

// //           <div className="card actions">
// //             <button className="action-btn">Transferir</button>
// //             <button className="action-btn">Extrato</button>
// //             <button className="action-btn">Depositar</button>
// //           </div>
// //         </section>

// //         <section className="recent-transactions">
// //           <h3>Últimas movimentações</h3>
// //           <ul>
// //             <li>
// //               <span>PIX recebido</span>
// //               <span className="positivo">+ R$ 250,00</span>
// //             </li>
// //             <li>
// //               <span>Transferência enviada</span>
// //               <span className="negativo">- R$ 120,00</span>
// //             </li>
// //             <li>
// //               <span>Depósito em dinheiro</span>
// //               <span className="positivo">+ R$ 500,00</span>
// //             </li>
// //           </ul>
// //         </section>
// //       </main>

// //       <footer className="dashboard-footer">
// //         <p>© 2025 Banco Distribuído — sistema tolerante a falhas</p>
// //       </footer>
// //     </div>
// //   );
// // }




// // export default function Conta() {
// //   return (
// //     <div>
// //       <h1>
// //         Minha Conta
// //       </h1>
// //       <p>Bem-vindo à sua conta do Banco Virtual SID.</p>
// //     </div>
// //   );
// // }
