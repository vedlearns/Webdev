import styles from "./Items.module.css";
const Items=({foodItems ,handleBuyButton})=>{
return( <li  className={`${styles['item']} `}>{foodItems} <button onClick={handleBuyButton} className={styles.button}>BUY</button> </li>);
}
export default Items;