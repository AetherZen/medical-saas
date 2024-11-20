import Navbar from "@/components/shared/navbar/Navbar";

export default function ClientLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
