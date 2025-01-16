import styles from "./Items.module.css";
const Items=(prop)=>{
return( <li className={`${styles['item']} text-left`}>{prop.foodItems}</li>);
}
export default Items;