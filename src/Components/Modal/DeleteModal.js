import React from "react";

import "./styles/DeleteModal.css";
import checkedLogo from "../../assets/images/checked.png";
// import Axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { deleteBookData } from "../../Redux/actions/books";
// const URL_STRING = "/api/v1/books/delete/";

class DeleteModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.data.id,
      title: props.data.title
    };
  }
  deleteBookData = () => {
    this.props.dispatch(deleteBookData(this.state.id));

    this.props.history.push("/home");
  };

  render() {
    // console.log("id", this.state.id);
    return (
      <div id="deleteModal" className="delete-modal">
        <div className="delete-modal-content">
          <div className="delete-modal-header">
            <span onClick={this.deleteBookData} className="close">
              &times;
            </span>
          </div>
          <div className="delete-modal-body">
            <div className="body-wrapper">
              <img src={checkedLogo} alt="" srcSet="" />
              <h2>
                Data <span>{this.state.title}</span> Berhasil Dihapus!
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = book => {
  return {
    book
  };
};

export default withRouter(connect(mapStateToProps)(DeleteModal));
