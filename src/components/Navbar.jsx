import React from "react";
import { useValue } from "../itemContext";
import styles from "../styles/Total.module.css";

function Navbar() {
  const {total, item, handleReset, toggle} = useValue();
  return (
    <div className={styles.container}>
      <h1>Total : &#x20B9; {total}</h1>
      <h1>Items: {item}</h1>
      <div className={styles.itemButtonsWrapper}>
        <button className={styles.itemButton} onClick={toggle}>Card</button>
        <button className={styles.itemButton} onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Navbar;
