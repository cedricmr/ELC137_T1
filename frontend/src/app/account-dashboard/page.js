"use client";
import React from "react";
import { Button } from "@/components/button";
import "./page.css";

// Função de exemplo para o clique
function handleClick() {
  console.log("clicked");
  // (Evite 'alert' em apps React; 'console.log' é melhor para depuração)
}

function Header() {
  return (
    <header className="head">
      <h1>Olá, nome completo do cliente</h1>
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

function Saldo() {
  return (
    <div className="saldo">
      <h2 className="saldo-lbl">Saldo bancário disponível</h2>
      <h2 className="val">+$500.00</h2>
    </div>
  );
}

function ContaSection() {
  return (
    <section className="conta-section">
      <div className="inf">
        <h2>info da conta</h2>
        <p>Agência: 0001</p>
        <p>Conta Corrente: 12345-6</p>
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
  return (
    <div className="page">
      <Header />
      <main className="main-container">
        <Aside />
        <Saldo />
        <ContaSection />
      </main>
    </div>
  );
}
