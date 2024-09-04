import style from "./styles/NavBar.module.css";

function Navbar() {
  return (
    <div className={style.container}>
      <a href="/home">Home</a>
      <a href="/about">About</a>
    </div>
  );
}

export default Navbar;
