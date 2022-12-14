import React from "react";
import { NavLink } from "react-router-dom";
import { PATHS } from "../routes/paths";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="drawer">
        <input
          onChange={(e) => console.log(e.target.checked)}
          id="toggle-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar bg-base-300">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="toggle-drawer"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">Navbar Title</div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* <!-- Navbar menu content here --> */}
                <li>
                  <NavLink to="/">Navbar Item 1</NavLink>
                </li>
                <li>
                  <NavLink to="/">Navbar Item 2</NavLink>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Page content here --> */}
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="toggle-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            <li>
              <NavLink to={PATHS.employeeDashboard}>Sidebar Item 1</NavLink>
            </li>
            <li>
              <NavLink to={PATHS.dashboard}>Sidebar Item 2</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
