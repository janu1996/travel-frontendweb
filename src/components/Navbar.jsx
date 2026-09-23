import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

  const user =
    JSON.parse(
      localStorage.getItem("user")
    );

    let count=useSelector(state=>state.favorites)


  return (
    <nav>

      <Link to="/">
        Home
      </Link>

      <Link to="/destinations">
        Destinations
      </Link>

      {!user && (
        <>
          <Link to="/register">
            Register
          </Link>
          <Link to="/login">
            Login
          </Link>
        </>
      )}

      {user && (
        <Link to="/logout">
          Logout
        </Link>
      )}
      <Link to="/favs">
          Favorites {count.length}
        </Link>

    </nav>
  );
}

export default Navbar;