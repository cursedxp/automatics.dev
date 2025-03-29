import "./globals.css";
import Navbar from "./components/home/navBar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen overflow-scroll bg-gray-100">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
