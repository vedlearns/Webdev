import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMsg from "./WelcomeMsg";
const PostList = () => {
  const { postList ,addInitialPosts } = useContext(PostListData);

  const handleGetPostClick=()=>{
    fetch('https://dummyjson.com/posts')
    .then(res=>res.json())
    .then((data)=>addInitialPosts(data.posts))
    
  }

  return (
    <>
      {postList.length==0? <WelcomeMsg onGetPostClick={handleGetPostClick} />: 
      <div className={`post-container flex flex-col m-auto `}>
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>}
    </>
  );
};

export default PostList;
