import { useState } from 'react';
import './App.css';
import Post from './Post.js';
const posts = [
  {text:"shabat shalom",likes:17,id:"80419"},
  {text:" toda raba! shabat shalom",likes:7,id:"7999419"},
]
function App() {
 const [postsState, setPostsState] = useState(posts)

  return (
    <div className="App">
    {posts.map(post => <Post {...post} 
      perPostOnClick={
      ()=>{
    const currentPost = postsState.find(p => p.id === post.id)
    currentPost.likes++;

    const newPosts = [...postsState] //חשוב בגלל הרפרנס
    setPostsState(newPosts)

    }
  }
    />)}
      
      
    </div>
  );
}
export default App;
