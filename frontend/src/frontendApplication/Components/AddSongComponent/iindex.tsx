// import React, { useState } from "react";
// import { SongProps } from "./types";
// import { Flex } from "../../basicStyles/Flex";
// import Modal from "../../../utils/util/modal";

// export const AudioUploader: React.FC = () => {
//   //
//   const [songs, setSongs] = useState<SongProps[]>([
//     {
//       id: "1",
//       title: "Song 1",
//       artist: "tilahun1",
//       album: "album1",
//       genre: "genre1",
//     },
//     {
//       id: "2",
//       title: "Song 1",
//       artist: "tilahun2",
//       album: "album2",
//       genre: "genre2",
//     },
//     {
//       id: "3",
//       title: "Song 1",
//       artist: "tilahun3",
//       album: "album3",
//       genre: "genre3",
//     },
//     {
//       id: "4",
//       title: "Song 1",
//       artist: "tilahun4",
//       album: "album4",
//       genre: "genre4",
//     },
//   ]);
//   //
//   const [selectedFile, setSelectedFile] = useState<File | null>(null);
//   const [songTitle, setSongTitle] = useState("");
//   const [songGenre, setSongGenre] = useState("");
//   const [songAlbum, setSongAlbum] = useState("");
//   const [songArtist, setSongArtist] = useState("");
//   const [isUploadClicked, setIsuploadClicked] = useState(false);
//   const [showModal, setShowModal] = useState(true);

//   // const dispatch = useDispatch();
//   const handleCloseModal = () => {
//     setShowModal(!showModal);
//     window.location.reload();
//   };
//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     setSelectedFile(file || null);
//   };

//   const addSong = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!songTitle.trim()) return;
//     const newSong: SongProps = {
//       id: String(songs.length + 1),
//       title: songTitle,
//       genre: songGenre,
//       album: songAlbum,
//       artist: songArtist,
//     };
//     // dispatch(addSong);
//     setSongs([...songs, newSong]);
//     setSongTitle("");
//     setSongAlbum("");
//     setSongArtist("");
//     setSongGenre("");
//   };

//   const handleUpload = () => {
//     if (selectedFile) {
//       console.log("Uploading file:", selectedFile);
//     } else {
//       console.log("No file selected.");
//     }
//   };

//   return (
//     <div style={{ position: "relative", height: "100vh" }}>
//       {isUploadClicked && selectedFile ? (
//         <div>
//           {showModal && (
//             <Modal onClose={handleCloseModal}>
//               <Flex
//                 style={{
//                   position: "relative",
//                   top: 0,
//                   left: 0,
//                   backgroundColor: "white",
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   flexDirection: "column",
//                 }}
//               >
//                 {selectedFile && (
//                   <div style={{ color: "black" }}>
//                     Selected File: {selectedFile.name}
//                   </div>
//                 )}
//                 <form
//                   onSubmit={addSong}
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                   }}
//                 >
//                   <input
//                     type="text"
//                     value={songTitle}
//                     onChange={(e) => setSongTitle(e.target.value)}
//                     placeholder="Song title"
//                     style={{ marginBottom: "10px" }} // Add margin between input fields
//                   />
//                   <input
//                     type="text"
//                     value={songArtist}
//                     onChange={(e) => setSongArtist(e.target.value)}
//                     placeholder="Song artist"
//                     style={{ marginBottom: "10px" }} // Add margin between input fields
//                   />
//                   <input
//                     type="text"
//                     value={songGenre}
//                     onChange={(e) => setSongGenre(e.target.value)}
//                     placeholder="Song Genre"
//                     style={{ marginBottom: "10px" }} // Add margin between input fields
//                   />
//                   <input
//                     type="text"
//                     value={songAlbum}
//                     onChange={(e) => setSongAlbum(e.target.value)}
//                     placeholder="Song album"
//                     style={{ marginBottom: "10px" }} // Add margin between input fields
//                   />
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       width: "100%",
//                     }}
//                   >
//                     <button
//                       onClick={handleCloseModal}
//                       style={{
//                         backgroundColor: "gray",
//                         marginTop: "10px",
//                         width: "48%", // Adjust width as needed
//                       }}
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       style={{
//                         backgroundColor: "green",
//                         marginTop: "10px",
//                         width: "48%", // Adjust width as needed
//                       }}
//                     >
//                       Submit
//                     </button>
//                   </div>
//                 </form>
//               </Flex>
//             </Modal>
//           )}
//         </div>
//       ) : (
//         <div>
//           <input
//             type="file"
//             accept="audio/*, video/*"
//             onChange={handleFileChange}
//           />
//           <button
//             onClick={() => {
//               handleUpload();
//               setIsuploadClicked(true);
//             }}
//           >
//             Upload
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };
