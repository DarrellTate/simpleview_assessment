import React, { Component } from "react";
import ArticleComponent from "./ArticleComponent";

class MainComponent extends Component {
  state = {};

  componentDidMount() {
    fetch("https://sv-reqres.now.sh/api/listings")
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-6">
            <ArticleComponent />
          </div>
          <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <ArticleComponent />
          </div>
          <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <ArticleComponent />
          </div>
        </div>

        <div className="row">
          <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <ArticleComponent />
          </div>
          <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <ArticleComponent />
          </div>
          <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-6">
            <ArticleComponent />
          </div>
        </div>

        <div className="row">
          <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-6">
            <ArticleComponent />
          </div>
          <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <ArticleComponent />
          </div>
          <div className="col col-xs-12 col-sm-12 col-md-4 col-lg-3">
            <ArticleComponent />
          </div>
        </div>
      </main>
    );
  }
}

export default MainComponent;
