import React from "react";
import { useNavigate } from 'react-router-dom';
import "./clientHeader.css";
import { Button } from "../button/button";

export const ClientHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="client-header-container">
      <h2 className="client-header-label">Vista Cliente</h2>
      <div className="header-button-container">
        <Button text="Lista productos" onClickFunc={() => navigate('/client/shoppingList')}/>
      </div>
      <div>
        <Button text="Carrito" onClickFunc={() => navigate('/client/shoppingCart')}/>
      </div>
    </div>
  );
};
