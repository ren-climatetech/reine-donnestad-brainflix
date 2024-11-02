import "./Header.scss";
import { Link } from 'react-router-dom';
import logo from "../../assets/Images/Logo/BrainFlix-logo.svg";

function Header() {
  return (
    <>
    <Link to="/">
        <img className="header__logo" src={logo} alt="brainflix__logo" />
        </Link>
    </>
  );
}
export default Header;
