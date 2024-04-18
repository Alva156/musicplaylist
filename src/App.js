//{music.length} - length music
// //structural component
// function MusicListBox() {
//   const [musics, setMusic] = useState(tempMusicData);
//   return <Music musics={musics} />;
// }

// //structural component
// function PlaylistBox() {
//   const [playlist, setPlaylist] = useState(tempPlaylist);
//   const addToPlaylist = (music) => {
//     setPlaylist([...playlist, music]);
//   };
//   return (
//     <div className="container">
//       <h2>Playlist</h2>
//       <Playlist playlist={playlist} />
//     </div>
//   );
// }

import "./App.css";
import { useState } from "react";
const tempMusicData = [
  { id: 1, title: "Easy", artist: "LE SSERAFIM", genre: "K-POP" },
  { id: 2, title: "Magnetic", artist: "ILLIT", genre: "Pop" },
  { id: 3, title: "Style", artist: "Taylor Swift", genre: "Pop" },
  {
    id: 4,
    title: "All too Well (10 Minutes)",
    artist: "Taylor Swift",
    genre: "Pop",
  },
];

const tempPlaylist = [
  { id: 1, title: "Enchanted", artist: "Taylor Swift", genre: "Pop" },
  { id: 2, title: "Feel Special", artist: "TWICE", genre: "K-POP" },
  { id: 3, title: "Kingdom", artist: "Downstait", genre: "Rock" },
];

function App() {
  const [music, setMusic] = useState(tempMusicData);
  return (
    <>
      <NavBar>
        <NumberResult music={music} />
      </NavBar>
      <Main>
        <Box>
          <Music music={music} />
        </Box>
        <Box>
          <Playlist />
        </Box>
      </Main>
    </>
  );
}

function NavBar({ children }) {
  return (
    <nav className="container">
      <Logo />
      <Search />
      {children}
    </nav>
  );
}

//stateless - no state
function Logo() {
  return <h1>Music App Logo</h1>;
}

//stateless
function NumberResult({ music }) {
  return (
    <p>
      Found <strong> {music.length} </strong> results
    </p>
  );
}

//stateful component - has state
function Search() {
  const [query, setQuery] = useState("");
  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function Box({ children }) {
  return <div className="container">{children}</div>;
}

//stateless
function Music({ music }) {
  return (
    <ul>
      <h2>Music List</h2>
      {music.map((music) => (
        <li key={music.id}>
          {music.title} by {music.artist} ({music.genre})<button>♥️</button>
        </li>
      ))}
    </ul>
  );
}

//stateless
function Playlist() {
  const [playlist, setPlaylist] = useState(tempPlaylist);
  const addToPlaylist = (music) => {
    setPlaylist([...playlist, music]);
  };
  return (
    <ul>
      <h2>Playlist</h2>
      {playlist.map((music) => (
        <li key={music.id}>
          {music.title} by {music.artist}
          <p>
            <span>⭐</span>
            <span>{music.rating}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}

//structural
function Main({ children }) {
  return <div className="container">{children}</div>;
}

//structural

export default App;

//stateless or presentational component
//stateful component
//structural component

// function Modal() {
//   return (
//     <div>
//       <Success />
//     </div>
//   );
// }

// function Success() {
//   return <p>Well Done!</p>;
// }

// function Error() {
//   return <p>This went wrong!</p>;
// }
