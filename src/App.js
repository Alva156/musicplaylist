import React, { useState } from "react";
import Navigation from "./Navigation";
import MusicPlaylist from "./MusicPlaylist";
import "./App.css";
const tempMusicData = [
  {
    id: 1,
    title: "Easy",
    artist: "LE SSERAFIM",
    genre: "K-POP",
  },
  {
    id: 2,
    title: "Magnetic",
    artist: "ILLIT",
    genre: "Pop",
  },
  {
    id: 3,
    title: "Style",
    artist: "Taylor Swift",
    genre: "Pop",
  },
];
const tempPlaylist = [
  {
    id: 1,
    title: "Enchanted",
    artist: "Taylor Swift",
    genre: "Pop",
  },
  {
    id: 2,
    title: "Feel Special",
    artist: "TWICE",
    genre: "K-POP",
  },
  {
    id: 3,
    title: "Kingdom",
    artist: "Downstait",
    genre: "Rock",
  },
];

function App() {
  const [query, setQuery] = useState("");
  const [musics, setMusic] = useState(tempMusicData);
  const [playlist, setPlaylist] = useState(tempPlaylist);

  return (
    <div>
      <Navigation query={query} setQuery={setQuery} />
      <MusicPlaylist musics={musics} playlist={playlist} />
    </div>
  );
}

export default App;
