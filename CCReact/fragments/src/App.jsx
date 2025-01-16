
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
function App() {
  let foodItem = ["Dal", "Roti", "Ghee", "curd", "salad"];
  // let foodItem = [];
  return (
    <>
      <center>
        <h1 className="text-lg font-medium">Healthy items</h1>
        <ErrorMessage items={foodItem}/>
       <FoodItems items={foodItem}/>
      </center>
    </>
  );
}

export default App;
