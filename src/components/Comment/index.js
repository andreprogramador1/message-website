import React from "react";
import "./comment.css";

// {
//   id: 1,
//   author: {
//     name: "Diego Fernandes",
//     avatar:
//       "https://www.minhaseriefavorita.com/wp-content/uploads/2018/10/hora-de-aventura-capa-minhaseriefavorita-1280x720.jpg",
//   },
//   content: "Conteúdo do comentário",
// },

function Comment({ data }) {
  return (
    <article className="comment">
      <img src={data.author.avatar} alt="avatar" />
      <div className="comment-message">
        <p>
          <span>{data.author.name}</span>
          {data.content}
        </p>
      </div>
    </article>
  );
}

export default Comment;
