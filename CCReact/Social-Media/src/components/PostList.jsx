import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, fetching, addInitialPosts } = useContext(PostListData);


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
