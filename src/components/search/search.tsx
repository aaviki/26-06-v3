import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { postsService } from "../../services/postsService";
import { Post } from "../post/Post";
// import { PostInterface } from "../../interfaces/postsInterface";

export interface PostInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export function Search() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);
  const [isLoadng, setIsLoading] = useState(true);
  const [searchParams, setSsearchParams] = useSearchParams("");
  const navigate = useNavigate();
  // const searchInput = String(FormData.get("searchInput"));

  useEffect(() => {
    postsService
      .getAllPosts()
      .then((result) => setPosts(result))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setResults(
      posts.filter((el: PostInterface) =>
        el["title"].includes(String(searchParams.get("title")))
      )
    );
  }, [searchParams]);

  // useEffect(() => {
  //   if (results.length > 0) {
  //     navigate("/posts", {
  //       state: results,
  //     });
  //   }
  // }, [results]);

  return (
    <>
      <div>
        <h2>Search post by Title</h2>
        <label htmlFor="searchInput">Search here</label>
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          onBlur={(e) => setSsearchParams({ title: e.target.value })}
        />
      </div>
      {/* 
      {!error && !isLoadng && results!==[] && posts.length > 0 && (
        <>
          <h3>All Posts here</h3>
          {posts.map((el) => (
            <Post post={el} key={el["id"]} />
          ))}
        </>
      )} */}

      {!error && !isLoadng && results.length > 0 && (
        <>
          <h3>Results</h3>
          {results.map((el) => (
            <Post post={el} key={el["id"]} />
          ))}
        </>
      )}

      {!error && !isLoadng && results.length === 0 && (
        <>
          <p>There are no results matching your search</p>
        </>
      )}
      {error && <p>An error occured</p>}
      {isLoadng && <p>LOADING...</p>}
    </>
  );
}
