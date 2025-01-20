import styles from "./FoodInput.module.css"
const FoodInput=({handleOnChange})=>{
return<>
<input onChange={handleOnChange} className={styles.foodInput} placeholder="Enter Food Item"  type="text" /> 
</>
}
export default FoodInput;