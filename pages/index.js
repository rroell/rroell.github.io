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

// get static articles from the data.js file using API
export const getStaticProps = async () => {
  const res = await fetch(`${server}/data.js`);
  const articles = await res.json();
  return {
    props: { articles },
  };
};

// // get static articles from the internet as an example
// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();
//   return {
//     props: { articles },
//   };
// };
