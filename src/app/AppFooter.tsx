"use client";

import { AppBar, Toolbar, Button, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";



export default function Footer() {
    return (
        <AppBar position="sticky" elevation={0} color="inherit">
            <Toolbar sx={{ gap: 2 }}>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>CustomKicks</Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button component={Link} href="/">Hem</Button>
                    <Button component={Link} href="/inspired">Get Inspired</Button>
                    <Button variant="contained" component={Link} href="/designer">Designa sko</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}