import React from "react";
import { Outlet } from "react-router-dom";

const SharedProductLayout = () => {
  return (
    <section className="section">
      <h3>Products</h3>
      <Outlet />
    </section>
  );
};

export default SharedProductLayout;
