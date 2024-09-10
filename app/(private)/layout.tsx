import Navbar from "@/components/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div>
        <main className="flex-grow">{children}</main>
      </div>
    </div>
  );
}
