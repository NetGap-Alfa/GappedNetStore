import React from "react";
import { useNavigate } from 'react-router-dom';
import "./adminHeader.css";
import { Button } from "../button/button";

export const AdminHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="client-header-container">
      <h2 className="client-header-label">Vista Administrador</h2>
      <div className="header-button-container">
        <Button text="Lista productos" onClickFunc={() => navigate('/admin/shoppingList')}/>
      </div>
      <div className="header-button-container">
        <Button text="Modificar productos" onClickFunc={() => navigate('/admin/modifyProducts')}/>
      </div>
      <div>
        <Button text="Lista ventas" onClickFunc={() => navigate('/admin/salesList')}/>
      </div>
    </div>
  );
};