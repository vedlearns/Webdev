import { useSelector } from "react-redux";
import Container from "./components/Container";
import Controls from "./components/Controls";
import DisplayCounter from "./components/DisplayCounter";
import Header from "./components/Header";
import PrivacyMessage from "./components/PrivacyMessage";

function App() {

  const privacy=useSelector(store=>store.privacy)

  return (
    <>
    <div className=" flex justify-center items-center h-screen w-screen bg-grey-500">
      <center style={{width:"50%"}}>
        <Container>
          <Header />
          {privacy?<PrivacyMessage/>:<DisplayCounter/>}
          <Controls/>
        </Container>
      </center>
    </div>
    </>
  );
}

export default App;
