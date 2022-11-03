import React from "react";

import PostForm from "./components/PostForm";
import FetchedPosts from "./components/FetchedPosts";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="container pt-3">
        <div className="row">
            <div className="col">
                <PostForm />
            </div>
        </div>
        <div className="row">
            <div className="col">
                <h2>Synchronous posts </h2>
                <Posts />
            </div>
            <div className="col">
                <h2>Asynchronous posts </h2>
                <FetchedPosts S/>
            </div>
        </div>
    </div>
  );
}

export default App;
