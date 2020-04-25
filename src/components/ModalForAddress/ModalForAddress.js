import React, { Component, createRef } from "react";
import styles from "./ModalForAddress.module.css";

class ModalForAddress extends Component {
  state = { animEnd: false };

  cityRef = createRef();
  streetRef = createRef();
  authorRef = createRef();
  containerRef = createRef();

  componentDidMount() {
    setTimeout(() => {
      this.cityRef.current.className = `${styles.ListItemText2}`;
    }, 200);
    setTimeout(() => {
      this.streetRef.current.className = `${styles.ListItemText2}`;
    }, 400);
    setTimeout(() => {
      this.containerRef.current.className = `${styles.Modal2}`;
    }, 600);
    setTimeout(() => {
      this.authorRef.current.className = `${styles.author}`;
      window.addEventListener("keydown", this.handleEscPress);
      this.setState({ animEnd: true });
    }, 800);
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
    const { city, street } = this.props;
    return (
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal} ref={this.containerRef}>
          <div className={styles.ListItem}>
            <p className={styles.ListItemText} ref={this.cityRef}>
              City: {city}
            </p>
            <p className={styles.ListItemText} ref={this.streetRef}>
              Street: {street}
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

export default ModalForAddress;
