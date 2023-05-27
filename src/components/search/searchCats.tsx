import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import{catsService}from "../../services/catsService"
import { CatInterface } from "../../interfaces/catInterface";
import Cat1 from "../cat/Cat1";
// import { Cat } from "../Cat";

export function SearchCats() {
  const [cats, setCats] = useState([]);
  const [error, setError] = useState(null);
  const [results, setResults] = useState([]);
  const [isLoadng, setIsLoading] = useState(true);
  const [searchParams, setSsearchParams] = useSearchParams("");
 
  useEffect(() => {
    catsService
      .getAllCats()
      .then((result) => setCats(result))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    setResults(
      cats.filter((el: CatInterface) =>
        el["name"].includes(String(searchParams.get("name")))
      )
    );
  }, [searchParams]);



  return (
    <>
      <div>
        <h2>Search by cats breeds</h2>
        <label htmlFor="searchInput">Search here</label>
        <input
          type="text"
          id="searchInput"
          name="searchInput"
          onBlur={(e) => setSsearchParams({ name: e.target.value })}
        />
      </div>
      
      {!error && !isLoadng && results.length > 0 && (
        <>
          <h3>Results</h3>
          {results.map((el) => (
            <Cat1 cat={el} key={el["id"]} />
          ))}
        </>
      )}

      {!error && !isLoadng && results.length === 0 && (
        <>
          <p>There are no results matching your search</p>
        </>
      )}
      {error && <p>An error occured</p>}
      {isLoadng && <p>LOADING...</p>}
    </>
  );
}
