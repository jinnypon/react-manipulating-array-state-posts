import { useState } from "react";
import { postData } from "../raw-data/post-data";

function PostItem({ post }) {
  const [counterLike, setCounterLike] = useState(post.likes);
  const handleLikeClick = () => {
    setCounterLike(counterLike + 1);
  };
  const handleDislikeClick = () => {
    if (counterLike > 0) {
      setCounterLike(counterLike - 1);
    }
  };

  return (
    <li className="post-item">
      <div className="post-header">
        <h2>{post.title}</h2>
        <div className="post-social-media-stats">
          <span className="stats-topic">Likes: </span>
          <span className="post-likes">{counterLike}</span>
        </div>
      </div>

      <p className="post-content">{post.content}</p>

      <div className="post-actions">
        <button className="like-button" onClick={handleLikeClick}>
          Like
        </button>
        <button className="dislike-button" onClick={handleDislikeClick}>
          Dislike
        </button>
      </div>
    </li>
  );
}

function Posts() {
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <ul className="post-list">
        {postData.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}

export default Posts;
