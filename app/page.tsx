import { ModeToggle } from "@/components/toggle-mode";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-background">
      <h1 className="text-5xl font-bold text-primary">Welcome to Task Flow</h1>

      <p className="text-xl py-3 text-secondary">
        Your own Task Management System
      </p>
      <ModeToggle />
    </main>
  );
}
