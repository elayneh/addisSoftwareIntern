import { Flex } from "../../basicStyles/Flex";
import { Card, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useNavigate } from "react-router-dom";
import { FilteredSongComponentProps } from "./types";

export const FilterSongComponent = (props: FilteredSongComponentProps) => {
  const navigate = useNavigate();

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
          Filter Result
        </Typography>
      </Flex>
      <Flex>
        <table
          style={{ width: "100%", tableLayout: "fixed", maxWidth: "100%" }}
        >
          <thead>
            <tr>
              <th style={{ width: "40px" }}></th>
              <Typography style={{ marginLeft: "40px", marginRight: "20px" }}>
                <th>Title</th>
              </Typography>
              <th style={{ width: "200px" }}>Actions</th>
            </tr>
          </thead>
          <tbody style={{ backgroundColor: "black" }}>
            {props.filteredSong &&
              props.filteredSong.map((filteredSong, index) => (
                <tr key={index}>
                  <button
                    onClick={() => handlePlayButtonClick(filteredSong.songId)}
                  >
                    <td>
                      <PlayArrowIcon />
                    </td>
                  </button>
                  <td style={{ paddingLeft: "20px", color: "white" }}>
                    {filteredSong.title}
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
                        onClick={() =>
                          handleDeleteButtonClick(filteredSong.songId)
                        }
                      >
                        <DeleteIcon />
                      </button>
                      <span style={{ margin: "0 5px" }}></span>{" "}
                      <button
                        onClick={() =>
                          handleEditButtonClick(filteredSong.songId)
                        }
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
    </Card>
  );
};
