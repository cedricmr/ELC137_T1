'use client'
// imports
import React, { useState } from "react"; // useState
import { useRouter } from "next/navigation"; // useRouter
import axios from "axios"; // axios

export default function LoginPage(){
    const [documento, setDocumento]=useState("")
    const [senha, setSenha]=useState("")
    const [msg, setMsg]=useState("")

    const router=useRouter() // inicializa a routera

    const API_URL=process.env.NEXT_PUBLIC_API_URL

    async function handleLogin(event){
        event.preventDefault();
        setMsg('autenticando...')

        try {
          // Usa o axios para fazer o POST para o endpoint /login do backend
          const response=await axios.post(`${API_URL}/login`, {
            documento,
            senha
          })
          
          const data=response.data // axios ja converte o JSON

          if(data.token){
            setMsg('log in success')
            // Salva o token no localStorage do navegador
            localStorage.setItem('authToken', data.token)

            // Redireciona para a página da conta
            setTimeout(() => {
                router.push('/account-dashboard') // usa o Next ROUTER // mudar para barra conta
            }, 1000);
          } else {
            setMsg('login err' + (data.error || 'credenciais invalidas'))
          }
        } catch (err){
            console.error(err)
            // Pega a mensagem de erro específica do backend, se existir
            const errMsg=err.response?.data?.error || 'erro ao tentar logar. server online?'
            setMsg(errMsg)
        }
    }

    return (
        <div style={{ maxWidth: "400px", margin: "2rem auto", textAlign: "center" }}>
            <h1>login banco sid</h1>
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
                <button type="submit">entrar</button>
            </form>
            {msg && <p style={{ marginTop: "1rem" }}>{msg}</p>}
        </div>
    )
}

