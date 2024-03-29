'use client';
import { ModeToggle } from '@/components/toggle-mode';
import { Button } from '@/components/ui/button';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-background">
      <h1 className="text-5xl font-bold text-primary">
        Welcome {data?.user?.name} to Task Flow
      </h1>

      <p className="text-xl py-3 text-secondary">
        Your own Task Management System
      </p>
      {data?.user ? (
        <>
          <Button>Get Events</Button>
          <Button onClick={() => signOut()}>Sign Out</Button>
        </>
      ) : (
        <form action={() => signIn('google')}>
          <Button onClick={() => signIn('google')}>Sign In</Button>
        </form>
      )}
      <ModeToggle />
    </main>
  );
}
