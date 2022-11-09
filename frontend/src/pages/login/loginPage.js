import React from "react";
import axios from "axios";
import "./loginPage.css";

export const LoginPage = () => {
  const [post, setPost] = React.useState(null);

  const baseURL = "/api/customers";

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
      console.log(post)
    });
  }, []);

  return (
    <div>
      <div className="main-container">
        <h1 className="h1-login">LOGIN PAGE</h1>
      </div>
    </div>
  );
};
