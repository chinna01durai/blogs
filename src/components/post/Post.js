import React from "react";
import "./Post.css";

export default function Post({ posts }) {
  return (
    <div className="card">
      <div className="card-header">{posts.title}</div>
        <h5 className="card-body">Special title treatment</h5>
        <p className="card-text">
          {posts.boby}
        </p>
    </div>
  );
}
