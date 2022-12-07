import React, { useState, useEffect } from "react";
import Post from "./Post";
import "./App.css";
// import {db} from './firebase.js';

function App() {
  const [posts, setPosts] = useState([
    {
      username: "coding._ninja",
      caption: "Wow, I'm Amazing!",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF4WvC5PYhh90XerR_RZXPr2mpyVzAB_f7jg&usqp=CAU",
    },
    {
      username: "coder_tribe",
      caption: "Code with us",
      imageUrl: "https://codersera.com/blog/wp-content/uploads/2019/07/BLOG-23-L-3.jpg"
    },
    
  ]);

  // useEffect(() => {
  //   db.collection('posts').onsnapshot(snapshot => {
  //     setPosts(snapshot.docs.map(doc => doc.data()));
  //   })
  // },[]);

  return (
    <div className="app">
      <div className="app__header">
      <div className="app__headerWrapper">
          <img
            src=" https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt="Instagram original logo"
          />
          <button className="text__button">Logout</button>
          <div className="app__headerButtons">
            <button className="primary__button">Log in</button>
            <button className="text__button">Sign up</button>
          </div>
        </div>
      </div>
      <div className="timeline">
        {posts.map((post) => (
          <Post
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;