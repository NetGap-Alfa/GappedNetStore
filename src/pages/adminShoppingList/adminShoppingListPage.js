import React from "react";
import "./adminShoppingListPage.css";
import { AdminHeader } from "../../components/adminHeader/adminHeader";
import './css/animate.css'
import './css/icomoon.css'
import './css/bootstrap.css'
import './css/owl.carousel.min.css'
import './css/owl.theme.default.min.css'
import './css/style.css'


export const AdminShoppingListPage = () => {
  return (
    <div>
      <AdminHeader />

      <div id="fh5co-page">


        <div id="fh5co-main">

          <div className="fh5co-narrow-content">
            <h2 className="fh5co-heading animate-box" data-animate-effect="fadeInLeft">Productos </h2>
            <div className="row animate-box" data-animate-effect="fadeInLeft">
              <div className="clearfix visible-sm-block"></div>

              <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                <a href="work.html">
                  <img src={require('./images/work_1.jpg')} alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive" />
                  <h3 className="fh5co-work-title">Work Title Here</h3>
                  <p>Illustration, Branding</p>
                </a>
              </div>
              <div className="clearfix visible-sm-block"></div>

              <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                <a href="work.html">
                  <img src={require('./images/work_2.jpg')} alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive" />
                  <h3 className="fh5co-work-title">Work Title Here</h3>
                  <p>Web, Packaging</p>
                </a>
              </div>

              <div className="clearfix visible-sm-block"></div>
              <div className="col-md-4 col-sm-6 col-xs-6 col-xxs-12 work-item">
                <a href="work.html">
                  <img src={require('./images/work_3.jpg')} alt="Free HTML5 Website Template by FreeHTML5.co" className="img-responsive" />
                  <h3 className="fh5co-work-title">Work Title Here</h3>
                  <p>Branding, Web</p>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
  );
};
