import { CatsData } from "../../../data/catsData";
import CatInfoCard from "../../cards/CatInfoCard";
import { CatCard } from "../../cards/catCard";
import Cat from "../../cat/Cat";
// import CatInfoCard from "../../cards/CatInfoCard";
// import { CatCard } from "../../cards/catCard";
import Cat1 from "../../cat/Cat1";

export function Details() {
  return (
    <>
    <h2>Details here</h2>
    {/* <CatInfoCard > */}
    {CatsData.map(el => <Cat cat={el} key={el.id}/>)}
    
    {/* </CatInfoCard> */}
    {/* <CatCard/> */}
    </>
  );
}
