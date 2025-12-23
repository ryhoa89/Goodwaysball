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
    lyrics: `Standing on the edge of silence\nWatching the world dissolve\nInto static patterns\nWe cannot solve\n\n(Chorus)\nJoy to the world\nCalling my name\nNothing is different\nEverything's the same`,
    commentary: "A celebration wrapped in existential contemplation. This track captures the paradox of finding joy amid the chaos. The production balances bright melodies with darker undertones, reflecting the complexity of human emotion."
  },
  {
    id: "2",
    title: "WILL YOU",
    duration: "4:15",
    soundcloudUrl: "https://soundcloud.com/kingdomtracks/will-you-unfinished-demo",
    lyrics: `Will you stay when the light fades\nWill you wait through the endless nights\nWill you find me in the silence\nWill you hold me till it's right`,
    commentary: "An unfinished demo that captures the raw vulnerability of uncertainty. The sparse production lets the emotional weight of the vocal performance shine through. It's about holding onto hope in the face of doubt."
  },
  {
    id: "3",
    title: "STRANGE WAYS",
    duration: "2:58",
    soundcloudUrl: "https://soundcloud.com/kingdomtracks/strange-ways-demo",
    lyrics: `Walking down these strange ways\nSearching for a truth I know\nNothing feels the way it should\nBut I can't let you go\n\n(Chorus)\nStrange ways lead me home\nTo a place I've never known`,
    commentary: "A demo that explores the uncanny feeling of dislocation. The minimal production creates space for introspection. Sometimes the path forward requires embracing the unfamiliar and trusting the journey."
  },
  {
    id: "4",
    title: "BREATHE REMIX",
    duration: "5:20",
    soundcloudUrl: "https://soundcloud.com/kingdomtracks/breathe-remix",
    lyrics: `Just breathe through the chaos\nLet the moment hold you\nIn the space between the noise\nSomething's trying to find you`,
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
