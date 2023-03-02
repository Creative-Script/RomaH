import React, { Component } from "react";
// import logoImage from "/images/logo.png";
export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div className="container-fluid">
        <div className="row">

            <img className=" img-logo mx-auto d-block" src='/images/logo.png' alt="testing" />
        </div>
        <div className="container-fluid w100">
          
            <h2 className="text-center">Welcome to Roma Hotel!</h2>

        </div>
        <div className="d-flex justify-content-centre align-items-centre"></div>
      </div>
    );
  }
}
