import { Josefin_Slab, Montserrat, Dancing_Script, Playfair_Display } from "next/font/google";

export const josefinSlab = Josefin_Slab({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    fallback: ["sans-serif"],
});

export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    fallback: ["sans-serif"],
});

export const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    fallback: ["cursive"],
});

export const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    fallback: ["serif"],
});
