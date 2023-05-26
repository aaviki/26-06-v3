import { useContext } from "react";
import Navigation from "../navigation/Navigation";
import { LogedUserContext, UserContext } from "../../contexts/userContext";

export function Header() {
  const { hasUser } = useContext(UserContext);
  const { logedUser } = useContext(LogedUserContext);

  return (
    <>
      <Navigation />
      {hasUser && <p>Hello, {sessionStorage.getItem('username')}!</p>}
      {/* <p>Hello, {logedUser}!</p> */}
      <hr />
    </>
  );
}
