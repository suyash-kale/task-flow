import { ModeToggle } from "@/components/toggle-mode";
import { Button } from "@/components/ui/button";
import { auth, signIn, signOut } from '../auth'

export default async function Home() {
  const session = await auth();
  // console.log('Suyash', session);
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-background">
      <h1 className="text-5xl font-bold text-primary">
        Welcome {session?.user?.name} to Task Flow</h1>

      <p className="text-xl py-3 text-secondary">
        Your own Task Management System
      </p>
      {session?.user ? <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button type="submit">Sign Out</Button>
            </form> :  <form
            action={async () => {
              "use server";
              await signIn('google');
            }}
          >
            <Button type="submit">Sign In</Button>
          </form>}
          <ModeToggle />
    </main>
  );
}
