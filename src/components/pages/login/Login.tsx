import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext, LogedUserContext } from "../../../contexts/userContext";

export function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  // const [hasUser, setHasUser] = useState(false);
  const [logedUser, setLogedUser] = useState("");
  // const { logedUser, setLogedUser } = useContext(LogedUserContext);

  const { hasUser, setHasUser } = useContext(UserContext);

  const onLogin = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const username = String(formData.get("username"));
    const password = String(formData.get("password"));

    if (username.length < 3) {
      setUsernameError("User name must be at least 3 characters long");
    } else {
      setUsernameError("");
    }

    if (password.length < 5) {
      setPasswordError("Password must be at laeast 5 charaktes long");
    } else {
      setPasswordError("");
    }

    if (username.length !== 0) {
      setLogedUser(username);
      console.log("1  ", logedUser);
      console.log("2  ", username);
    }
    setHasUser(true);
    e.currentTarget.reset();
    sessionStorage.setItem('username', username)
  };

  return (
    <>
      <h1>Login Here</h1>
      {hasUser && <h1>Hello, {sessionStorage.getItem('username')}!</h1>}
      <form onSubmit={onLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>{usernameError.length > 0 && <p>{usernameError}</p>}</div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div>{passwordError.length > 0 && <p>{passwordError}</p>}</div>
        <input type="submit" value="Login" />
      </form>
      {/* )} */}
    </>
  );
}
