import React from "react";
import { Grid } from "@mui/material";
const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const Sidebar = () => {
  return (
    <section id="intro">
      <a /* class="logo" */ href="/">
        <img src={`me.jpg`} alt="" /> {/* ${PUBLIC_URL}/images/  */}
      </a>
      <header>
        <h2>Roel Duijsings</h2>
        <p>
          <a href="mailto:roel.duijsings@hotmail.com">roel.duijsings@hotmail</a>
        </p>
      </header>
    </section>
  );
};

export default Sidebar;
