import "./globals.css";
import { montserrat } from "@/public/fonts";

export const layourMetadata = {
  title: 'M&G - 21/21/2025',
  description: '¡Nos casamos! Ven y celebra con nosotros este día tan especial.',
  icons: {
    icon:'',
  },
  metadataBase: new URL('https://invitacion-boda-blue.vercel.app'), // Agrega esta línea
  openGraph: {
    title: 'M&G - Nuestra Boda',
    description: '¡Nos casamos! Ven y celebra con nosotros este día tan especial.',
    url: 'https://invitacion-boda-blue.vercel.app/',
    type: 'website',
    images: [{},],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= {`text-primary ${montserrat.className}`} >{children}</body>
    </html>
  );
}
