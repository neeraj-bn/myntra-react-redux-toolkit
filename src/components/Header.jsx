import React from 'react'
import { BsFillPersonFill } from "react-icons/bs";
import { FaGrinHearts, FaShoppingBag } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Header = () => {
  const bag = useSelector(store => store.bag)
  console.log("bag contains", bag)
  return (
    <header>
      <div className="logo_container">
        <Link to="/"><img className="myntra_home" src="images/myntra_logo.webp" alt="Myntra Home" /></Link>
      </div>
      <nav className="nav_bar">
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Kids</a>
        <a href="#">Home & Living</a>
        <a href="#">Beauty</a>
        <a href="#">Studio <sup>New</sup></a>
      </nav>
      <div className="search_bar">
        <span className="material-symbols-outlined search_icon">search</span>
        <input className="search_input" placeholder="Search for products, brands and more" />
      </div>
      <div className="action_bar">
        <div className="action_container"><BsFillPersonFill />


          <span className="action_name">Profile</span>
        </div>

        <div className="action_container"><FaGrinHearts />

          <span className="action_name">Wishlist</span>
        </div>

        <Link className="action_container" to="/bag">
          <FaShoppingBag />

          <span className="action_name">Bag</span>
          <span className="bag-item-count">{bag.length}</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
