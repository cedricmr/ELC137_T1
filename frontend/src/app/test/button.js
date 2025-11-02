import React from 'react';
// Em um projeto Next.js/React moderno, 'lucide-react' é uma 
// excelente opção para ícones. (Você pode precisar instalar: npm install lucide-react)
import { Rocket } from 'lucide-react';

/**
 * Um componente de botão reutilizável e estilizado com Tailwind CSS.
 *
 * @param {object} props
 * @param {'primary' | 'secondary' | 'danger'} [props.variant='primary'] - A variante de estilo do botão.
 * @param {React.ReactNode} props.children - O conteúdo do botão (texto, ícones, etc.).
 * @param {() => void} [props.onClick] - A função a ser chamada quando o botão é clicado.
 * @param {boolean} [props.disabled] - Se o botão está desabilitado.
 * @param {'button' | 'submit' | 'reset'} [props.type='button'] - O tipo do botão HTML.
 */
const Button = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
  ...rest // Captura outras props (ex: aria-label)
}) => {

  // Estilos base para todos os botões
  const baseStyle = "inline-flex items-center justify-center px-4 py-2 font-semibold rounded-lg shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Estilos específicos para cada variante
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  // Estilos para o estado desabilitado
  const disabledStyle = "opacity-50 cursor-not-allowed";

  // Combina os estilos dinamicamente
  const className = [
    baseStyle,
    variantStyles[variant],
    disabled ? disabledStyle : ''
  ].join(' ').trim();

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

/**
 * Componente principal da aplicação para demonstrar o botão.
 * Este é o componente que seria renderizado pela sua página Next.js.
 */
export default function App() {

  // Função de exemplo para o clique
  const handlePrimaryClick = () => {
    console.log("Botão primário clicado!");
    // (Evite 'alert' em apps React; 'console.log' é melhor para depuração)
  };

  const handleDangerClick = () => {
    console.log("Botão de perigo clicado!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center mb-8">
          Demonstração do Componente de Botão
        </h1>
        
        <div className="flex flex-col space-y-4">
          {/* Botão Primário (Padrão) */}
          <Button onClick={handlePrimaryClick}>
            Botão Primário
          </Button>

          {/* Botão Secundário */}
          <Button variant="secondary" onClick={() => console.log("Secundário")}>
            Botão Secundário
          </Button>

          {/* Botão de Perigo */}
          <Button variant="danger" onClick={handleDangerClick}>
            Ação de Perigo
          </Button>

          {/* Botão com Ícone */}
          <Button variant="primary" onClick={() => console.log("Lançar!")}>
            <Rocket size={18} className="mr-2" /> {/* Ícone do Lucide */}
            Lançar Foguete
          </Button>

          {/* Botão Desabilitado */}
          <Button disabled>
            Botão Desabilitado
          </Button>
        </div>
      </div>
    </div>
  );
}
