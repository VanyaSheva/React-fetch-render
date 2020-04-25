import React, { Component, createRef } from "react";
import styles from "./ModalForMoreInfo.module.css";

class ModalForMoreInfo extends Component {
  state = { animEnd: false };
  imageRef = createRef();
  nameRef = createRef();
  phoneRef = createRef();
  emailRef = createRef();
  websiteRef = createRef();
  userRef = createRef();
  containerRef = createRef();
  authorRef = createRef();

  componentDidMount() {
    setTimeout(() => {
      this.imageRef.current.className = `${styles.Image2}`;
    }, 400);
    setTimeout(() => {
      this.nameRef.current.className = `${styles.ListItemText2}`;
    }, 600);
    setTimeout(() => {
      this.phoneRef.current.className = `${styles.ListItemText2}`;
    }, 800);
    setTimeout(() => {
      this.emailRef.current.className = `${styles.ListItemText2}`;
    }, 1000);
    setTimeout(() => {
      this.websiteRef.current.className = `${styles.ListItemText2}`;
    }, 1200);
    setTimeout(() => {
      this.userRef.current.className = `${styles.ListItemText2}`;
    }, 1400);
    setTimeout(() => {
      this.containerRef.current.className = `${styles.Modal2}`;
    }, 1600);
    setTimeout(() => {
      this.authorRef.current.className = `${styles.author}`;
      window.addEventListener("keydown", this.handleEscPress);
      this.setState({ animEnd: true });
    }, 1800);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleEscPress);
  }
  handleEscPress = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    this.props.onClose();
  };

  handleBackdropClick = (e) => {
    if (this.state.animEnd) {
      if (e.target === e.currentTarget) {
        this.props.onClose();
      }
      return;
    }
  };

  render() {
    const { name, phone, email, website, user } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal} ref={this.containerRef}>
          <div className={styles.ListItem}>
            <img
              className={styles.Image}
              src="https://cdn1.iconfinder.com/data/icons/business-users/512/circle-512.png"
              alt=""
              ref={this.imageRef}
            />
            <p className={styles.ListItemText} ref={this.nameRef}>
              Name: {name}
            </p>
            <p className={styles.ListItemText} ref={this.phoneRef}>
              Phone: {phone}
            </p>
            <p className={styles.ListItemText} ref={this.emailRef}>
              Email: {email}
            </p>
            <p className={styles.ListItemText} ref={this.websiteRef}>
              Website: {website}
            </p>
            <p className={styles.ListItemText} ref={this.userRef}>
              Login: {user}
            </p>
          </div>
          <p className={styles.none} ref={this.authorRef}>
            Made by{"    "}
            <a href="https://github.com/VanyaSheva" target="_blank">
              VanyaSheva
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default ModalForMoreInfo;
