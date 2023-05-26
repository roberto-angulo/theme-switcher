// @types
import { ThemeStyleType, ThemeType } from "./types";

export const THEMES = Object.freeze({
  dark: "dark",
  light: "light"
});

export const STYLES: Record<ThemeType, ThemeStyleType> = Object.freeze({
  [THEMES.dark]: "dark-theme",
  [THEMES.light]: "light-theme"
});
