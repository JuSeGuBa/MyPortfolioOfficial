import "../styles/Header.css";

const Header = () => {
  return (
    <header id="headerMe">
      <div className="name">
        <h1 className="titulo-3d">Full Stack</h1>
      </div>
      <div className="logo">
        <img
          src="/public/sinfondo(logo).png"
          alt="logo large"
          className="circle"
        />
      </div>
      <div className="lastName">
        <h1 className="titulo-3d">Developer</h1>
      </div>
    </header>
  );
};

export default Header;
