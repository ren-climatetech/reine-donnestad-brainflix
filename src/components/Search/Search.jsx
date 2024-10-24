import "./Search.scss";

import searchIcon from "/assets/Images/Icons/search.svg";
import profileImage from "/assets/Images/Images/Mohan-muruge.jpg";

function Search() {
    return (
        <div className="header__search">
        <div className="header__search--box">
          <img className="header__search--icon" src={searchIcon} />
          <h3 class="header__search--text">Search</h3>
          </div>
        <div>
           <img className="header__icon--profile" src={profileImage} /></div>
      </div>
    );
}

export default Search;