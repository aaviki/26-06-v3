import { CatsData } from "../../../data/catsData";
import Cat1 from "../../cat/Cat1";

export function Details() {
  return (
    <>
    <h2>Details here</h2>
    {CatsData.map(el => <Cat1 cat={el} key={el.id}/>)}
    </>
  );
}
