import Outfits from "@/components/Outfits";
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