/**
 * Cedric: Login, Transferência
 * Gabriel: Cadastro, Página da Conta
 */


"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Tela inicial do trabalho de Sistemas de Informação Distribuídos</h1>

      <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "1rem" }}>
        <button
          onClick={() => router.push("/login")}
          style={{ padding: "1rem 2rem", cursor: "pointer" }}
        >
          Login
        </button>

        <button
          onClick={() => router.push("/cadastro")}
          style={{ padding: "1rem 2rem", cursor: "pointer" }}
        >
          Cadastro
        </button>
      </div>
    </div>
  );
}
