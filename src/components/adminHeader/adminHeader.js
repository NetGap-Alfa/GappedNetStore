import React from "react";
import { useNavigate } from 'react-router-dom';
import "./adminHeader.css";
import { Button } from "../button/button";

export const AdminHeader = () => {
  const navigate = useNavigate();
  return (
<>

<nav className="navbar navbar-expand-sm navbar-dark bg-primary">
  <div className="container-fluid justify-content-end">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-1">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href={'/admin/shoppingList'} >Lista productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={'/admin/modifyProducts'} >Modificar productos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={'/admin/salesList'}>Lista ventas</a>
        </li>
      </ul>
      

    </div>
    </div>
    </nav>
    </>
  );
};