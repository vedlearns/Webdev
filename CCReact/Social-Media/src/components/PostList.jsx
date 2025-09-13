import Post from "./Post";
import WelcomeMsg from "./WelcomeMsg";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
  // const { postList, addInitialPosts } = useContext(PostListData);

  const postList=useLoaderData()

  return (
    <>
      {postList.length == 0 ? (
        <WelcomeMsg />
      ) : (
        <div className={`post-container flex flex-col m-auto `}>
          {postList.map((post) => ( 
            <Post key={post.id} post={post} />
          ))}
        </div> 
      )}
    </>
  );
};


export const postLoader=()=>{
return fetch("https://dummyjson.com/posts")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
          return(data.posts);
      })
}

export default PostList;
