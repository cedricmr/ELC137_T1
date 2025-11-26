"use client";
// frontend/src/app/conta/page.js
import React, {useState, useEffect } from "react";
import api from '@/lib/api';
import { useRouter } from 'next/navigation'
import { Button } from "@/components/button";
import "./page.css";

// Função de exemplo para o clique
function handleClick() {
  console.log("clicked");
  // (Evite 'alert' em apps React; 'console.log' é melhor para depuração)
}

function Header( { cliente } ) {
  return (
    <header className="head">
      <h1>Olá, {cliente.primeiro_nome}!</h1>
    </header>
  );
}

function Aside() {
  return (
    <aside className="action">
      <Button className="button" onClick={handleClick}>
        Ver extrato
      </Button>
      <Button className="button" onClick={handleClick}>
        Depositar
      </Button>
      <Button className="button" onClick={handleClick}>
        Pagar
      </Button>
      <Button className="button" onClick={handleClick}>
        Transferir
      </Button>
    </aside>
  );
}

function Saldo( { conta } ) {
  return (
    <div className="saldo">
      <h2 className="saldo-lbl">Saldo bancário disponível</h2>
      <h2 className="val">$ {conta.saldo}</h2>
    </div>
  );
}

function ContaSection( { conta } ) {
  return (
    <section className="conta-section">
      <div className="inf">
        <h2>info da conta</h2>
        <p>Agência: {conta.agencia}</p>
        <p>Conta Corrente: {conta.numero_conta}</p>
      </div>
      <div className="action">
        <Button className="button" onClick={handleClick}>
          Sair
        </Button>
        <Button className="button" onClick={handleClick}>
          Alterar senha
        </Button>
        <Button className="button" onClick={handleClick}>
          Encerrar conta
        </Button>
      </div>
    </section>
  );
}

export default function DashBoardConta() {
  const [client, setClient]=useState(null)
  const [contas, setContas]=useState([])
  const [loading, setLoading]=useState(true)
  const router=useRouter()

  useEffect(() => {
    async function buscaDadosConta(){
      try{
        const token=localStorage.getItem('authToken')
        if(!token){
          router.push('/login');
          return;
        }

        const payload=JSON.parse(atob(token.split('.')[1]))
        const usrDoc=payload.documento

        const resCliente = await api.get(`/clientes/${usrDoc}`);

        setClient(resCliente.data);

        const resContas=await api.get(`/clientes/${usrDoc}/contas`);
        setContas(resContas.data);

      } catch(err){
        console.error('failed to fetch account data', err)

        if(err.responde?.status === 401 || err.response?.status === 403) {
          localStorage.removeItem('authToken')
          router.push('/login')
        }

      } finally {
        setLoading(false)
      }
    }
    buscaDadosConta()
  }, [router])
  
  if(loading){
    return <p>carregando dados da conta...</p>
  }

  if(!client){
    return <p>nao foi possivel carregar os dados; tente novamente</p>
  }
// Se não houver contas, não podemos mostrar Saldo ou ContaSection
  if(contas.length === 0){
    return (
      <div className="page">
        <Header cliente={client} />
        <main className="main-container">
          <Aside />
          <p>Nenhuma conta bancária encontrada para este cliente.</p>
        </main>
      </div>
    );
  }
  // testar a consistencia se o cliente possui uma conta
  const contaPrincipal=contas[0];
  return (
    <div className="page">
      <Header cliente={client}/>
      <main className="main-container">
        <Aside />
        <Saldo conta={contaPrincipal}/>
        <ContaSection conta={contaPrincipal}/>
      </main>
    </div>
  );
}
