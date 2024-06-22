import { exampleTracks } from "../../domain/track";
import { TrackForm } from "./TrackForm";
import { Track } from "./Track";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

export function Tracks() {
  // állapot
  const [tracks, setTracks] = useState([...exampleTracks]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTrack, setSelectedTrack] = useState();

  // műveletek
  const handleSuccess = (track) => {
    if (selectedTrack) {
      const toEditIndex = tracks.findIndex(({ id }) => id === selectedTrack.id);

      const newTracks = [...tracks];

      newTracks[toEditIndex] = track;

      setTracks(newTracks);
    } else {
      track.id = Math.random().toString(16).slice(2);
      setTracks([...tracks, track]);
    }
  };

  const handleDelete = (trackId) => {
    setTracks(tracks.filter((track) => track.id !== trackId));
  };

  const handleSelect = (track) => {
    setSelectedTrack(track);
  };

  // számított értékek
  const open = isOpen || !!selectedTrack;

  return (
    <>
      <div className="ui container">
        <button href="#" className="ui right floated green button" id="newModal" onClick={onOpen}>
          <i className="plus icon"></i>
          New track
        </button>
        <h1>Tracks</h1>
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>Artist</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((track) => (
              <Track
                key={track.id}
                track={track}
                handleEdit={() => handleSelect(track)}
                handleDelete={() => handleDelete(track.id)}
              />
            ))}
          </tbody>
        </table>
      </div>

      {open && (
        <TrackForm
          open={open}
          track={selectedTrack}
          handleClose={() => {
            onClose();
            setSelectedTrack();
          }}
          handleSuccess={handleSuccess}
        />
      )}
    </>
  );
}
