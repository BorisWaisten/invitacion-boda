import {Parisienne, Sacramento,Great_Vibes, Montserrat, Dancing_Script, Playfair_Display } from "next/font/google";

export const parisienne = Parisienne({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
    fallback: ["cursive"],
})

export const greatVibes = Great_Vibes({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
    fallback: ["cursive"],
})

export const SacramentoFont = Sacramento({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
    fallback: ["cursive"],
})

export const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400"],
    display: "swap",
});



export const dancingScript = Dancing_Script({
    subsets: ["latin"],
    weight: ["400", "400"],
    display: "swap",
    fallback: ["cursive"],
});

export const playfairDisplay = Playfair_Display({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
    fallback: ["serif"],
});
