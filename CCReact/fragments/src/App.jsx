import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Heading from "./components/Heading";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  const [foodItem,setFoodItem]=useState(["Dal", "Roti", "Ghee"])
  const onKeyDown=(e)=>{
    if(e.key==="Enter"){
      setFoodItem([e.target.value,...foodItem]);
      e.target.value=""
    }
  } 
  return (
    <>
      <Container>
        <Heading/>
        <FoodInput handleOnKeyDown={onKeyDown} ></FoodInput>
        <ErrorMessage items={foodItem} />
        <FoodItems items={foodItem} />
      </Container>
      {/* <Container>
        <p>Above is the list of food items that are healthy for you.</p>
      </Container> */}
    </>
  );
}

export default App;
