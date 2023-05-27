import "../../App.css"
import { UserContext } from "../../contexts/userContext";
import { useContext } from "react";


function Cat1(props) {
  const { name, img, owner, title, bio } = props.cat;
  console.log(props);

  const {hasUser} = useContext(UserContext);


  return (
    <div className="cat">
        {/* <button>{props.children}</button> */}
      <h2>{name}</h2>
      <p>{owner}</p>
      <p>{title}</p>
      <img src={img} alt="cat" />
     {hasUser && <a href="cats/:id"> Show details...</a>}
     {/* <p>{bio}fgdg</p> */}
     {/* {hasUser && <button onClick={()=>{<p>hgfsh</p>}}> Show details...</button>} */}
    {/* {hasUser && 
    <div className="dropdown">
  <span>Show details...</span>
  <div className="dropdown-content">
  <p>{bio}fgdg</p> */}
  {/* </div> */}
{/* </div> */}
{/* // } */}
</div>
   
      )
}

export default Cat1;