"use client";
import type { ColorMode, ColorModeContextValue } from "@/types/ui";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import theme from "./styles/theme";

type ProvidersProps = {
  children: ReactNode;
  session: Session | null;
};

const ColorModeContext = createContext<ColorModeContextValue | undefined>(
  undefined
);

export function useColorMode() {
  const ctx = useContext(ColorModeContext);
  if (!ctx) {
    throw new Error("colormode must be used within provider");
  }
  return ctx;
}

export default function Providers({ children, session }: ProvidersProps) {
  const [mode, setMode] = useState<ColorMode>("light");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setMode(stored);
      return;
    }

    const prefersDark = window.matchMedia?.(
      "(prefers-color-scheme: dark)"
    ).matches;
    setMode(prefersDark ? "dark" : "light");
  }, []);

  const toggleColorMode = useCallback(() => {
    setMode((prev) => {
      const next: ColorMode = prev === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", next);
      }
      return next;
    });
  }, []);

  const muitheme = useMemo(() => theme(mode), [mode]);

  return (
    <SessionProvider session={session}>
      <AppRouterCacheProvider options={{ key: "mui" }}>
        <ColorModeContext.Provider value={{ mode, toggleColorMode }}>
          <ThemeProvider theme={muitheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </ColorModeContext.Provider>
      </AppRouterCacheProvider>
    </SessionProvider>
  );
}
