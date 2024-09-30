
import InfoGifts from "@/components/Gifts/InfoGifts.jsx";
import { layourMetadata } from "../layout.js";

export const metadata = {
  ...layourMetadata,
  icons: {
    icon: '/logo.ico',
  },
};

export default function InformationPage() {
  return (
    <>
      <InfoGifts />
    </>
  );
}
