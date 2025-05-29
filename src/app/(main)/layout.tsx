
import { Navbar } from '@/components/layout/Navbar';
import { Toaster } from "@/components/ui/toaster"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8 md:px-6">
        {children}
      </main>
      <footer className="py-6 text-center text-muted-foreground text-sm border-t border-border/40">
        © {new Date().getFullYear()} Lucknow Navigator. All rights reserved.
      </footer>
      <Toaster />
    </div>
  );
}
