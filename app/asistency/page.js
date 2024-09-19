import Asistency from "@/components/Asistency";
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
            <Asistency />
        </div>
    );
}