'use client';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <AppBar position="sticky" elevation={0} color="inherit">
                <Toolbar sx={{ gap: 2 }}>
                    <Typography variant="h1" sx={{ ml: 20, flexGrow: 0.3 }}>Sneaker</Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexGrow: 0.2, justifyContent: 'center' }}>
                        <Typography variant="h4" component={Link} sx={{ color: "ActiveCaption" }} href="/inspired">Get Inspired</Typography>
                        <Button component={Link} href="/designer">Customize</Button>
                        <Button component={Link} href="/about">About</Button>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, flexGrow: 0.1, justifyContent: 'flex-end' }}>
                        <Button variant="outlined" component={Link} href="/login">Log in</Button>

                    </Box>
                </Toolbar>
            </AppBar >
        </>
    );
}
