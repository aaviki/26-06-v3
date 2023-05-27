import { SearchCats } from "../search/searchCats";
import { SearchDataCats } from "../search/searchDataCats";

export function Cats() {
  return (
    <>
      <h2>Breeds page here</h2>
      <SearchDataCats/>
      <SearchCats />
    </>
  );
}
