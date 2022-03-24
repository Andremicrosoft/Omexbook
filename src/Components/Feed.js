import React, { useEffect, useState } from "react";
import "../Styles/Feed.css";
import StoryShowcase from "../Components/StoryShowcase";
import Publisher from "../Components/Publisher";
import Post from "../Components/Post";
import db from "../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
      );
  }, []);
  return (
    <div className="feed">
      <StoryShowcase />
      <Publisher />
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={
            post.data.profilePic
              ? post.data.profilePic
              : "https://imgur.com/user/cyberavocado21/avatar"
          }
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username ? post.data.username : "Avoca Guest"}
          image={post.data.image}
        />
      ))}

      {/* <Post
        profilePic="https://imgur.com/user/cyberavocado21/avatar"
        username="avoca112"
        message="This is a test"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/SL_Bundala_NP_asv2020-01_img08.jpg/2560px-SL_Bundala_NP_asv2020-01_img08.jpg"
        timestamp="1min ago"
      />
      <Post
        profilePic="https://imgur.com/user/sravicorgibandit/avatar"
        username="leaf"
        message="This is a test 2"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Wordle_196_example.svg/2560px-Wordle_196_example.svg.png"
        timestamp="2min ago"
      /> */}
    </div>
  );
}

export default Feed;
