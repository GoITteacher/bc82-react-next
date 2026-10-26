import { Song } from "../../../services/songs";

interface SongListProps {
  songs: Song[];
}

const SongList = ({ songs }: SongListProps) => {
  return (
    <ul>
      {songs.map((song) => {
        return (
          <li key={song._id}>
            {song.title} - {song.artist}
          </li>
        );
      })}
    </ul>
  );
};

export default SongList;
