"use client"; 
import { useState } from "react";

export default function LoginPage() {
  const [documento, setDocumento] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function handleLogin(event) {
    event.preventDefault();

  try {
    const res = await fetch("https://banco-api-service.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ documento, senha }),
    });

    const data = await res.json();
    console.log(data); 

    if (res.ok) {
      setMensagem("Login realizado com sucesso!");

      setTimeout(() => {
        window.location.href = "/conta";
      }, 1000);
    } else {
      setMensagem("Erro no login: " + (data.message || "Credenciais inválidas"));
    }
  } catch (err) {
    console.error(err);
    setMensagem("Erro ao tentar logar");
  }
  }

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}>
      <h1>Login Banco SID</h1>
      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          placeholder="Documento"
          value={documento}
          onChange={(e) => setDocumento(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      {mensagem && <p style={{ marginTop: "1rem" }}>{mensagem}</p>}
    </div>
  );
}
