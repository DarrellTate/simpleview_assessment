import React, { Component } from "react";
import ArticleComponent from "./ArticleComponent";

class Listings extends Component {
  state = {
    loading: false,
    listings: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://sv-reqres.now.sh/api/listings")
      .then(response => response.json())
      .then(data => {
        this.setState({ listings: data.data, loading: false });
      });
  }

  render() {
    const loading_text = 'The "listings" api is loading';

    // to achieve the pattern I need to set every 5th article's lg col grid to 6
    const listings = this.state.listings.map(listing => {
      let indexValue = this.state.listings.indexOf(listing);
      let listing_class_name = "col col-xs-12 col-sm-12 col-md-4 col-lg-";
      listing_class_name +=
        indexValue === 0 || indexValue % 5 === 0 ? "6" : "3";

      return (
        <div key={indexValue} className={listing_class_name}>
          <ArticleComponent article={listing} />
        </div>
      );
    });

    return (
      <main className="container">
        <div className="row">
          {this.state.loading ? loading_text : listings}
        </div>
      </main>
    );
  }
}

export default Listings;
