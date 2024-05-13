/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";
import { AddSongTypeProps } from "./types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { selectError, selectSong } from "../../Pages/addSong/slice/selector";

export const AudioUploader = (props: AddSongTypeProps) => {
  const song = useSelector(selectSong);
  const navigate = useNavigate();
  const errorMessage = useSelector(selectError);
  const [fileValue, setFileValue] = useState<File | null>(null);

  const initialValues = {
    songId: String(song.length + 1),
    album: "",
    artist: "",
    genre: "",
    title: "",
    file: null,
  };

  const handleCancelAddSong = () => {
    navigate("/songlist");
  };
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setFileValue(file);
    }
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    album: Yup.string().required("Album is required"),
    artist: Yup.string().required("Artist is required"),
    genre: Yup.string().required("Genre is required"),
  });

  const handleSubmit = (values: any, { setSubmitting }: any) => {
    if (fileValue) {
      values.file = fileValue;
    }
    props.handleSubmit(values);
    setSubmitting(false);
    navigate("/songlist", { state: { key: Math.random() } });
  };

  return (
    <Card
      sx={{
        borderRadius: "10px",
        borderBottom: "100px",
        backgroundColor: "#414A4C",
        width: "70%",
        height: "500px",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {errorMessage && <div>{errorMessage}</div>}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form
            style={{
              marginTop: "50px",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ marginBottom: "10px" }}>
                <Field
                  type="text"
                  name="title"
                  placeholder="Title"
                  style={{ width: "100%", padding: "10px", fontSize: "16px" }}
                />
                <ErrorMessage name="title" component="div" />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <Field
                  type="text"
                  name="album"
                  placeholder="Album"
                  style={{ width: "100%", padding: "10px", fontSize: "16px" }}
                />
                <ErrorMessage name="album" component="div" />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <Field
                  type="text"
                  name="artist"
                  placeholder="Artist"
                  style={{ width: "100%", padding: "10px", fontSize: "16px" }}
                />
                <ErrorMessage name="artist" component="div" />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <Field
                  type="text"
                  name="genre"
                  placeholder="Genre"
                  style={{ width: "100%", padding: "10px", fontSize: "16px" }}
                />
                <ErrorMessage name="genre" component="div" />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <input
                  onChange={handleUpload}
                  accept="audio/*, video/*"
                  type="file"
                  name="file"
                  style={{ width: "100%", padding: "10px", fontSize: "16px" }}
                />
                <ErrorMessage name="file" component="div" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <button
                onClick={handleCancelAddSong}
                style={{
                  backgroundColor: "gray",
                  width: "48%",
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "48%",
                  backgroundColor: "green",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Upload
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Card>
  );
};
