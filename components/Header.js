import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Roel</span> Duijsings
      </h1>
      <p className={headerStyles.description}>
        This is the personal website of Roel Duijsings
      </p>
    </div>
  );
};

export default Header;
