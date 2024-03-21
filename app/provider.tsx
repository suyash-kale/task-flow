"use client"
import React, { FC, ReactNode } from "react"
import { ThemeProvider } from "@/components/theme-provider";
import { SessionProvider } from 'next-auth/react'

const Provider: FC<{ children: ReactNode }> = ({ children }) => {
    return <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
    >
    <SessionProvider>
        {children}
    </SessionProvider>
</ThemeProvider>
};

export default Provider;