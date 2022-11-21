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
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png" id="icon" alt="User Icon" />
            </div>
            <form>  
              
              <label id="user" >Username</label>
              <input type="text" id="login" className="fadeIn second" name="login" placeholder="mail.com@gmail.com" />
              <label id="user">Password</label>
              <input type="password" id="login" className="fadeIn third" name="login" placeholder="********" />
              <input type="submit" className="fadeIn fourth" value="Log In" />
            </form>
            <div id="formFooter">
              <a className="underlineHover" href="#">Forgot Password?</a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
