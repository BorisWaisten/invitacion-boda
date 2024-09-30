import SongCompontPage from "@/components/Party/FormSong.jsx"; 
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
