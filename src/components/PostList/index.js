import React, { Component } from "react";
import Post from "../Post";
import "./postlist.css";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "finn",
          avatar:
            "https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2019/10/Hora-da-Aventura-Adventure-Time-696x391.jpg",
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "https://www.minhaseriefavorita.com/wp-content/uploads/2018/10/hora-de-aventura-capa-minhaseriefavorita-1280x720.jpg",
            },
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
        ],
      },
      {
        id: 2,
        author: {
          name: "jake",
          avatar:
            "https://superawesomevectors.com/wp-content/uploads/2017/05/jake-adventure-time-vector-800x566.jpg",
        },
        date: "04 Jun 2029",
        content: "donald, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 2,
            author: {
              name: "sora",
              avatar:
                "https://img.elo7.com.br/product/zoom/209DEDE/almofada-do-finn-hora-de-aventura-animacao.jpg",
            },
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          },
        ],
      },
    ],
  };

  render() {
    return (
      <div className="container">
        {this.state.posts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
