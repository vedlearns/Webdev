import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/Post-list-store";
const PostList=()=>{
  const {postList}=useContext(PostListData)
  return(
    <>
    <div className={`post-container flex flex-col m-auto `} >
    {postList.map((post)=>< Post key={post.id} post={post} />)}
    </div>
    </>
  )
}

export default PostList;