import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main className="min-h-screen "> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
