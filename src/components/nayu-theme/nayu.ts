/* Copyright 2021, Milkdown by Mirone. */
import type { Color } from "@milkdown/design-system";

export const lightColor: Record<Color, string> = {
  shadow: "#1c1917",
  primary: "#06b6d4",
  secondary: "#84cc16",
  neutral: "#292524",
  solid: "#44403c",
  line: "#1c1917",
  background: "#ffffff",
  surface: "#ffffff",
};

export const darkColor: Record<Color, string> = {
  shadow: "#a9b1d6",
  primary: "#f7768e",
  secondary: "#e0af68",
  neutral: "#c0caf5",
  solid: "#7dcfff",
  line: "#bb9af7",
  background: "#1a1b26",
  surface: "#24283b",
};

export const color = {
  lightColor,
  darkColor,
} as const;
