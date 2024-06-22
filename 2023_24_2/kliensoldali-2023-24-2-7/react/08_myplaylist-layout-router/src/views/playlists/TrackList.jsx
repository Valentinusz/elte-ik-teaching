import cn from "classnames";
import { useNavigate, useParams } from "react-router-dom";

export function TrackList({ tracks }) {
  const { playlistId, trackId } = useParams();

  const selectedTrackId = Number.parseInt(trackId, 10);

  console.log(selectedTrackId);

  const navigate = useNavigate();

  return (
    <>
      <h3>Playlist title</h3>
      {tracks.map((track) => {
        console.log(track.id === selectedTrackId);
        return (
          <div
            onClick={() => navigate(`/playlists/${playlistId}/tracks/${track.id}`)}
            key={track.id}
            className={cn("item", { active: track.id === selectedTrackId })}
          >
            <i className="large music middle aligned icon"></i>
            <div className="content">
              <div className="header">{track.title}</div>
              <div className="description">{track.artist}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}
