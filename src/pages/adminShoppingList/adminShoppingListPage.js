import React from "react";
import "./adminShoppingListPage.css";
import { AdminHeader } from "../../components/adminHeader/adminHeader";

export const AdminShoppingListPage = () => {
  return (
    <div>
      <AdminHeader/>
      <div className="main-container">
        <h1 className="h1-adminShoppingList">Admin Shopping List Page</h1>
      </div>
    </div>
  );
};
