"use client";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Header } from "@/components/header";
//import InputMask from 'react-input-mask';
//import ReactInputMask from "react-input-mask";
//import { zodResolver } from "@hookform/resolvers/zod";
//import InputMask from "react-input-mask";

const schema = z.object({
  nome: z.string().min(8, "Nome muito curto"),
  documento: z.string().min(10, "Documento inválido"),
  senha: z.string().min(3, "Senha muito curta"),
}); // COMENTARIO

// ele nao esta aceitando numeros
// usar z.number retorna erro com a mensagem de que esperava number e recebeu undefined
// usar z.string para CPF e senha numerica tambem retorna erro

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Dados enviados:", data);
    alert("Conta criada com sucesso! (mock)");
  };

  return (
    <div>
      <Header />
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          maxWidth: 400,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <label>Nome completo</label>
        <input {...register("nome")} placeholder="Seu nome completo" />
        {errors.nome && <p style={{ color: "red" }}>{errors.nome.message}</p>}

        <label>Documento</label>
        <input {...register("documento")} placeholder="Seu documento (CPF ou CNPJ)" />
        {errors.documento && (
          <p style={{ color: "red" }}>{errors.documento.message}</p>
        )}

        <label>Senha</label>
        <input type="password" {...register("senha")} placeholder="Sua senha" />
        {errors.senha && <p style={{ color: "red" }}>{errors.senha.message}</p>}

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#0b2545",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Criar conta
        </button>
      </form>
    </div>
  );
}

// "use client";
// import React from "react";
// import { Header } from "@/components/header";
// import { useForm } from "react-hook-form";

// export default function Home() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const onSubmit = (data) => console.log(data);
//   console.log(errors);

//   return (
//     <div>
//       <Header />
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           type="text"
//           placeholder="Nome completo"
//           {...register("Nome completo", {
//             required: true,
//             minLength: 3,
//             maxLength: 100,
//           })}
//         />
//         <input
//           type="text"
//           placeholder="Document/CPF/CNPJ"
//           {...register("Document/CPF/CNPJ", {
//             required: true,
//             minLength: 11,
//             maxLength: 14,
//           })}
//         />
//         <input
//           type="password"
//           placeholder="Senha"
//           {...register("Senha", {
//             required: true,
//             minLength: 4,
//             maxLength: 4,
//           })}
//         />

//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

/**
 * Cedric: Login, Transferência
 * Gabriel: Cadastro, Página da Conta
 */
