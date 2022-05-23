import React, { useState } from "react";
import "./navbar.css";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { HiOutlineViewList } from "react-icons/hi";
import Search from "../Search/Search";



function Navbar() {
  const [search, setSearch] = useState(false);

  return (
    <div className="all-nav">
      <div className="navbars">
        <img
          className="logo-coffee-factory"
          src="../../img/coffeeFactory.png"
          alt="logo"
        />
        <div className="main-menu">
          <div className="menu-item">
            <a href="/">Sản phẩm</a>
            <a href="/">Tin tức</a>
            <a href="/">Thông tin ưu đãi</a>
            <a href="/">Thông tin cửa hàng</a>
            <a href="/">Thông tin liên hệ</a>
          </div>

          <div className="icons">
            <button href="/">
              <BiSearchAlt className="icon-search" 
                onClick={() => setSearch(prev => !prev)}
              />
            </button>
            <button href="/">
              <MdOutlineLocalGroceryStore className="icon-store" />
            </button>
            <button href="/">
              <HiOutlineViewList className="icon-list" />
            </button>
          </div>
        </div>
      </div>

      {search ? <Search /> : ""}
    </div>
  );
}

export default Navbar;
