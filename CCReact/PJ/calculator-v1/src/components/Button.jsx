import styles from "./Button.module.css"
function Button({btn}){
return <> <button className={styles.button} >{btn} </button>
</>
}
export default Button;