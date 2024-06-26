/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Modal from "../../../utils/util/modal";
import { Flex } from "../../basicStyles/Flex";
import { UpdateSongTypeProps } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { selectError } from "../../Pages/UpdateSong/slice/selector";
import { selectSong } from "../../Pages/SongComponentPage/slice/selector";
import { useSongPageSlice } from "../../Pages/SongComponentPage/slice";
import { Card } from "@mui/material";

export const UpdateSong = (props: UpdateSongTypeProps) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);

  const { songId } = useParams();
  const handleCloseModal = () => {
    setShowModal(!showModal);
    navigate("/songlist");
  };
  const dispatch = useDispatch();
  const { actions } = useSongPageSlice();

  useEffect(() => {
    dispatch(actions.getSong());
  }, []);
  const errorMessage = useSelector(selectError);
  const songToBeUpdated = useSelector(selectSong);
  const selectedSong = songToBeUpdated.find(
    (song) => String(song.songId) === String(songId)
  );
  console.log("Song: ", selectedSong);

  const initialValues = {
    album: selectedSong && selectedSong.album,
    artist: selectedSong && selectedSong.artist,
    genre: selectedSong && selectedSong.genre,
    title: selectedSong && selectedSong.title,
    songId: String(songId),
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    album: Yup.string().required("Album is required"),
    artist: Yup.string().required("Artist is required"),
    genre: Yup.string().required("Genre is required"),
  });

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    props.handleSubmit(values);
    setSubmitting(false);
    navigate("/songlist");
  };

  return (
    <Flex>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <Card>
            <div>
              {errorMessage && <div>{errorMessage}</div>}
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form
                    style={{
                      // width: "500px",
                    }}
                  >
                    <Flex
                      flexDirection={"column"}
                      style={{
                        gap: "10px",
                      }}
                    >
                      <Flex>
                        <Field
                          type="text"
                          name="title"
                          placeholder="Title"
                          style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "4px",
                            zIndex: 9999,
                          }}
                        />
                      </Flex>
                      <Flex>
                        <Field
                          type="text"
                          name="album"
                          placeholder="Album"
                          style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "4px",
                            zIndex: 9999,
                          }}
                        />
                      </Flex>
                      <Flex>
                        <Field
                          type="text"
                          name="artist"
                          placeholder="Artist"
                          style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "4px",
                            zIndex: 9999,
                          }}
                        />
                      </Flex>
                      <Flex>
                        <Field
                          type="text"
                          name="genre"
                          placeholder="Genre"
                          style={{
                            width: "100%",
                            padding: "10px",
                            borderRadius: "4px",
                            zIndex: 9999,
                          }}
                        />
                      </Flex>
                    </Flex>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        zIndex: 9999,
                      }}
                    >
                      <button
                        onClick={handleCloseModal}
                        type="button"
                        style={{
                          backgroundColor: "gray",
                          marginTop: "10px",
                          width: "48%",
                          padding: "10px",
                          borderRadius: "4px",
                          zIndex: 9999,
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
                          padding: "10px",
                          borderRadius: "4px",
                          zIndex: 9999,
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
          </Card>
        </Modal>
      )}
    </Flex>
  );
};
