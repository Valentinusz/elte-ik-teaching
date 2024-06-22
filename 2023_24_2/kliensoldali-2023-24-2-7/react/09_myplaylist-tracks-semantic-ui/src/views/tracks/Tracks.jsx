import { exampleTracks } from "../../domain/track";
import { TrackForm } from "./TrackForm";
import { Track } from "./Track";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

export function Tracks() {
  const [tracks, setTracks] = useState([...exampleTracks]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [editedTrack, setEditedTrack] = useState();

  // const { open, setOpen} = useState(false);

  // const handleOpen

  const handleDelete = (trackId) => {
    setTracks(tracks.filter((track) => track.id !== trackId));
  };

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
                handleEdit={() => setEditedTrack(track)}
                handleDelete={() => handleDelete(track.id)}
              />
            ))}
          </tbody>
        </table>
      </div>

      <TrackForm
        key={editedTrack?.id}
        track={editedTrack}
        open={isOpen || editedTrack}
        handleClose={() => {
          onClose();
          setEditedTrack();
        }}
        handleSuccess={(data) => {
          if (editedTrack) {
            const toEditIndex = tracks.findIndex((track) => track.id === editedTrack.id);
            const newTracks = [...tracks];

            newTracks[toEditIndex] = data;
            setTracks(newTracks);
          } else {
            data.id = tracks.length + 1;
            setTracks([...tracks, data]);
          }
        }}
      />
    </>
  );
}
