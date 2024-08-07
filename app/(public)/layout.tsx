import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-4">{children}</main>
      </div>
    </div>
  );
}
