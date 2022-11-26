import Head from "next/head";
import ArticleList from "../components/ArticleList";
import { server } from "../config";

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

// // get static articles from the data.js file using API
// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://github.com/rroell/rroell.github.io/blob/main/data.js`
//   );
//   const articles = await res.json();
//   return {
//     props: { articles },
//   };
// };

// get static articles from the internet as an example
export const getStaticProps = async () => {
  const res = await fetch(
    `https://github.com/rroell/rroell.github.io/blob/main/data.js`
  );
  const articles = await res.json();
  return {
    props: { articles },
  };
};
