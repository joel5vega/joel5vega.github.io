import React from "react";
import Certificado from "./Certificado";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "max-content",
  bgcolor: "var(--color-bg)",
  border: "2px solid var(--color-primary)",
  boxShadow: 24,
  p: 4
};

function EducationItem(props) {
  ////
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(link);
  const handleClose = () => setOpen(false);
  const { name, link } = props.data;
  return (
    <div>
      {link ? (
            <h2 className="certificado" onClick={handleOpen}>{props.logo}</h2>
      ) : (
        <h2 className="nocertificado">{props.logo}</h2>
      )}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            sx={{ mt: 2, color: "var(--color-primary)" }}
          >
            {link && <Certificado link={link} name={name} />}

            {name}
          </Typography>
          <Typography id="modal-modal-title" variant="h2" component="h1">
            {/* Text in a modal */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default EducationItem;
