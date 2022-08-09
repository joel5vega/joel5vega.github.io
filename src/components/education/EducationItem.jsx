import React from "react";
import { GiDiploma } from "react-icons/gi";
import Certificado from "./Certificado";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
  const { id, name, link } = props.data;
  return (
    <div>
      {link ? (
        <>
          <Button onClick={handleOpen}>
            <h2 >{props.logo}</h2>{" "}
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              {link && (
                <a className="certificado" href={link} target="__blank">
                  <Certificado link={link} name={name} />
                </a>
              )}
              <Typography
                id="modal-modal-title"
                sx={{ mt: 2, color: "var(--color-primary)" }}
              >
                {name}
              </Typography>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {/* Text in a modal */}
              </Typography>
            </Box>
          </Modal>
        </>
      ) : (
        <h2>{props.logo}</h2>
      )}
    </div>
  );
}

export default EducationItem;
