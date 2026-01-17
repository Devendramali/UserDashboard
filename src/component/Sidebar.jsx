import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
    <div className="sidebar">

    
    <div className="logo">
        <img src="./basizlogowhite.png" alt="" />
    </div>
    <ul className="nav nav-pills flex-column ">
      <li className="nav-item">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Dashboard
        </NavLink>
      </li>
            {/* <li className="nav-item">
        <NavLink
          to="#!"
          className={({ isActive }) =>
            isActive ? "nav-link " : "nav-link"
          }
        >
          User List
        </NavLink>
      </li> */}

      <li className="nav-item">
        <NavLink
          to="#!"
          className={({ isActive }) =>
            isActive ? "nav-link " : "nav-link"
          }
        >
          Profile
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink
          to="#!"
          className={({ isActive }) =>
            isActive ? "nav-link " : "nav-link"
          }
        >
          Contact
        </NavLink>
      </li>

    </ul>
    </div>
    </>
  );
};

export default Sidebar;
