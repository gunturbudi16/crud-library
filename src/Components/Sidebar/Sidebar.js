import React from "react";
import Profile from "../../assets/images/test.jpg";
import { withRouter } from "react-router-dom";
// this.props.dispatch(login(userData, this.props.history));
const Sidebar = props => {
  const closeNav = e => {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("openSidebar").style.display = "flex";

    return false;
  };

  const addModal = () => {
    // Get the modal
    let addModal = document.getElementById("addModal");

    // Get the button that opens the modal
    let addBtn = document.getElementById("add");

    // Get the <span> element that closes the modal
    let addSpan = document.getElementsByClassName("add-close")[0];

    // When the user clicks the button, open the modal
    addBtn.onclick = function() {
      addModal.style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    addSpan.onclick = function() {
      addModal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target === addModal) {
        addModal.style.display = "none";
      }
    };
    return false;
  };

  const logout = () => {
    localStorage.clear("TOKEN_KEY");
    localStorage.clear("id");
    props.history.push("/");
  };
  const email = localStorage.getItem("email");
  return (
    <div>
      <aside id="mySidebar" className="aside-nav-container">
        <div className="menu-btn">
          <i onClick={closeNav} className="fas fa-bars"></i>
        </div>
        <div className="profile-container">
          <img src={Profile} width="100%" alt="profil.jpg" />
          <h3>{email}</h3>
        </div>
        <nav className="aside-nav">
          <ul>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">Explore</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="#">History</a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a id="add" onClick={e => addModal(e.preventDefault)}>
                Add Book
              </a>
            </li>
            <li>
              {/* <Link to={"/"}> */}
              {/* eslint-disable-next-line */}
              <a onClick={logout}>Logout</a>
              {/* </Link> */}
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default withRouter(Sidebar);
