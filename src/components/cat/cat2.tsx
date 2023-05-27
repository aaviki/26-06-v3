import { useState, useEffect } from "react";
import "../../App.css"
import { CatInterface } from "../../interfaces/catInterface";
import { useNavigate } from "react-router-dom";
import { catsService } from "../../services/catsService";

interface CatProps{
  cat: CatInterface;
}
function Cat2(props: CatProps) {
  // const { name, img, owner, title } = props.cat;
  console.log(props);

//   const [status, setStatus] = useState(false);
//   const [item, setItem] = useState();
//   const navigate = useNavigate();

//   const redirectToDetails = () => {
//     navigate("/items/:id", {
//       state: status,
//     });
//   };

//   useEffect(() => {
//     catsService.getCatsID(props.cat.id).then((result) => setItem(result));
//   }, []);

  return (
    <div className="cat">
        {/* <button>{props.children}</button> */}
      {/* <h2>{name}</h2>
      <p>{title}</p>
      <img src={img} alt="cat" />
      <button onClick={redirectToDetails}>Show details</button> */}
    </div>
  );
}

export default Cat2;