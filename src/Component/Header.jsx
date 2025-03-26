import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSearch,
    faBell,
    faChevronDown
  } from '@fortawesome/free-solid-svg-icons';


function Header() {
    return(
        <div className="header-component">
             <h1>Dashboard<FontAwesomeIcon icon={faSearch} className="search-icon" /></h1>
             <div className="header-logo">
              <a href="#"><FontAwesomeIcon icon={faBell} /></a>
              <img src="./girl.jpg" alt="girl-img"/>
              <h2>Mahima Awashti</h2>
              <a href="#"><FontAwesomeIcon icon={faChevronDown} /></a>
             </div>
        </div>
    )
}
export default Header;