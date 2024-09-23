
import InfoGifts from "@/components/InfoGifts.jsx";
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
