import React from "react";
import axios from "axios";
import "./salesListPage.css";
import { AdminHeader } from "../../components/adminHeader/adminHeader";


export const SalesListPage = () => {


  const [Sales, setSales] = React.useState([{}]);

  const baseURL = "/api/sales";

  React.useEffect(() => {
    async function getData() {
      await axios.get(baseURL).then((response) => {
        console.log(response.data)
        setSales(response.data);
      });
    }
    getData();
  }, []);

  let total = 0


  for (let i = 0; i < Sales.length; i++) {

    total = total + Sales.at(i).valor
  }


  return (
    <div>
      <AdminHeader />
      <div className="main-container">
        <table className="table-salesList">
          <tr>
            <th className="th-salesList">Fecha</th>
            <th className="th-salesList">IdVenta</th>
            <th className="th-salesList">Valor</th>
          </tr>
          {Sales?.map((worth) => (
            <tr>
              <td className="th-salesList">{worth.fecha}</td>
              <td className="th-salesList">{worth.idVenta}</td>
              <td className="th-salesList">{worth.valor}</td>
            </tr>
          ))}
          <tr>
            <th className="th-salesList"></th>
            <th className="th-salesList">Total</th>
            <th className="th-salesList">{total}</th>
          </tr>
        </table>
      </div>
    </div>
  );
};
