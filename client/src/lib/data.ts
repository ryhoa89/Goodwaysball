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
    title: "STATIC DREAMS",
    duration: "2:58",
    soundcloudUrl: "https://soundcloud.com/your-artist-name/static-dreams",
    lyrics: `White noise lullaby\nSleep without rest\nPut your hand on my chest\nIs there a heart left?\n\n(Outro)\nFade to black\nDon't look back`,
    commentary: "Recorded in one take using a broken microphone I found at a pawn shop. The crackle is real. It's about the beauty in imperfection."
  },
  {
    id: "4",
    title: "NEON RAIN",
    duration: "5:20",
    soundcloudUrl: "https://soundcloud.com/your-artist-name/neon-rain",
    lyrics: `Colors bleeding on the pavement\nReflections of a life I knew\nWalking through the storm\nJust to get to you`,
    commentary: "The final track of the EP. It offers a glimmer of hope amidst the gloom. The rain sounds were recorded during a thunderstorm in Tokyo."
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
    src: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop",
    alt: "Studio gear in low light"
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop",
    alt: "Vintage microphone"
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
    alt: "Stage lights"
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=1974&auto=format&fit=crop",
    alt: "Silhouette performance"
  }
];
