export type ColorMode = "light" | "dark";

export type ColorModeContextValue = {
  mode: ColorMode;
  toggleColorMode: () => void;
};
