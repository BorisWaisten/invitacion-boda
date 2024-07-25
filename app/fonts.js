import { Josefin_Slab, Montserrat } from "next/font/google";


export const josefinaSlab = Josefin_Slab({
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
})