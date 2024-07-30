import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-primary">{children}</body>
    </html>
  );
}
