import Link from "next/link";
import React from "react";

// import Main from "../layouts/Main";
const Index = () => (
  <div>
    <article className="title">
      <h2>
        <Link href="/">About this site</Link>
      </h2>
      <p>
        Welcome to my website. Please feel free to read more{" "}
        <Link href="/about">about me</Link>, or you can check out my{" "}
        <Link href="/resume">resume</Link>,{" "}
        <Link href="/projects">projects</Link>, view{" "}
        <Link href="/stats">site statistics</Link>, or{" "}
        <Link href="/contact">contact</Link> me.
      </p>
    </article>
  </div>
);

export default Index;
