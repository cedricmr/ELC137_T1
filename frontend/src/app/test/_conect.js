"use client"; 
import { useState } from "react";
import { useRouter } from "next/navigation"; // Importa o useRouter
import axios from 'axios'; // Importa o axios

export default function LoginPage() {
  const [documento, setDocumento] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const router = useRouter(); // Inicializa o router

  // Busca a URL da API do arquivo .env.local
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  async function handleLogin(event) {
    event.preventDefault();
    setMensagem("Autenticando...");

    try {
      // Usa o axios para fazer o POST para o endpoint /login do backend
      const res = await axios.post(`${API_URL}/login`, {
        documento,
        senha,
      });

      const data = res.data; // O axios já converte o JSON

      if (data.token) {
        setMensagem("Login realizado com sucesso!");
        
        // Salva o token no localStorage do navegador
        localStorage.setItem("authToken", data.token);

        // Redireciona para a página da conta
        setTimeout(() => {
          router.push("/conta"); // Usa o router do Next.js
        }, 1000);
      } else {
        setMensagem("Erro no login: " + (data.error || "Credenciais inválidas"));
      }
    } catch (err) {
      console.error(err);
      // Pega a mensagem de erro específica do backend, se existir
      const errorMsg = err.response?.data?.error || "Erro ao tentar logar. O servidor está online?";
      setMensagem(errorMsg);
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