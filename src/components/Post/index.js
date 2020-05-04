import React from "react";
import Comment from "../Comment";
import "./post.css";

function Post({ data }) {
  return (
    <article className="post">
      <div className="author">
        <img src={data.author.avatar} alt="avatar" />
        <div>
          <h3>{data.author.name}</h3>
          <span>{data.date}</span>
        </div>
      </div>

      <div className="author-message">{data.content}</div>

      <div className="comments">
        {data.comments.map((comment) => (
          <Comment key={comment.id} data={comment} />
        ))}
      </div>
    </article>
  );
}

export default Post;
