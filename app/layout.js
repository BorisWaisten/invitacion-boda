import "./globals.css";
import { montserrat } from "@/public/fonts";

export const layourMetadata = {
  title: 'M&G - 22/03/2025',
  description: '¡Nos casamos! Ven y celebra con nosotros este día tan especial.',
  icons: {
    icon: '/logo.ico',
  },
  metadataBase: new URL('https://martuygino.vercel.app'),
  openGraph: {
    title: 'M&G - Nuestra Boda',
    description: '¡Nos casamos! Ven y celebra con nosotros este día tan especial.',
    url: 'https://martuygino.vercel.app/',
    type: 'website',
    images: [{}],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Meta etiqueta para desactivar el zoom en móviles */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className={`text-primary ${montserrat.className}`}>
        {children}
      </body>
    </html>
  );
}
