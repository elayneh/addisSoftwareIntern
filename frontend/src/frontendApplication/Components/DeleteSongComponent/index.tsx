import { useNavigate, useParams } from "react-router-dom";
import { DeleteSongTypeProps, submitTypes } from "./types";
import { Card, Typography } from "@mui/material";

export const DeleteSong = (props: DeleteSongTypeProps) => {
  const navigate = useNavigate();
  const { songId } = useParams();
  const initialValues = {
    songId: String(songId),
  };
  const handleCancelDelete = () => {
    navigate("/songlist", { state: { key: Math.random() } });
  };

  const handleSubmit = (values: submitTypes) => {
    props.handleSubmit(values);
    navigate("/songlist", { state: { key: Math.random() } });
  };

  return (
    <Card
      sx={{
        position: "fixed",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "8px",
        marginTop: "15%",
        width: "50%",
        left: "25%",
      }}
    >
      <Typography
        style={{
          textAlign: "center",
          alignItems: "center",
          alignContent: "center",
          margin: "auto",
        }}
      >
        Are you sure you want to delete the song?
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={handleCancelDelete}
          style={{
            backgroundColor: "gray",
            marginTop: "20px",
            width: "20%",
            marginRight: "4%",
          }}
        >
          Cancel
        </button>
        <button
          onClick={() => handleSubmit(initialValues)}
          style={{
            backgroundColor: "red",
            marginTop: "20px",
            width: "20%",
          }}
        >
          Delete
        </button>
      </div>
    </Card>
  );
};
