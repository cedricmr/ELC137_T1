// import { Header } from '@/components/header';
import './styles/globals.css';


export const metadata = {
  title: "Banco Digital Distribuído",
  description: "exemplo de banco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* <Header /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}

/**
 * import "./styles/globals.css";
import { cormorant } from "./styles/fonts";
import { BottomNavMui } from '@/components/bottomnavmui';

export const metadata = {
  title: "mosai | Acervo ArtÍstico UFSM",
  description: "Portal de exposições e obras do Acervo Artístico da UFSM",
};




export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable}`}>
        {children}
        <BottomNavMui />
      </body>
    </html>
  );
}

 * 
 */