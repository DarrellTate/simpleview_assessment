import React, { Component } from "react";
import EventComponent from "./EventComponent";

class Events extends Component {
  state = {
    loading: false,
    events: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://sv-reqres.now.sh/api/events")
      .then(response => response.json())
      .then(data => {
        this.setState({ events: data.data, loading: false });
      });
  }

  render() {
    const loading_text = 'The "events" api is loading';

    // to achieve the pattern I need to set every 5th article's lg col grid to 6
    const events = this.state.events.map(event => {
      let indexValue = this.state.events.indexOf(event);
      let event_class_name = "col col-xs-12 col-sm-12 col-md-4 col-lg-";
      event_class_name += indexValue === 0 || indexValue % 5 === 0 ? "6" : "3";

      return (
        <div key={indexValue} className={event_class_name}>
          <EventComponent article={event} />
        </div>
      );
    });

    return (
      <main className="container">
        <div className="row">{this.state.loading ? loading_text : events}</div>
      </main>
    );
  }
}

export default Events;
