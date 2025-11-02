// import { Header } from '@/components/header';
import { Poppins, Open_Sans } from "next/font/google";
import "./styles/globals.css";

const poppins = Poppins({ 
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-h-pop'
});

const openSans = Open_Sans({ 
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-text'
});

export const metadata = {
  title: "Banco Digital Distribuído",
  description: "exemplo de banco",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${openSans.variable}`}>
        {/* <Header /> */}
        {children}
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
