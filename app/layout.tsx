import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({ weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Task Flow",
  description: "Your own Task Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
