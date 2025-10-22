// npm install react-hook-form zod @hookform/resolvers react-input-mask



// import React from "react"
// import { Header } from "@/components/header"
// import { useForm } from "react-hook-form"

// export default function Home() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);
//   console.log(errors);
  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
//       <input type="text" placeholder="Last name" {...register("Last name", {required: true, maxLength: 100})} />
//       <input type="password" placeholder="Password" {...register("Password", {required: true, max: 4, min: 4, maxLength: 4, pattern: /1234/i})} />
//       <input type="text" placeholder="CPF/CNPJ" {...register("CPF/CNPJ", {required: true, max: 14, min: 11, maxLength: 14})} />

//       <input type="submit" />
//     </form>
//   );
// }
