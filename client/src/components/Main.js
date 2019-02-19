import React, { Component } from "react";
import MainForm from "./MainForm";
import MainVideo from "./MainVideo";
import MainFeed from "./MainFeed";
import logo_makerspace_final from "./logo_makerspace_final.png";

class Main extends Component {
  render() {
    return (
      <div>
        <div className="col-12 bg-light">
          <img
            className=" d-block img-fluid"
            src={logo_makerspace_final}
            alt="First slide"
          />
        </div>

        <div className="row">
          <div className="col-12 bg-secondary">
            <MainForm />
          </div>
        </div>

        <div className="row">
          <div className="col-12 ">
            {" "}
            <div className="alert alert-info" role="alert">
              <MainFeed />
              <hr />
              <MainVideo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
