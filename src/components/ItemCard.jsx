import React from "react";
import {useValue } from "../itemContext";
import styles from "../styles/ItemCard.module.css";
import data from "../data/itemData";

function ItemCard() {
  const {handleAdd, handleRemove} = useValue();

  return (
    <>
    {data.map((item, i) => <div key={item.id} className={styles.itemCard}>
    <div className={styles.itemName}>{item.name}</div>
    <div className={styles.itemPrice}>&#x20B9; {item.price}</div>
    <div className={styles.itemButtonsWrapper}>
      <button className={styles.itemButton} onClick={() => handleAdd({price:item.price, id:item.id, name:item.name})}>
        Add
      </button>
      <button className={styles.itemButton} onClick={() => handleRemove(i)}>
        Remove
      </button>
    </div>
  </div>)}
    </>
  );
}

export default ItemCard;
