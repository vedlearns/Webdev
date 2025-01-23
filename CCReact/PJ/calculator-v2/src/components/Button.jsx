import styles from "./Button.module.css"
function Button({btn,onButtonClicked}){
return <> <button onClick={onButtonClicked} className={styles.button} >{btn} </button>
</>
}
export default Button;