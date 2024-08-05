import "./globals.css";
import { montserrat } from "@/public/fonts";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= {`text-primary ${montserrat.className}`} >{children}</body>
    </html>
  );
}
