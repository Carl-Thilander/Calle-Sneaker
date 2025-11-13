'use client';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <AppBar position="sticky" elevation={0} color="inherit">
                <Toolbar sx={{ gap: 5 }}>
                    <Typography variant="h1" sx={{ ml: 20, flexGrow: 0.3 }}>Sneakers</Typography>
                    <Box sx={{ display: 'flex', gap: 8, flexGrow: 0.2, justifyContent: 'center' }}>
                        <Typography variant="h4" component={Link} sx={{ color: "ActiveCaption", textDecoration: "none" }} href="/inspired">Get Inspired</Typography>
                        <Typography variant="h4" component={Link} sx={{ color: "ActiveCaption", textDecoration: "none" }} href="/designer">Customize</Typography>
                        <Typography variant="h4" component={Link} sx={{ color: "ActiveCaption", textDecoration: "none" }} href="/about">About</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1, flexGrow: 0.3, justifyContent: 'flex-end', mr: 20 }}>
                        <Button variant="contained" component={Link} href="/login">Log in</Button>

                    </Box>
                </Toolbar>
            </AppBar >
        </>
    );
}
