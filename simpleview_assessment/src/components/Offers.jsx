import React, { Component } from "react";
import OfferComponent from "./OfferComponent";

class Offers extends Component {
  state = {
    loading: false,
    offers: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://sv-reqres.now.sh/api/offers")
      .then(response => response.json())
      .then(data => {
        this.setState({ offers: data.data, loading: false });
      });
  }

  render() {
    const loading_text = 'The "listings" api is loading';

    // to achieve the pattern I need to set every 5th article's lg col grid to 6
    const offers = this.state.offers.map(offer => {
      let indexValue = this.state.offers.indexOf(offer);
      let offer_class_name = "col col-xs-12 col-sm-12 col-md-4 col-lg-";
      offer_class_name += indexValue === 0 || indexValue % 5 === 0 ? "6" : "3";

      return (
        <div key={indexValue} className={offer_class_name}>
          <OfferComponent article={offer} />
        </div>
      );
    });

    return (
      <main className="container">
        <div className="row">{this.state.loading ? loading_text : offers}</div>
      </main>
    );
  }
}

export default Offers;
