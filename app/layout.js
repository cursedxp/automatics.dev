import "./globals.css";
import Navbar from "./components/navBar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen h-screen bg-amber-500 overflow-scroll">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
