import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFocusScope,
  ModalFooter,
} from "@chakra-ui/react";
import { useState } from "react";

/* eslint-disable react/prop-types */
const Field = ({ label, placeholder, name, value, onChange }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input name={name} value={value} onChange={onChange} type="text" placeholder={placeholder} />
    </div>
  );
};

const defaultState = {
  artist: "",
  title: "",
  length: "",
  thumbnailURL: "",
  spotifyURL: "",
  chordsURL: "",
  lyricsURL: "",
};

export function TrackForm({ open, handleClose, handleSuccess, track }) {
  const [data, setData] = useState(track ? { ...track } : { ...defaultState });

  console.log(track);

  const handleInput = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(data);

    handleSuccess(data);
    handleClose();
  };

  return (
    <Modal isOpen={open} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleSubmit}>
        <ModalHeader>
          <div className="header">Add new Track</div>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="image content">
            <div className="description">
              <div className="ui form">
                <div className="three fields">
                  <Field
                    label="Author"
                    placeholder="John Williams"
                    name="artist"
                    value={data.artist}
                    onChange={handleInput}
                  />
                  <Field
                    label="Track name"
                    placeholder="Imperial March"
                    name="title"
                    value={data.title}
                    onChange={handleInput}
                  />
                  <Field label="Length" placeholder="3:44" name="length" value={data.length} onChange={handleInput} />
                </div>
                <div className="three fields">
                  <Field
                    label="Spotify URL"
                    placeholder="https://"
                    name="spotifyURL"
                    value={data.spotifyURL}
                    onChange={handleInput}
                  />
                  <Field
                    label="Lyrics URL"
                    placeholder="https://"
                    name="lyricsURL"
                    value={data.lyricsURL}
                    onChange={handleInput}
                  />
                  <Field
                    label="Guitar tab URL"
                    placeholder="https://"
                    name="chordsURL"
                    value={data.chordsURL}
                    onChange={handleInput}
                  />
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="actions">
            <div className="ui black deny button">Cancel</div>
            <button type="submit" className="ui positive right labeled icon button">
              {track ? "Edit" : "Add"}
              <i className="plus icon"></i>
            </button>
          </div>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
