import Nav from "./Nav";
import Header from "./Header";
import styles from "../styles/Layout.module.css";
import Meta from "./Meta";

// general layout for all pages
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
