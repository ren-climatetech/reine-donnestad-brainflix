import "./Search.scss";

import searchIcon from "../../assets/Images/Icons/search.svg";
import profileImage from "../../assets/Images/Images/Mohan-muruge.jpg";

function Search() {
  return (
    <>
      <section className="header__search">
        <div className="header__search-box">
          <img className="header__search-icon" src={searchIcon} />
          <input className="header__search-text" placeholder="Search" />
        </div>
        <div className="header__search-profileposition">
          <img className="header__search-profile" src={profileImage} />
        </div>
      </section>
    </>
  );
}

export default Search;
