import "./Header.scss";
import logo from "../../assets/Images/Logo/BrainFlix-logo.svg"

function Header() {
  return (
    <>
        <img className="header__logo" src={logo} alt="brainflix__logo" />
    </>
  );
}
export default Header;
