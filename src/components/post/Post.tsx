import { useEffect, useState } from "react";
import { PostInterface } from "../../interfaces/postsInterface";
import { useNavigate } from "react-router-dom";
import { postsService } from "../../services/postsService";

interface PostProps {
  post: PostInterface;
}

export function Post(props: PostProps) {
  console.log(props);

  const [status, setStatus] = useState(false);
  const [item, setItem] = useState();
  const navigate = useNavigate();

  // const changeStatus = () => {
  //   setStatus(true);
  // };

  useEffect(() => {
    postsService.getPostById(props.post.id).then((result) => setItem(result));
  }, []);

  const redirectToDetails = () => {
    navigate("/items/:id", {
      state: status,
    });
  };

  return (
    <div /* className={`${styles.postClass} ${styles.test}`} */>
      <h2>Title: {props.post.title} </h2>
      <button onClick={redirectToDetails}>Show details</button>
    </div>
  );
}
