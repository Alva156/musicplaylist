import "./App.css";
import { useState } from "react";

const tempMusicData = [
  {
    id: 1,
    title: "Easy On Me",
    artist: "Adele",
    genre: "Pop",
    rating: 5,
  },
  {
    id: 2,
    title: "Blinding Lights",
    artist: "The Weeknd",
    genre: "Pop",
    rating: 5,
  },
  {
    id: 3,
    title: "Bad Habit",
    artist: "Steve Lacy",
    genre: "Alternative",
    rating: 4,
  },
  {
    id: 4,
    title: "About Damn Time",
    artist: "Lizzo",
    genre: "Pop",
    rating: 4,
  },
  {
    id: 5,
    title: "As It Was",
    artist: "Harry Styles",
    genre: "Pop",
    rating: 4,
  },
  {
    id: 6,
    title: "Shivers",
    artist: "Ed Sheeran",
    genre: "Pop",
    rating: 3,
  },
  {
    id: 7,
    title: "Levitating",
    artist: "Dua Lipa",
    genre: "Pop",
    rating: 5,
  },
  {
    id: 8,
    title: "Heat Waves",
    artist: "Glass Animals",
    genre: "Alternative",
    rating: 4,
  },
  {
    id: 9,
    title: "Stay",
    artist: "The Kid LAROI, Justin Bieber",
    genre: "Pop",
    rating: 3,
  },
  {
    id: 10,
    title: "Ghost",
    artist: "Justin Bieber",
    genre: "Pop",
    rating: 3,
  },
  {
    id: 11,
    title: "INDUSTRY BABY",
    artist: "Lil Nas X, Jack Harlow",
    genre: "Hip-Hop",
    rating: 5,
  },
  {
    id: 12,
    title: "Cold Heart",
    artist: "Elton John, Dua Lipa",
    genre: "Pop",
    rating: 4,
  },
  {
    id: 13,
    title: "Happier Than Ever",
    artist: "Billie Eilish",
    genre: "Alternative",
    rating: 4,
  },
  {
    id: 14,
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    genre: "Pop",
    rating: 5,
  },
  {
    id: 15,
    title: "MONTERO (Call Me By Your Name)",
    artist: "Lil Nas X",
    genre: "Pop",
    rating: 5,
  },
  {
    id: 16,
    title: "Save Your Tears",
    artist: "The Weeknd",
    genre: "Pop",
    rating: 4,
  },
  {
    id: 17,
    title: "Beggin'",
    artist: "Måneskin",
    genre: "Rock",
    rating: 3,
  },
  {
    id: 18,
    title: "Woman",
    artist: "Doja Cat",
    genre: "Pop",
    rating: 3,
  },
  {
    id: 19,
    title: "Butter",
    artist: "BTS",
    genre: "K-POP",
    rating: 5,
  },
  {
    id: 20,
    title: "Peaches",
    artist: "Justin Bieber",
    genre: "R&B",
    rating: 4,
  },
];

const tempPlaylist = [
  // { id: 1, title: "Enchanted", artist: "Taylor Swift", genre: "Pop" },
  // { id: 2, title: "Feel Special", artist: "TWICE", genre: "K-POP" },
  // { id: 3, title: "Kingdom", artist: "Downstait", genre: "Rock" },
];
const genreOptions = [
  { value: "", label: "All Genres" },
  { value: "Pop", label: "Pop" },
  { value: "R&B", label: "R&B" },
  { value: "K-POP", label: "K-POP" },
  { value: "Rock", label: "Rock" },
  { value: "Alternative", label: "Alternative" },
  { value: "Hip-Hop", label: "Hip-Hop" },
];
const sortOptions = [
  { value: "title-asc", label: "Alphabetical Order" },
  { value: "title-desc", label: "Reverse Alphabetical Order" },
  { value: "rating-desc", label: "Highest to Lowest in Rating" },
  { value: "rating-asc", label: "Lowest to Highest in Rating" },
];

function App() {
  const [music, setMusic] = useState(tempMusicData);
  const [playlist, setPlaylist] = useState(tempPlaylist);
  const [musicQuery, setMusicQuery] = useState("");
  const [playlistQuery, setPlaylistQuery] = useState("");
  const [musicSortBy, setMusicSortBy] = useState("title-asc");
  const [playlistSortBy, setPlaylistSortBy] = useState("title-asc");
  const [musicGenre, setMusicGenre] = useState("");
  const [playlistGenre, setPlaylistGenre] = useState("");

  const handleMusicSortChange = (e) => setMusicSortBy(e.target.value);
  const handlePlaylistSortChange = (e) => setPlaylistSortBy(e.target.value);
  const handleMusicGenreChange = (e) => setMusicGenre(e.target.value);
  const handlePlaylistGenreChange = (e) => setPlaylistGenre(e.target.value);

  const filteredMusic = music.filter((m) => {
    return (
      (m.title.toLowerCase().includes(musicQuery.toLowerCase()) ||
        m.artist.toLowerCase().includes(musicQuery.toLowerCase()) ||
        m.genre.toLowerCase().includes(musicQuery.toLowerCase())) &&
      (musicGenre ? m.genre === musicGenre : true)
    );
  });

  const filteredPlaylist = playlist.filter((p) => {
    return (
      (p.title.toLowerCase().includes(playlistQuery.toLowerCase()) ||
        p.artist.toLowerCase().includes(playlistQuery.toLowerCase()) ||
        p.genre.toLowerCase().includes(playlistQuery.toLowerCase())) &&
      (playlistGenre ? p.genre === playlistGenre : true)
    );
  });

  const sortedMusic = sortMusic(filteredMusic, musicSortBy);
  const sortedPlaylist = sortMusic(filteredPlaylist, playlistSortBy);

  const addToPlaylist = (newMusic) => {
    if (!playlist.some((m) => m.id === newMusic.id)) {
      setPlaylist([...playlist, newMusic]);
    }
  };

  const removeFromPlaylist = (musicId) => {
    setPlaylist(playlist.filter((item) => item.id !== musicId));
  };

  return (
    <>
      <NavBar
        musicQuery={musicQuery}
        setMusicQuery={setMusicQuery}
        playlistQuery={playlistQuery}
        setPlaylistQuery={setPlaylistQuery}
      />
      <Main>
        <Box>
          <Music
            music={sortedMusic}
            onAddToPlaylist={addToPlaylist}
            count={sortedMusic.length}
            sortBy={musicSortBy}
            onSortChange={handleMusicSortChange}
            musicQuery={musicQuery}
            setMusicQuery={setMusicQuery}
            genre={musicGenre}
            onGenreChange={handleMusicGenreChange}
          />
        </Box>
        <Box>
          <Playlist
            playlist={sortedPlaylist}
            onRemoveFromPlaylist={removeFromPlaylist}
            count={sortedPlaylist.length}
            sortBy={playlistSortBy}
            onSortChange={handlePlaylistSortChange}
            playlistQuery={playlistQuery}
            setPlaylistQuery={setPlaylistQuery}
            genre={playlistGenre}
            onGenreChange={handlePlaylistGenreChange}
          />
        </Box>
      </Main>
    </>
  );
}
function NavBar() {
  return (
    <nav className="container">
      <Logo />
    </nav>
  );
}

function Logo() {
  return <h1>MyMusic </h1>;
}

function NumberResult({ music }) {
  return (
    <p>
      Found <strong> {music.length} </strong> results
    </p>
  );
}

function Search({ query, setQuery, placeholder }) {
  return (
    <input
      className="search"
      type="text"
      placeholder={placeholder}
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

function Box({ children }) {
  return <div className="container">{children}</div>;
}

function Music({
  music,
  onAddToPlaylist,
  count,
  sortBy,
  onSortChange,
  musicQuery,
  setMusicQuery,
  genre,
  onGenreChange,
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>Music List</h2>
        <Search
          query={musicQuery}
          setQuery={setMusicQuery}
          placeholder="Search music..."
        />
      </div>
      <Dropdown options={sortOptions} value={sortBy} onChange={onSortChange} />
      <Dropdown options={genreOptions} value={genre} onChange={onGenreChange} />
      <p>Showing {count} results</p>
      <ul>
        {music.map((item) => (
          <li key={item.id}>
            <div>
              <h3>{item.title}</h3>
              <p>BY: {item.artist}</p>
              <p>
                Rating: <span className="star">&#9733;</span> {item.rating}
              </p>
            </div>
            <button
              className="love-button"
              onClick={() => onAddToPlaylist(item)}
            >
              ♥️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Playlist({
  playlist,
  onRemoveFromPlaylist,
  count,
  sortBy,
  onSortChange,
  playlistQuery,
  setPlaylistQuery,
  genre,
  onGenreChange,
}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2>Playlist</h2>
        <Search
          query={playlistQuery}
          setQuery={setPlaylistQuery}
          placeholder="Search music in playlist..."
        />
      </div>
      <Dropdown options={sortOptions} value={sortBy} onChange={onSortChange} />
      <Dropdown options={genreOptions} value={genre} onChange={onGenreChange} />
      <p>Showing {count} results</p>
      <h3>Total Added Songs: {playlist.length}</h3>
      <ul>
        {playlist.map((item) => (
          <li key={item.id} className="list-item">
            <div className="song-details">
              <h3>{item.title}</h3>
              <p>BY: {item.artist}</p>
              <p>
                Rating: <span className="star">&#9733;</span> {item.rating}
              </p>
            </div>
            <button
              className="remove-button"
              onClick={() => onRemoveFromPlaylist(item.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Main({ children }) {
  return <div className="container">{children}</div>;
}
// const addToPlaylist = (newMusic) => {
//   console.log("Adding to playlist:", newMusic.title);
//   if (!playlist.some((music) => music.id === newMusic.id)) {
//     setPlaylist([...playlist, newMusic]);
//   } else {
//     console.log("Song already in playlist:", newMusic.title);
//   }
// };
function sortMusic(music, sortBy) {
  return [...music].sort((a, b) => {
    let fieldA, fieldB;
    const [field, order] = sortBy.split("-");
    if (field === "title") {
      fieldA = a.title.toLowerCase();
      fieldB = b.title.toLowerCase();
    } else if (field === "rating") {
      fieldA = a.rating;
      fieldB = b.rating;
    }
    if (order === "asc") return fieldA > fieldB ? 1 : -1;
    return fieldA < fieldB ? 1 : -1;
  });
}

function Dropdown({ options, value, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default App;
