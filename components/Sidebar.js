import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Sidebar.module.css";

const Sidebar = () => (
    <section id="intro">
      <Link href="/">
        <div className={styles.logo}>
          <Image src="/me.jpg" alt="" width={350} height={350} />
        </div>
      </Link>

      <header>
        <h2>ROEL DUIJSINGS</h2>
        <p>
          <a href="mailto:roel.duijsings@hotmail.com">roel.duijsings@hotmail</a>
        </p>
      </header>
    </section>
  );

export default Sidebar;
