import "./globals.css";
import Navbar from "./components/navBar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen h-screen overflow-scroll bg-gray-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
