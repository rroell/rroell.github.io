import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "Roel Duijsings",
  keywords:
    "web development, programming, Duijsings, student, Radboud University, Artificial Intelligence, Data Science, Software Product",
  description: "This is the personal website of Roel Duijsings",
};

export default Meta;
