import React, { Component } from "react";
import fallback_image from "./../images/fallback.jpg";

class ArticleComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      article: props.article
    };
  }

  render() {
    return (
      <article>
        <div className="article-img-container">
          <img src={fallback_image} alt="img" height="100%" width="100%" />
          <div className="article-text-container">
            <div className="article-title-container">
              <h3>Some Title</h3>
            </div>
            <p className="artice-description-container">Some Description</p>
          </div>
        </div>
      </article>
    );
  }
}

export default ArticleComponent;
