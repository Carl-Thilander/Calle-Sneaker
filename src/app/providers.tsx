'use client';
import { ReactNode, useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

export default function Providers({ children }: { children: ReactNode }) {
    const [mode, setMode] = useState<'light' | 'dark'>('light');
    const themeMemo = useMemo(() => theme(mode), [mode]);

    return (
        <ThemeProvider theme={themeMemo}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
}
