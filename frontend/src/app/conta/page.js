"use client";
// frontend/src/app/conta/page.js
import { useState, useEffect } from 'react';
import api from '@/lib/api'; // Importa a instância autenticada do axios
import { useRouter } from 'next/navigation';

export default function Conta() {
  const [cliente, setCliente] = useState(null);
  const [contas, setContas] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchContaData() {
      try {
        // Decodifica o token para pegar o 'documento' do usuário logado
        const token = localStorage.getItem('authToken');
        if (!token) {
          router.push('/login'); // Redireciona se não houver token
          return;
        }

        // Simples decodificador de JWT (só para pegar o payload)
        const payload = JSON.parse(atob(token.split('.')[1]));
        const userDocumento = payload.documento;

        // 1. Busca dados do cliente (endpoint protegido)
        const resCliente = await api.get(`/clientes/${userDocumento}`);
        setCliente(resCliente.data);

        // 2. Busca contas do cliente (endpoint protegido)
        const resContas = await api.get(`/clientes/${userDocumento}/contas`);
        setContas(resContas.data);

      } catch (error) {
        console.error("Falha ao buscar dados da conta", error);
        // Se o token for inválido (erro 401 ou 403), desloga o usuário
        if (error.response?.status === 401 || error.response?.status === 403) {
          localStorage.removeItem('authToken');
          router.push('/login');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchContaData();
  }, [router]);

  if (loading) {
    return <p>Carregando dados da conta...</p>;
  }

  if (!cliente) {
    return <p>Não foi possível carregar os dados. Tente fazer login novamente.</p>;
  }

  return (
    <div>
      <h1>
        Minha Conta
      </h1>
      <p>Bem-vindo(a), {cliente.primeiro_nome}!</p>

      <h2>Suas Contas:</h2>
      {contas.length > 0 ? (
        <ul>
          {contas.map(conta => (
            <li key={conta.id}>
              Agência: {conta.agencia} | Conta: {conta.numero_conta} | Saldo: R$ {conta.saldo}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma conta encontrada.</p>
      )}
    </div>
  );
}



// 'use client'
// import React, { useState, useEffect } from "react";
// import api from "@/lib/api"; // import a instancia autenticada do axios
// import { useRouter } from "next/navigation";
// // import { useRouteError } from "react-router-dom";

// export default function Conta() {
//   const [client, setClient] = useState(null);
//   const [contas, setContas] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     async function buscaDadosConta() {
//       try {
        
//         // Decodifica o token para pegar o 'documento' do usuário logado
//         const token = localStorage.getItem("authToken");
//         if (!token) {
//           router.push("/login"); // Redireciona se não houver token
//           return;
//         }
//         // Simples decodificador de JWT (só para pegar o payload)
//         const payload=JSON.parse(atob(token.split('.')[1]))
//         const usrDoc=payload.documento

//         //1. busca dados do cliente (endpoint protegido)
//         const resClient=await api.get(`/clientes/${usrDoc}`)
//         setClient(resClient.data)
        
//         //2. busca contas do cliente (endpoint protegido)
//         const resCont=await api.get(`/clientes/${usrDoc}/contas`)
//         setContas(resCont.data)

//       } catch (err) {
//         console.error('falha ao buscar dados da conta', err)
//         // se tk for invalido (erro 401, 403), desloga o user
//         if(err.response?.status === 401 || err.response?.status === 403){
//             localStorage.removeItem('authToken')
//             router.push('/login')
//         }

//       } finally {
//         setLoading(false)
//       }
//       buscaDadosConta()
//     }
//   }, [router])
//   if (loading) {
//     return <p>Carregando dados da conta...</p>;
//   }

//   if (!client) {
//     return <p>Não foi possível carregar os dados. Tente fazer login novamente.</p>;
//   }

//   return (
//     <div>
//       <h1>
//         Minha Conta
//       </h1>
//       <p>Bem-vindo(a), {client.primeiro_nome}!</p>

//       <h2>Suas Contas:</h2>
//       {contas.length > 0 ? (
//         <ul>
//           {contas.map(conta => (
//             <li key={conta.id}>
//               Agência: {conta.agencia} | Conta: {conta.numero_conta} | Saldo: R$ {conta.saldo}
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Nenhuma conta encontrada.</p>
//       )}
//     </div>
//   );
// }
