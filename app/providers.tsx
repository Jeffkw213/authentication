// app/providers.tsx
'use client'

import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <NextUIProvider className="h-screen grid place-items-center">
            {children}
        </NextUIProvider>
    )
}