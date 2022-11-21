import { useNavigate } from "react-router-dom";
import React from "react";
import { Button } from "../../components/button/button";
import "./loginPage.css";

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="main-container">
        <Button
          text="Vista ADMIN"
          onClickFunc={() => navigate("/admin/shoppingList")}
        />
        <Button
          text="Vista CLIENTE"
          onClickFunc={() => navigate("/client/shoppingList")}
        />
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <img
                src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png"
                id="icon"
                alt="User Icon"
              />
            </div>
            <form>
              <label id="user">Username</label>
              <input
                type="text"
                id="login"
                className="fadeIn second"
                name="login"
                placeholder="mail.com@gmail.com"
              />
              <label id="user">Password</label>
              <input
                type="password"
                id="login"
                className="fadeIn third"
                name="login"
                placeholder="********"
              />
              <input type="submit" className="fadeIn fourth" value="Log In" />
            </form>
            <div id="formFooter">
              <a className="underlineHover" href="#">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
