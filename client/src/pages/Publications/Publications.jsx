import React, { useState, useEffect } from "react";
import { Container, LoadBar } from "./PublicationsStyle";
import Post from "../../components/Post/Post";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import ReactLoading from "react-loading";
import { getAllPosts } from "../../service/api";

export default function Publications() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // axios.get('http://localhost:3000/publications')
    //   .then(res => {
    //     setPosts(res.data)
    //     setLoading(true)
    //   })
    getAllPosts()
      .then((res) => {
        setPosts(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // useEffect(() => {
  //   const getPosts = async () => {
  //     const res = await axios.get("/posts")
  //     setPosts(res.data)
  //     setLoading(true)
  //   }
  //   getPosts()
  // }, [])

  return (
    <>
      {loading ? (
        <LoadBar>
          <ReactLoading type={"spin"} color={"grey"} height={100} width={100} />
        </LoadBar>
      ) : (
        <>
          <Container>
            {posts.map((p, index) => (
              <Post key={index} post={p} />
            ))}
          </Container>
          <Footer />
        </>
      )}
    </>
  );
}
