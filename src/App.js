import React, { Component } from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PostList />
      </div>
    );
  }
}

export default App;
