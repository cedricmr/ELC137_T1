
import "./globals.css";
import Header  from '../componets/header'


export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>

        <Header />

        {children}
      </body>
    </html>
  );
}
