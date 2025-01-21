import styles from "./Items.module.css";
const Items=({foodItems,bought ,handleBuyButton})=>{
return( <li style={bought? {backgroundColor: "rgb(86, 244, 86)"}:{}}  className={`${styles['item']} `}>{foodItems} <button onClick={handleBuyButton}  className={styles.button}>BUY</button> </li>);
}
export default Items;