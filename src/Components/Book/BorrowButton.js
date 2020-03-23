import React from "react";
// import Axios from "axios";
import { connect } from "react-redux";
import { borrowBook, returnBook } from "../../Redux/actions/books";
import { withRouter } from "react-router-dom";

class BorrowButton extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      id: props.data.id,
      imageURL: props.data.imageURL,
      available: props.data.available,
      loading: false
    };
  }

  rentBookData = () => {
    const rentData = {
      available: "false"
    };
    this.props.dispatch(borrowBook(this.state.id, rentData));
    this.props.history.push("/books/" + this.state.id);
  };

  returnBookData = () => {
    const returnData = {
      available: "true"
    };
    this.props.dispatch(returnBook(this.state.id, returnData));
    this.props.history.push("/books/" + this.state.id);
  };

  render() {
    const bookAvailable = this.state.available;
    let buttonStatus;
    if (bookAvailable === "true") {
      buttonStatus = <button onClick={this.rentBookData}>Borrow</button>;
    } else {
      buttonStatus = (
        <button
          style={{ backgroundColor: "#596A55" }}
          onClick={this.returnBookData}
        >
          Return
        </button>
      );
    }
    return (
      <div>
        <section className="borrow-button-container">
          <aside className="aside-items">
            <div className="book-cover-img">
              <img src={this.state.imageURL} alt="book-cover.img" />
            </div>
            <form>
              <div className="borrow-btn">{buttonStatus}</div>
            </form>
          </aside>
        </section>
      </div>
    );
  }
}

const mapStateToProps = book => {
  return {
    book
  };
};

export default withRouter(connect(mapStateToProps)(BorrowButton));
