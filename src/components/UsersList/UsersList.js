import React from "react";
import User from "../User/User";
import styles from "./UsersList.module.css";

const UsersList = ({ users }) => (
  <ul className={styles.List}>
    {users.map((user) => (
      <User
        key={user.id}
        name={user.name}
        phone={user.phone}
        email={user.email}
        website={user.website}
        user={user.username}
        city={user.address.city}
        street={user.address.street}
      />
    ))}
  </ul>
);

export default UsersList;
