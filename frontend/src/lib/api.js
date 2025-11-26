import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
    baseURL: API_URL,
})

// Interceptor: Adiciona o token em CADA requisição
api.interceptors.request.use(
  (config) => {
    // Pega o token do localStorage
    const token = localStorage.getItem('authToken');

    if (token) {
      // Define o header Authorization
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;



// import axios from "axios";

// export const api = axios.create({
//     // CTRL + space bar
//     baseURL: 'http://localhost:3000',
// })