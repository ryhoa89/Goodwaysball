export interface Track {
  id: string;
  title: string;
  duration: string;
  url: string; // In a real app, this would be the Google Drive direct link
  lyrics: string;
  commentary: string;
}

export const tracks: Track[] = [
  {
    id: "1",
    title: "ECHOES FROM THE VOID",
    duration: "3:42",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    lyrics: `Standing on the edge of silence\nWatching the world dissolve\nInto static patterns\nWe cannot solve\n\n(Chorus)\nEchoes from the void\nCalling my name\nNothing is different\nEverything's the same`,
    commentary: "I wrote this track at 4 AM after walking through the empty city streets. It captures the feeling of isolation in a hyper-connected world. The synth pad in the background is actually a slowed-down recording of a subway train."
  },
  {
    id: "2",
    title: "DIGITAL GHOSTS",
    duration: "4:15",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    lyrics: `Screens glowing in the dark\nFaces without names\nWe are just data points\nIn their games\n\nTracing lines of code\nSearching for a soul\nBut all I find is empty space\nWhere I used to be whole`,
    commentary: "A critique of our digital existence. Are we leaving a mark, or just cache files to be cleared? The distortion on the vocals represents the signal degradation of human connection."
  },
  {
    id: "3",
    title: "STATIC DREAMS",
    duration: "2:58",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    lyrics: `White noise lullaby\nSleep without rest\nPut your hand on my chest\nIs there a heart left?\n\n(Outro)\nFade to black\nDon't look back`,
    commentary: "Recorded in one take using a broken microphone I found at a pawn shop. The crackle is real. It's about the beauty in imperfection."
  },
  {
    id: "4",
    title: "NEON RAIN",
    duration: "5:20",
    url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
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
