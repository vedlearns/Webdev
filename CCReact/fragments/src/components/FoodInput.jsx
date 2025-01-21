import styles from "./FoodInput.module.css"
const FoodInput=({handleOnKeyDown})=>{
return<>
<input onKeyDown={handleOnKeyDown} className={styles.foodInput} placeholder="Enter Food Item"  type="text" />
</>
}
export default FoodInput;