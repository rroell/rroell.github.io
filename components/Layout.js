import Header from "./Header";
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
      {/* <Header /> */}
      <Grid container component="main" sx={{ height: "100vh" }}>
        {/* <CssBaseline /> */}
        <Sidebar />

        <div className={styles.container}>
          <main className={styles.main}>{children}</main>
        </div>
      </Grid>
    </>
  );
};

export default Layout;
