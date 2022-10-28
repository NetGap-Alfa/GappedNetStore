import React from "react";
import "./clientShoppingListPage.css";
import { ClientHeader } from "../../components/clientHeader/clientHeader";

export const ClientShoppingListPage = () => {
  return (
    <div>
      <ClientHeader/>
      <div className="main-container">
        <h1 className="h1-clientShoppingList">Client Shopping List Page</h1>
      </div>
    </div>
  );
};
