import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link to="/home">
            <img src="images/sports_esports_black_24dp 1.svg" alt="" />
            <img className="img-logo" src="https://fontmeme.com/permalink/240717/be080cbafc609223cec66621a9899cb9.png" alt="" />
          </Link>
          <input
            className="col-xl-4 inputBuscador"
            type="search"
            placeholder="¿Que desear buscar?"
            aria-label="Search"
          />
          <a href="#">
            <button
              className="btn btn-outline-primary botonLogin col-xl-12"
              type="submit"
              onClick={handleClick}
            >
              Login
            </button>
          </a>
        </div>
      </nav>
    </>
  );
};

export default Header;
