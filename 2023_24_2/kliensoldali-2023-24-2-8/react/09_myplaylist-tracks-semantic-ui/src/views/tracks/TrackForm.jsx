import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalOverlay,
  ModalContent,
  ModalHeader,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const Field = ({ label, placeholder, name, value, handleChange }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <input name={name} type="text" placeholder={placeholder} value={value} onChange={handleChange} />
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

export function TrackForm({ open, track, handleClose, handleSuccess }) {
  const editMode = !!track;

  const [formData, setFormData] = useState(editMode ? { ...track } : { ...defaultState });

  // useEffect(() => {
  //   if (track) {
  //     setFormData({ ...track });
  //   }
  // }, [track]);

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    handleSuccess(formData);
    handleClose();
  };

  return (
    <Modal isOpen={open} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent as="form" onSubmit={handleSubmit}>
        <ModalHeader>{editMode ? "Edit" : "Add new"} Track</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div className="description">
            <div className="ui form">
              <div className="three fields">
                <Field
                  label="Author"
                  placeholder="John Williams"
                  name="artist"
                  value={formData.artist}
                  handleChange={handleInput}
                />
                <Field
                  label="Track name"
                  placeholder="Imperial March"
                  name="title"
                  value={formData.title}
                  handleChange={handleInput}
                />
                <Field
                  label="Length"
                  placeholder="3:44"
                  name="length"
                  value={formData.length}
                  handleChange={handleInput}
                />
              </div>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="ui black deny button">Cancel</div>
          <button type="submit" className="ui positive right labeled icon button">
            {editMode ? "Edit" : "Add"}
            <i className="plus icon"></i>
          </button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
