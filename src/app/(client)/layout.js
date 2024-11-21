import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";

export default function ClientLayout({ children }) {
  return (
    <div>
      {/* <Navbar /> */}
      {children}
      <Footer />
    </div>
  );
}
