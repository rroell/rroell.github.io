import Link from "next/link";
import React from "react";

const Index = () => (
  <article className="title">
    <h1 className="notop">Welcome to my personal website</h1>

    <p>
      Hi, I'm Roel Duijsings, a passionate student MSc Artificial Intelligence
      based in Nijmegen, The Netherlands. I specialize in Machine Learning and
      Data Science. I am deeply passionate about designing and developing
      innovative products that have a positive impact on our society and promote
      ecological sustainability.
    </p>

    <p>
      This website is a platform where I share my projects, research and some
      fun stuff. Feel free to browse through my work and know more about me.
    </p>

    <p>
      If you're interested in my work or wish to collaborate, don't hesitate to{" "}
      <Link href="/contact">contact</Link> me.
    </p>
  </article>
);

export default Index;
