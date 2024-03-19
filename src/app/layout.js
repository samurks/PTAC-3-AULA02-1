// src/app/layout.js

import Menu from "./components/Menu";
import Footer from "./components/Footer";

// Layout principal
export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {/* Componente de menu */}
        <Menu />
        {children}
        {/* Componente de rodapé */}
        <Footer />
      </body>
    </html>
  );
}
