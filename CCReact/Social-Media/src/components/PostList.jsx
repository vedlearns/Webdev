import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if(postList.length>0) return;     // restricting unnecessary api calls
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
  
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (!signal.aborted) {
          addInitialPosts(data.posts);
          setFetching(false);
        }
      })
      .catch((error) => {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
          setFetching(false); // Only update fetching if it's NOT an abort error
        }
      });
  
    return () => {
      console.log("Cleaning up useEffect, aborting fetch API call.");
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length == 0 ? (
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

export default PostList;
