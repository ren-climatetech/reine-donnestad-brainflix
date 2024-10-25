import "./Header.scss";
import logo from "../../assets/Images/Logo/BrainFlix-logo.svg"

function Header() {
  return (
    <header>
      <div>
        <img className="header__logo" src={logo} alt="brainflix__logo" />
      </div>
    </header>
  );
}
export default Header;
