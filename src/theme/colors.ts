import { Colors } from "./types";

export const baseColors = {
  failure: "#F72B50",
  primary: "#FF720D",
  primaryBright: "#e66000",
  primaryDark: "#d95b00",
  secondary: "#7645D9",
  success: "#68CF29",
  warning: "#FFAB2D",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#FF720D",
  background: "#1f2b46",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#0a0e17",
  input: "#483f3b",
  primaryDark: "#d95b00",
  tertiary: "#2d2f37",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#FF720D",
  borderColor: "#524B63",
  card: "#121827",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
  },
};


export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#FF720D",
  background: "#1f2b46",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  invertedContrast: "#0a0e17",
  input: "#483f3b",
  primaryDark: "#d95b00",
  tertiary: "#2d2f37",
  text: "#FFFFFF",
  textDisabled: "#666171",
  textSubtle: "#FF720D",
  borderColor: "#524B63",
  card: "#121827",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #1f606f 0%, #164865 100%)",
  },
};

