import './App.css';
import { useState } from 'react';
import Post from "./Post.js";

const posts = [{text:"shabat shalom",likes:17,id:"28238"},{text:"happy news",likes:2,id:"320839"}]
function App() {
  const [postsState,setPostsState] = useState(posts);
  const setPostLike = (id,num)=>{
      const post = postsState.find(post=>post.id === id);
      post.likes = post.likes+ num
      const newPosts =[...postsState]
      setPostsState(newPosts)
  }
  return (
    <div className="App">
    {posts.map(post => <Post {...post} onC={
      ()=>{
        setPostLike(post.id,1)
      
    }
    } />)}
    
    </div>
  );
}

export default App;
