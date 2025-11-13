'use client';


import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import Link from 'next/link';

export default function Header() {
    return (
        <AppBar
            position="sticky"
            elevation={0}
            color="inherit"
            sx={{
                borderBottom: "2px solid black",
                height: "10vh",
                display: "flex",
                justifyContent: "center"
            }}
        >
            <Container maxWidth="xl">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

                    {/* LOGGA */}
                    <Typography
                        variant="h1"
                        component={Link}
                        href="/"
                        sx={{
                            textDecoration: "none",
                            color: "black",
                        }}
                    >
                        Sneakers
                    </Typography>

                    {/* MENY */}
                    <Box sx={{ display: "flex", gap: 6 }}>
                        <Typography variant="h4" component={Link} href="/inspired" sx={{ textDecoration: "none", color: "ActiveCaption" }}>
                            Get Inspired
                        </Typography>
                        <Typography variant="h4" component={Link} href="/designer" sx={{ textDecoration: "none", color: "ActiveCaption" }}>
                            Customize
                        </Typography>
                        <Typography variant="h4" component={Link} href="/about" sx={{ textDecoration: "none", color: "ActiveCaption" }}>
                            About
                        </Typography>
                    </Box>

                    {/* LOGIN */}
                    <Button variant="contained" component={Link} href="/login">
                        Log in
                    </Button>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
