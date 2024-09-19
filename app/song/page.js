import SongCompontPage from "@/components/FormSong"; 
import { layourMetadata } from "../layout.js";

export const metadata = {
    ...layourMetadata,
    icons: {
      icon: '/logo.ico',
    },
  }
export default function SongSuggestionPage ()  {
  return (
    <SongCompontPage />
  );
};
