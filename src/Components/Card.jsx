import { Link } from "react-router-dom";
import "../App.css";

const Card = ({ name, username, id }) => {
  const addFav = () => {
    const returnFav = JSON.parse(localStorage.getItem("dentistFav")) || [];

    const favDentist = { name: name, username: username, id: id };

    const usersId = returnFav.map((users) => users.id);

    if (!usersId.includes(favDentist.id)) {
      returnFav.push(favDentist);
      localStorage.setItem("dentistFav", JSON.stringify(returnFav));
    } else {
      returnFav.pop(favDentist);
      localStorage.setItem("dentistFav", JSON.stringify(returnFav));
    }
  };

  return (
    <div className="card">
      <Link to={"detail/" + id}>
        <img className="img-car" src="./images/doctor.jpg" alt="" />
        <h5>{name}</h5>
        <h5>{username}</h5>
      </Link>
      <button onClick={addFav}>Agregar a favoritos</button>
    </div>
  );
};
export default Card;
