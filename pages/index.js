import Head from "next/head";
import ArticleList from "../components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>Roel's Website</title>
        <meta name="keywords" content="web development, programming, Roel" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

// get static articles from the internet as an example
export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  const articles = await res.json();
  return {
    props: { articles },
  };
};
