import styles from "./App.module.css";
import Input from "./components/Input";
import ButtonContainer from "./components/ButtonContainer";
function App() {  
  return <center ><div  className={styles.calculator}>
    <Input/>
    <ButtonContainer/>
  </div>
  </center>; 
}

export default App;
