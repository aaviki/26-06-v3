const getDataAllCats = () => {
  return fetch("../data/catsData.ts")
    .then((response) => response.json())
    .catch((error) => console.log(error))
    .finally(() => console.log("Done"));
};

const getDataCatsID = (id: number) => {
  return fetch(`../data/catsData.ts${id}`)
    .then((response) => response.json())
    .catch((err) => console.log(err))
    .finally(() => console.log("done"));
};

export const dataCatsService = {
  getDataAllCats,
  getDataCatsID,
};