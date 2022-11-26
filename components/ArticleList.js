import ArticleItem from "./ArticleItem";
import articleStyles from "../styles/Article.module.css";
import { v4 as uuidv4 } from 'uuid';

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem key={uuidv4} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
