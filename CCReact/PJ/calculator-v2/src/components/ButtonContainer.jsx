import styles from "./ButtonContainer.module.css"
import Button from "./Button";
function ButtonContainer({onButtonClicked}){
  const buttonNames=['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
return<>
 <div className={styles.buttonContainer}>
 {buttonNames.map(button=>< Button onButtonClicked={()=>onButtonClicked(button)} key={button} btn={button} >${button}</Button>)}
</div>
</>

}
export default ButtonContainer;