import React from "react";
import "./salesListPage.css";
import { AdminHeader } from "../../components/adminHeader/adminHeader";
import { sellsExample } from "../../data/data";

export const SalesListPage = () => {
  return (
    <div>
      <AdminHeader/>
      <div className="main-container">
        <h1 className="h1-salesList">Sales List Page</h1>

        <table className="table-salesList">
          <tr>
            <th className="th-salesList">Fecha</th>
            <th className="th-salesList">IdVenta</th>
            <th className="th-salesList">Valor</th>
          </tr>
          {sellsExample.ventas.map((worth) => (

            <tr>
              <td className="th-salesList">{worth.fecha}</td>
              <td className="th-salesList">{worth.idVenta}</td>
              <td className="th-salesList">{worth.valor}</td>
            </tr>
            
            
            
          ))}
           <tr>
            <th className="th-salesList"></th>
            <th className="th-salesList">Total</th>
            <th className="th-salesList">95</th>
          </tr>
          

        </table>
       
            <script>
              
            </script>


      </div>

     
    </div>
  );
};
