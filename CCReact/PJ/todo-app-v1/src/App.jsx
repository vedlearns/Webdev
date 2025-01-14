import "./App.css";
import AppContent from "./components/AppContent";
import AppName from "./components/AppName";
function App() {
  return (
    <>
      <center className="todo-container">
        <AppName/>
        <AppContent/>
      </center>
    </>
  );
}

export default App;
