import Container from "./components/Container";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import Heading from "./components/Heading";
import FoodInput from "./components/FoodInput";
function App() {
  let foodItem = ["Dal", "Roti", "Ghee", "curd", "salad"];
  // let foodItem = [];
  const HandleOnChange=(e)=>{
    console.log(e.target.value);
  }
  return (
    <>
      <Container>
        <Heading/>
        <ErrorMessage items={foodItem} />
        <FoodInput handleOnChange={HandleOnChange}></FoodInput>
        <FoodItems items={foodItem} />
      </Container>
      {/* <Container>
        <p>Above is the list of food items that are healthy for you.</p>
      </Container> */}
    </>
  );
}

export default App;
