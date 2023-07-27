import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Icon } from "@mui/material";
import styles from "../styles/Nav.module.css";

const pages = ["about", "cv", "contact"];

function Navigation() {

  const handleCloseNavMenu = (e) => {
    console.log(e.target);
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      {/* Computer screen */}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* LOGO */}
          <a component="a" href="/" className={styles["logo"]}>
            <Icon>
              <img
                // className={styles.logo}
                src="network.png"
                width={25}
                height={25}
              />
            </Icon>

            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Georgia",
                fontWeight: 400,
                letterSpacing: ".2rem",
                color: "inherit",
                textDecoration: "none",
                paddingLeft: ".6rem",
              }}
            >
              ROEL DUIJSINGS
            </Typography>
          </a>

          {/* Smartphone screen */}

          {/* Title */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ROEL DUIJSINGS
          </Typography>

          {/* NavMenu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                className={styles["button"]}
                key={page}
                href={"/" + page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  textAlign: "center",
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;
