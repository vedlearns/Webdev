import "./App.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import PostListProvider from "../store/Post-list-store";
import { Outlet } from "react-router-dom";
 
function App() {
  return (
    <PostListProvider> 
    <div className="flex h-dvh">
      <Sidebar />
      <div className="w-full flex flex-col justify-between">
        <Header />
        <Outlet/>
        <Footer /> 
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
