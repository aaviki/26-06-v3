// import { CatsData } from "../data/catsData";

// const getAllCats = () => {
//   return fetch(CatsData)
//     .then((response) => response.json())
//     .catch((error) => console.log(error))
//     .finally(() => console.log("Done"));
// };

// const getCatsID = (id: string) => {
//   return fetch(`https://api.thecatapi.com/v1/breeds${id}`)
//     .then((response) => response.json())
//     .catch((err) => console.log(err))
//     .finally(() => console.log("done"));
// };

// export const catsService = {
//   getAllCats,
//   getCatsID,
// };



const getAllCats = () => {
  return fetch("https://api.thecatapi.com/v1/breeds")
    .then((response) => response.json())
    .catch((error) => console.log(error))
    .finally(() => console.log("Done"));
};

const getCatsID = (id: string) => {
  return fetch(`https://api.thecatapi.com/v1/breeds${id}`)
    .then((response) => response.json())
    .catch((err) => console.log(err))
    .finally(() => console.log("done"));
};

export const catsService = {
  getAllCats,
  getCatsID,
};
