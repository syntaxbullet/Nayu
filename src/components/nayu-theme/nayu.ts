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
  shadow: "#1c1917",
  primary: "#06b6d4",
  secondary: "#84cc16",
  neutral: "#fff",
  solid: "#44403c",
  line: "#eee",
  background: "#1c1917",
  surface: "#1c1917",
};

export const color = {
  lightColor,
  darkColor,
} as const;
