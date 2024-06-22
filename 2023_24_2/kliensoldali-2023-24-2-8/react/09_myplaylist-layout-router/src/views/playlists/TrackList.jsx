import cn from "classnames";
import { useNavigate, useParams } from "react-router-dom";

export function TrackList({ tracks }) {
  const params = useParams();
  const navigate = useNavigate();

  const selectedTrackId = Number.parseInt(params.trackId, 10);

  console.log(params);

  return (
    <>
      <h3>Playlist title</h3>

      <div className="ui very relaxed selection list">
        {tracks.map((track) => (
          <div
            onClick={() => navigate(`/playlists/${params.playlistId}/tracks/${track.id}`)}
            key={track.id}
            className={cn("item", { active: track.id === selectedTrackId })}
          >
            <i className="large music middle aligned icon"></i>
            <div className="content">
              <div className="header">{track.title}</div>
              <div className="description">{track.artist}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
