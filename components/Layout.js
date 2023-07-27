import styles from "../styles/Layout.module.css";
import Meta from "./Meta";
import Navigation from "./Navigation";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";

// general layout for all pages
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navigation />
      <Grid
        container
        component="main"
        sx={{ height: "100vh", marginTop: "40px"}}
      >
        <Grid item xs={0.5} />

        <Grid item xs={2}>
          <Sidebar />
        </Grid>

        <Grid item xs={8}>
          <div className={styles.container}>
            <main className={styles.main}>{children}</main>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Layout;
