import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts");
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-lg mx-auto p-4">
        {posts.map((post) => (
          <Post key={post._id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Home;
