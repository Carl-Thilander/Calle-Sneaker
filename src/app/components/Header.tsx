'use client';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <AppBar position="sticky" elevation={0} color="inherit">
                <Toolbar sx={{ gap: 2 }}>
                    <Typography variant="h1" sx={{ flexGrow: 0.8 }}>Sneaker</Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Button component={Link} href="/inspired">Get Inspired</Button>
                        <Button component={Link} href="/designer">Customize</Button>
                        <Button component={Link} href="/about">About</Button>
                        <Button variant="outlined" component={Link} href="/login">Log in</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}
