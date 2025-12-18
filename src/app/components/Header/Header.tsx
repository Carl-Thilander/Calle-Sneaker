"use client";

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import LogInButton from "../Buttons/logInButton";
import LogoutButton from "../Buttons/logOutButton";
const menuItems = [
  { label: "Get inspired", href: "/inspired" },
  { label: "Customize", href: "/designer" },
  { label: "About", href: "/about" },
  { label: "Your profile", href: "/profile", protected: true },
];

export default function Header() {
  const { data: session } = useSession();
  const visibleLinks = menuItems.filter((item) => {
    if (item.protected && !session) return false;
    return true;
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"), { noSsr: true });
  const isDark = theme.palette.mode === "dark";
  const borderColor = isDark
    ? theme.palette.common.white
    : theme.palette.common.black;

  const handleToggleMobile = () => setMobileOpen((prev) => !prev);
  const handleCloseMobile = () => setMobileOpen(false);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        color="inherit"
        sx={{
          borderBottom: `3px solid ${borderColor}`,
          height: "10vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              minHeight: "10vh",
            }}
          >
            <Typography
              variant="h1"
              component={Link}
              href="/"
              sx={{
                textDecoration: "none",
                color: "text.primary",
                fontSize: { xs: "3rem", sm: "3rem", md: "4rem" },
                fontWeight: 600,
              }}
            >
              Sneakers
            </Typography>

            {!isMobile && (
              <>
                <Box sx={{ display: "flex", gap: 6 }}>
                  {visibleLinks.slice(0, 4).map((item) => (
                    <Typography
                      key={item.href}
                      variant="h4"
                      component={Link}
                      href={item.href}
                      sx={{
                        textDecoration: "none",
                        color: "text.primary",
                        fontSize: { sm: "1rem", md: "1.5rem" },
                      }}
                    >
                      {item.label}
                    </Typography>
                  ))}
                </Box>

                {session ? <LogoutButton /> : <LogInButton />}
              </>
            )}

            {isMobile && (
              <IconButton onClick={handleToggleMobile} edge="end">
                {mobileOpen ? (
                  <CloseIcon sx={{ fontSize: 50, color: "black" }} />
                ) : (
                  <MenuIcon sx={{ fontSize: 50, color: "primary" }} />
                )}
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {isMobile && mobileOpen && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "grey.300",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 2,
            }}
          >
            <Typography
              variant="h1"
              component={Link}
              href="/"
              onClick={handleCloseMobile}
              style={{ textDecoration: "none", color: "black" }}
            >
              Sneakers
            </Typography>

            <IconButton onClick={handleCloseMobile}>
              <CloseIcon sx={{ fontSize: 50, color: "black" }} />
            </IconButton>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item.href}
                component={Link}
                href={item.href}
                onClick={handleCloseMobile}
                sx={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "2.7rem",
                  fontFamily: '"Anonymous Pro", monospace',
                  fontStyle: "italic",
                  fontWeight: "bold",
                }}
              >
                {item.label}
              </Typography>
            ))}
            <Button onClick={handleCloseMobile}>
              {session ? <LogoutButton /> : <LogInButton />}
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
}
