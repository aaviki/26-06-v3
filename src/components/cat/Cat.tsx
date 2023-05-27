// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { catsService } from "../services/catsService";
// import { CatInterface } from "../interfaces/catInterface";

// interface CatProps {
  // cat: CatInterface;
// }

// export function Cat(props: CatProps) {
  // console.log(props);

  // const [status, setStatus] = useState(false);
  // const [item, setItem] = useState();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   catsService.getCatsID(props.cat.id).then((result) => setItem(result));
  // }, []);

  // const redirectToDetails = () => {
  //   navigate("/items/:id", {
  //     state: status,
  //   });
  // };

//   return (
//     <div className={`${styles.catClass} ${styles.test}`}>
//       {<h2>Name: {props.cat.name} </h2>}
//       {<button onClick={redirectToDetails}>Show details</button>}
//     </div>
//   );
// }

import "../../App.css"

function Cat(props:any) {
  const { name, img, owner, title, bio } = props.cat;
  console.log(props);
  return (
    <div className="cat">
        {/* <button>{props.children}</button> */}
      <h2>{name}</h2>
      <p>{owner}</p>
      <p>{title}</p>
      <p>{bio}</p>
      <img src={img} alt="Cat" />
    </div>
  );
}

export default Cat;