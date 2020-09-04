import React from "react";

export default ({ post }) => (
  <div className="post">
    <a
      className="post"
      href={`https://reddit.com/${post.permalink}`}
      target="_blank"
    >
      <div className="thumbnail">
        {post.thumbnail == "nsfw" ? (
          <h2 className="nsfw">NSFW</h2>
        ) : (
          <img
            src={
              post.thumbnail == "default" ||
              post.thumbnail == "self" ||
              post.thumbnail == "image"
                ? "https://cdn3.iconfinder.com/data/icons/social-media-tools/30/conversation-512.png"
                : post.thumbnail
            }
            alt="thumbnail"
          />
        )}
      </div>
      <div className="info">
        <h3>{post.title}</h3>
        <p>
          Subbreddit:{" "}
          <span style={{ fontWeight: "bold" }}>{post.subreddit}</span>
        </p>
        <p>
          Upvotes: <span style={{ fontWeight: "bold" }}>{post.ups}</span>
        </p>
      </div>
    </a>
  </div>
);
