import React from "react";
import "./salesListPage.css";
import { AdminHeader } from "../../components/adminHeader/adminHeader";

export const SalesListPage = () => {
  return (
    <div>
      <AdminHeader/>
      <div className="main-container">
        <h1 className="h1-salesList">Sales List Page</h1>
      </div>
    </div>
  );
};
