import Outfits from "@/components/Party/Outfits.jsx";
import { layourMetadata } from "../layout.js";

export const metadata = {
    ...layourMetadata,
    icons: {
      icon: '/logo.ico',
    },
  }
export default function Page() {
    return (
        <div>
            <Outfits />
        </div>
    );
}