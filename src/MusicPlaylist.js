import React from "react";

function MusicPlaylist({ musics, playlist }) {
  return (
    <div className="container">
      <div className="music-list">
        <h2>Music List</h2>
        <ul>
          {musics.map((music) => (
            <li key={music.id}>
              {music.title} by {music.artist} ({music.genre})<button>♥️</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="playlist">
        <h2>Playlist</h2>
        <ul>
          {playlist.map((music) => (
            <li key={music.id}>
              {music.title} by {music.artist}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MusicPlaylist;
