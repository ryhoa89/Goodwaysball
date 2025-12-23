import recordingSessionImage from "@assets/image_1766434722354.png";
import studioSessionImage from "@assets/Screenshot_2025-12-22_20.18.25_1766451803889.png";
import neonPortraitImage from "@assets/Screenshot_2025-12-22_20.19.45_1766451850609.png";
import kingdomTextImage from "@assets/Screenshot_2025-12-23_01.06.14_1766452129217.png";
import mountainArchiveImage from "@assets/image_1766452400489.png";

export interface Track {
  id: string;
  title: string;
  duration: string;
  soundcloudUrl: string; // SoundCloud track URL
  lyrics: string;
  commentary: string;
}

export const tracks: Track[] = [
  {
    id: "1",
    title: "JOY! TO THE WORLD!",
    duration: "3:42",
    soundcloudUrl: "https://soundcloud.com/verycoolkanye/joy-to-the-world",
    lyrics: `1. Joy to the world; the Lord is come;
Let Earth receive her King;
Let ev'ry heart prepare him room,
And heav'n and nature sing.
2. Joy to the Earth, the Savior reigns;
Our mortal songs employ,
While fields and floods, rocks, hills and plains,
Repeat the sounding joy.
`,
    commentary: "A celebration wrapped in existential contemplation. This track captures the paradox of finding joy amid the chaos. The production balances bright melodies with darker undertones, reflecting the complexity of human emotion."
  },
  {
    id: "2",
    title: "WILL YOU",
    duration: "4:15",
    soundcloudUrl: "https://soundcloud.com/kingdomtracks/will-you-unfinished-demo",
    lyrics: '',
    commentary: "An unfinished demo that captures the raw vulnerability of uncertainty. The sparse production lets the emotional weight of the vocal performance shine through. It's about holding onto hope in the face of doubt."
  },
  {
    id: "3",
    title: "STRANGE WAYS",
    duration: "2:58",
    soundcloudUrl: "https://soundcloud.com/kingdomtracks/strange-ways-demo",
    lyrics: '',
    commentary: "A demo that explores the uncanny feeling of dislocation. The minimal production creates space for introspection. Sometimes the path forward requires embracing the unfamiliar and trusting the journey."
  },
  {
    id: "4",
    title: "BREATHE REMIX",
    duration: "5:20",
    soundcloudUrl: "https://soundcloud.com/kingdomtracks/breathe-remix",
    lyrics: '',
    commentary: "A remixed exploration of stillness amidst overwhelm. The layered production creates a meditative journey, inviting listeners to pause and reconnect with themselves. Sometimes the answer is simply to breathe."
  }
];

export interface Photo {
  id: string;
  src: string;
  alt: string;
}

export const photos: Photo[] = [
  {
    id: "1",
    src: studioSessionImage,
    alt: "Live recording session with cathedral windows"
  },
  {
    id: "2",
    src: neonPortraitImage,
    alt: "Neon portrait with artists"
  },
  {
    id: "3",
    src: kingdomTextImage,
    alt: "Kingdom glitch text art"
  },
  {
    id: "4",
    src: mountainArchiveImage,
    alt: "Mountain vista archive"
  }
];
