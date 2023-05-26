import { useContext } from "react";
import { UserContext } from "../../contexts/userContext";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";
// import { setHasUser } from "../../redux/userReducer";

function Navigation() {

  const {hasUser, setHasUser} = useContext(UserContext);
  

  return (
    <>
    <nav className={styles.navigation}>
      <Link to="/">Home</Link>
          <Link to="/items">Items</Link>
          <Link to="/items/:id">Details</Link>
    {!hasUser &&
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
            }
      {hasUser &&
                <>
                <Link to="/posts">Posts</Link>
                <Link to="/" onClick={()=>{setHasUser(false);console.log(hasUser); sessionStorage.removeItem('username')
                }}>Logout</Link>
                </>
              }
              </nav>
              </>
  );
}

export default Navigation;
