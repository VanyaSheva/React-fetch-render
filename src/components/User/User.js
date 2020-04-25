import React, { Component } from "react";
import ModalForAddress from "../ModalForAddress/ModalForAddress";
import ModalForMoreInfo from "../ModalForMoreInfo/ModalForMoreInfo";
import styles from "./User.module.css";
class User extends Component {
  state = { showAddress: false, showInfo: false };

  onShowAddress = () => {
    this.setState({ showAddress: true });
  };
  onCloseAddress = () => {
    this.setState({ showAddress: false });
  };
  onShowInfo = () => {
    this.setState({ showInfo: true });
  };
  onCloseInfo = () => {
    this.setState({ showInfo: false });
  };

  render() {
    const { name, phone, email, website, user, city, street } = this.props;
    return (
      <>
        {this.state.showAddress && (
          <ModalForAddress
            city={city}
            street={street}
            onClose={this.onCloseAddress}
          />
        )}
        {this.state.showInfo && (
          <ModalForMoreInfo
            name={name}
            phone={phone}
            email={email}
            website={website}
            user={user}
            onClose={this.onCloseInfo}
          />
        )}
        <li className={styles.ListItem}>
          <img
            className={styles.Image}
            src="https://cdn1.iconfinder.com/data/icons/business-users/512/circle-512.png"
            alt=""
          />
          <p className={styles.ListItemText}>Name: {name}</p>
          <p className={styles.ListItemText}>Phone: {phone}</p>
          <p className={styles.ListItemText}>Email: {email}</p>
          <div className={styles.ButtonContainer}>
            <button
              type="button"
              onClick={this.onShowInfo}
              className={styles.Button}
            >
              Load more
            </button>
            <button
              type="button"
              onClick={this.onShowAddress}
              className={styles.Button}
            >
              Show address
            </button>
          </div>
        </li>
      </>
    );
  }
}

export default User;
