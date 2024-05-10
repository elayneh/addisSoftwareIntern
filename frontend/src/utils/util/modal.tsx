import { Card } from "@mui/material";
import React, { ReactNode } from "react";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  return (
    <Card
      sx={{
        top: 8,
        width: "100vw",
        height: "100vh",
        backgroundColor: "",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        {children}
      </div>
    </Card>
  );
};

export default Modal;
