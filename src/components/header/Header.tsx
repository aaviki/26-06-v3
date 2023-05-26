import { useContext } from "react";
import Navigation from "../navigation/Navigation";
import { LogedUserContext, UserContext } from "../../contexts/userContext";

export function Header() {
  const { hasUser } = useContext(UserContext);
  const { logedUser } = useContext(LogedUserContext);

  return (
    <div className="header">
      <Navigation />
      {hasUser && <span className="hello" style={{/* backgoundColor:"red" */}}>Hello, {sessionStorage.getItem('username')}!</span>}
      {/* <p>Hello, {logedUser}!</p> */}
      <hr />
    </div>
  );
}
