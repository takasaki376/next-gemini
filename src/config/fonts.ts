import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Poppins,
  Jacques_Francois_Shadow as JacqShadow,
} from "next/font/google";

export const fontSans = FontSans({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mono",
});
export const fontText = Poppins({
  weight: "400",
  subsets: ["latin"],
  style: "normal",
});

export const fontHeader = JacqShadow({
  weight: "400",
  subsets: ["latin"],
});
