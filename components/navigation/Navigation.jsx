import React from "react";
import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <ul id={styles.navigation}>
      <li>
        <a href='#contact'>Contact</a>
      </li>
    </ul>
  );
};

export default Navigation;
