import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <img src="/logo.png" alt="Kite" style={{ height: '30px' }} />
      </div>
      <div className="topbar-center">
        <Link to="/">Dashboard</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/holdings">Holdings</Link>
        <Link to="/positions">Positions</Link>
        <Link to="/funds">Funds</Link>
        <Link to="/apps">Apps</Link>
      </div>
      <div className="topbar-right">
        <span className="user-id">Guest User</span>
      </div>
    </div>
  );
};

export default TopBar;
