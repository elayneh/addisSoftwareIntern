/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Flex } from "../../basicStyles/Flex";
import { Card, Typography, CircularProgress } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";
import { SongComponentProps } from "./types";

export const SongComponent = (props: SongComponentProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (props.song) {
      setLoading(false);
    }
  }, []);

  const handleAddButtonClick = () => {
    navigate("/create");
  };

  const handleDeleteButtonClick = (songId: string) => {
    navigate(`/delete/${songId}`);
  };

  const handleEditButtonClick = (songId: string) => {
    navigate(`/update/${songId}`);
  };

  const handlePlayButtonClick = (songId: string) => {
    console.log("Playing the song...: ", songId);
  };

  return (
    <>
      {loading ? (
        <Flex justifyContent="center" mt={5}>
          <CircularProgress />
        </Flex>
      ) : (
        <Card
          sx={{
            position: "relative",
            backgroundColor: "white",
            padding: "0 30px 0 30px",
            borderRadius: "8px",
            width: "75%",
            marginTop: "20px",
            overflowX: "hidden",
          }}
        >
          <Flex justifyContent="center" mt={15}>
            <Typography variant="h5" color={"#C3B094"}>
              All Songs
            </Typography>
          </Flex>
          <Flex>
            <table
              style={{ width: "100%", tableLayout: "fixed", maxWidth: "100%" }}
            >
              <thead>
                <tr>
                  <th style={{ width: "40px" }}></th>
                  <Typography
                    style={{ marginLeft: "40px", marginRight: "20px" }}
                  >
                    <th>Title</th>
                  </Typography>
                  <th style={{ width: "200px" }}>Actions</th>
                </tr>
              </thead>
              <tbody style={{ backgroundColor: "black" }}>
                {props.song &&
                  props.song.map((song, index) => (
                    <tr key={index}>
                      <button
                        onClick={() => handlePlayButtonClick(song.songId)}
                      >
                        <td>
                          <PlayArrowIcon />
                        </td>
                      </button>
                      <td style={{ paddingLeft: "20px", color: "white" }}>
                        {song.title}
                      </td>
                      <td>
                        <Flex
                          style={{
                            alignContent: "center",
                            alignItems: "center",
                            marginLeft: "35%",
                          }}
                        >
                          <button
                            onClick={() => handleDeleteButtonClick(song.songId)}
                          >
                            <DeleteIcon />
                          </button>
                          <span style={{ margin: "0 5px" }}></span>{" "}
                          <button
                            onClick={() => handleEditButtonClick(song.songId)}
                          >
                            <EditIcon />
                          </button>
                        </Flex>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </Flex>
          <Flex justifyContent="flex-end">
            <button
              onClick={handleAddButtonClick}
              style={{ backgroundColor: "green" }}
            >
              Add
            </button>
          </Flex>
        </Card>
      )}
    </>
  );
};
