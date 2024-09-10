import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-grow">
        <Sidebar />
        <main className="flex-grow p-5 px-10">{children}</main>
      </div>
    </div>
  );
}
