import React from "react";

class BookContent extends React.Component {
  constructor(props) {
    super(props);
    // console.log("genre", props.data.genre);

    this.state = {
      genre: props.data.genre,
      title: props.data.title,
      available: props.data.available,
      description: props.data.description,
      released_date: props.data.released_date
    };
  }
  render() {
    const bookAvailable = this.state.available;
    let availableStatus;
    if (bookAvailable === "true") {
      availableStatus = <h3>Available</h3>;
    } else {
      availableStatus = <h3 style={{ color: "red" }}>Unavailable</h3>;
    }
    return (
      <div>
        <section className="header-title-container">
          <div className="header-wrapper">
            <div className="genre-label">
              <div className="label-text">
                <p>{this.state.genre}</p>
              </div>
            </div>
            <div className="main-header">
              <ul>
                <li>
                  <h1>{this.state.title}</h1>
                </li>
                <li>{availableStatus}</li>
              </ul>
            </div>
            <div className="date-header">
              <p>{this.state.released_date}</p>
            </div>
          </div>
          <div className="content-wrapper">
            <main>
              <p>{this.state.description}</p>
            </main>
          </div>
        </section>
      </div>
    );
  }
}
export default BookContent;
