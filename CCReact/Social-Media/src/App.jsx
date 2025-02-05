import "./App.css";
import CreatePost from "./components/CreatePost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import PostList from "./components/PostList";
import { useState } from "react";
import PostListProvider from "./store/Post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
    <div className="flex h-dvh">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="w-full flex flex-col justify-between">
        <Header />
        {selectedTab === "Home" ? <PostList /> : <CreatePost />}
        <Footer />
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
