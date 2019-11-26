import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [{
      name : 'Trang chủ',
      to : '/',
      isactive : true
    },
    {
      name : 'Giới thiệu',
      to : '/about',
      isactive : false
    },
    {
      name : 'Liên hệ',
      to : '/contact',
      isactive : false
    },
    {
      name : 'Sản phẩm',
      to : '/product',
      isactive : false
    }
]

const MenuLink = ({ label, to, isactive }) => {
  return (
    <Route
      path={to}
      exact={isactive}
      children={({ match }) => {
        var active = match ? "active acb" : "";
        return (
          <li className={`my-li ${active}`}>
            <Link to={to} className="nav-link">
              {label}
            </Link>
          </li>
        );
      }}
    ></Route>
  );
};

class Menu extends Component {
  render() {
    return (
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        {/* <li className="nav-item">
<NavLink  exact to="/" className="nav-link">Home</NavLink>
      </li> */}
          {this.showMenu(menus)}
      </ul>
    );
  }

  showMenu = (menus) =>{
    var result = null;
    if(menus.length > 0){
      result = menus.map((menu, index)=>{
          return (
            <MenuLink key={index} label={menu.name} to={menu.to} isactive={menu.isactive}></MenuLink>
          )
      });
    }
    return result;
  }
}
export default Menu;
