/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Modal from "../../../utils/util/modal";
import { Flex } from "../../basicStyles/Flex";
import { submitTypes, UpdateSongTypeProps } from "./types";
import { useSelector } from "react-redux";
import { selectError, selectSong } from "./slice/selector";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateSong = (props: UpdateSongTypeProps) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  const { songId } = useParams();
  const handleCloseModal = () => {
    setShowModal(!showModal);
    navigate("/songlist");
  };
  const errorMessage = useSelector(selectError);
  const song = useSelector(selectSong);
  const initialValues = {
    album: song[0].album,
    artist: song[0].artist,
    genre: song[0].genre,
    title: song[0].title,
    songId: String(songId),
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    album: Yup.string().required("Album is required"),
    artist: Yup.string().required("Artist is required"),
    genre: Yup.string().required("Genre is required"),
  });

  const handleSubmit = (values: submitTypes, { setSubmitting }: any) => {
    props.handleSubmit(values);
    setSubmitting(false);
  };

  return (
    <div style={{ position: "relative" }}>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <Flex
            style={{
              position: "relative",
              top: 0,
              left: 0,
              backgroundColor: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              {errorMessage && <div>{errorMessage}</div>}
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <Field type="text" name="title" placeholder="Title" />
                    <Field type="text" name="album" placeholder="Album" />
                    <Field type="text" name="artist" placeholder="Artist" />
                    <Field type="text" name="genre" placeholder="Genre" />
                    <Field
                      type="text"
                      name="songId"
                      placeholder="songId"
                      disabled
                    />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <button
                        onClick={handleCloseModal}
                        style={{
                          backgroundColor: "gray",
                          marginTop: "10px",
                          width: "48%",
                        }}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        style={{
                          backgroundColor: "green",
                          marginTop: "10px",
                          width: "48%",
                        }}
                        disabled={isSubmitting}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Flex>
        </Modal>
      )}
    </div>
  );
};
