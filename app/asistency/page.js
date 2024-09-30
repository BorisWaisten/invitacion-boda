import Asistency from "@/components/Asistency/Asistency.jsx";
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