import './globals.css';
import { LangProvider } from '../components/LangProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'GEG · Gegnishtja nën mikroskopin me gjashtë lente',
  description: 'Kujtesa dhe arkivi i hapur i gegnishtes, duke filluar nga Mirdita. / An open memory and archive of Gheg Albanian, starting with Mirdita.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="sq">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Source+Serif+4:opsz,wght@8..60,500;8..60,600;8..60,700&display=swap"
        />
      </head>
      <body>
        <LangProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
