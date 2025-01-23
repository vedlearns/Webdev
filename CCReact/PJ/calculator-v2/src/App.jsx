import styles from "./App.module.css";
import Input from "./components/Input";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClicked = (button) => {
  if(button==='c'){
    setCalVal("")
  }
  else if(button==='='){
    const result=eval(calVal);
    setCalVal(result);
  }
  else{
    const newData= calVal+ button;
    setCalVal(newData);
  }
  };

  return (
    <center>
      <div className={styles.calculator}>
        <Input calVal={calVal} />
        <ButtonContainer onButtonClicked={onButtonClicked} />
      </div>
    </center>
  );
}

export default App;
