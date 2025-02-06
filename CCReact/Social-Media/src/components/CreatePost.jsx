import { useRef ,useContext } from 'react';
import styles from './CreatePost.module.css'
import {PostList as PostListContext }from "../store/Post-list-store"
const CreatePost = () => {
  const {addPost}=useContext(PostListContext);
  const titleElement=useRef();
  const bodyElement=useRef();
  const handleAddPost=(e)=>{
    e.preventDefault();
  const data={
    title:titleElement.current.value,
    body:bodyElement.current.value
  }
  bodyElement.current.value="";
  titleElement.current.value="";
    addPost(data)
  }
  return (
    <>
    <div className={`${styles.container} flex bg-gray-800`} >
      <form onSubmit={handleAddPost}>
        <div className={`${styles.title} `}>
          <label htmlFor="title">Title</label>
          <input ref={titleElement}  type="text" id="title" name="title" placeholder="Title" />
        </div>
        <div className={`${styles.body}`}>
          <label htmlFor="body">Body</label>
          <input ref={bodyElement}  type="text" id="body" name="body" placeholder="body" />
        </div>
        <div className={`${styles.buttonContainer}`}>
        <button type='submit'  className={`${styles.button}`}>Post</button>
        </div> 
      </form>
      </div>
    </>
  );
};

export default CreatePost;
