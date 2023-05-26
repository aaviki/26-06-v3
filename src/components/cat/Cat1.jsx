// import { CatsData } from "../../data/catsData"
// import { CatInterface } from "../../interfaces/catInterface";


// export interface CatInterface {
//   id:number ,
//         name: string,
//         img: string,
//         owner:string,
//         title:string,
// bio:string
// }

// export function Cat1(props:{cat: CatInterface}){
//     const {id, name,img, owner, title, bio}=props.cat;


//     return (
//         <div>
//             {/* <button>{props.children}</button> */}
//           <h2>{name}</h2>
//           <img src={img} alt="poster" />
//           <p>{id}</p>
//           <p>{owner}</p>
//           <p>{title}</p>
//           <p>{bio}</p>
//         </div>
//       );
//     }
import "../../App.css"

function Cat1(props) {
  const { name, img, owner, title } = props.cat;
  console.log(props);
  return (
    <div className="cat">
        {/* <button>{props.children}</button> */}
      <h2>{name}</h2>
      <p>{owner}</p>
      <p>{title}</p>
      <img src={img} alt="poster" />
    </div>
  );
}

export default Cat1;