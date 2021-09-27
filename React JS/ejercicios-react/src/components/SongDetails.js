import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyrics from "./SongLyrics";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: no existe la canción "<em>${search.song}</em>"`}
          bgColor={`#dc3545`}
        />
      ) : (
        <SongLyrics title={search.song} lyrics={lyric.lyrics} />
      )}
      {bio.artists ? (
        <SongArtist artist={bio.artists[0]} />
      ) : (
        <Message
          msg={`Error: no existe el intérprete "<em>${search.artists}</em>"`}
          bgColor={`#dc3545`}
        />
      )}
    </>
  );
};

export default SongDetails;
