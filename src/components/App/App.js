import React, { Component } from "react";
import getUsers from "../../services/getUsers";
import UsersList from "../UsersList/UsersList";
import styles from "./App.module.css";
export default class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    getUsers().then((users) => this.setState({ users: users }));
  }

  render() {
    return (
      <div className={styles.Wrapper}>
        {this.state.users.length > 1 && <UsersList users={this.state.users} />}
      </div>
    );
  }
}
