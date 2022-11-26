import { IconButton } from "@mui/material";
import Link from "next/link";
import Meta from "../components/Meta";
import DirectionsIcon from "@mui/icons-material/Directions";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const contact = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Meta title="Roel Duijsings - Contact" />
      <h1>Contact details</h1>
      <a href="mailto:roel.duijsings@hotmail.com">
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <AlternateEmailIcon />
        </IconButton>
        Email: roel.duijsings@hotmail.com
      </a>
      <br></br>
      <br></br>
      <a href="tel:+31645650926">
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <ContactPhoneIcon />
        </IconButton>{" "}
        Phone: +31645650926{" "}
      </a>
      <br></br>
      <br></br>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Nijmegen"
        target="_blank"
      >
        <IconButton color="primary" sx={{ p: "10px" }} aria-label="directions">
          <DirectionsIcon />
        </IconButton>
        Nijmegen, The Netherlands
      </a>
    </div>
  );
};

export default contact;
