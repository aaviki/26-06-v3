import { UserContext } from "../../contexts/userContext";
import "../../App.css"
import { useContext } from "react";


function Cat1(props) {
  const { name, img, owner, title } = props.cat;
  console.log(props);

  const {hasUser} = useContext(UserContext);


  return (
    <div className="cat">
        {/* <button>{props.children}</button> */}
      <h2>{name}</h2>
      <p>{owner}</p>
      <p>{title}</p>
      <img src={img} alt="cat" />
     {hasUser && <a href="/cats/:id"> Show details...</a>}

    </div>
  );
}

export default Cat1;