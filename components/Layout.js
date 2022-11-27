import Header from "./Header";
import styles from "../styles/Layout.module.css";
import Meta from "./Meta";
import Navigation from "./Navigation";

// general layout for all pages
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Navigation/>
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
