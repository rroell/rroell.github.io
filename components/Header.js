import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Roels</span> News
      </h1>
      <p className={headerStyles.description}>
        Stay up to date with all news about Roel Duijsings
      </p>
    </div>
  );
};

export default Header;
