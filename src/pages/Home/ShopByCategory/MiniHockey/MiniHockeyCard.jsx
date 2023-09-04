import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Providers/AuthProvider";
import Swal from "sweetalert2";

const MiniHockeyCard = ({ toy }) => {
  const { user } = useContext(AuthContext);

  const { _id, photo, name, price, rating } = toy;

  const handleCondition = () => {
    if (!user) {
      Swal.fire({
        title: "You have to log in first to view details",

        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div>
      <div className="card h-[500px] w=80 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <div className="w-[200px] h-[200px]">
            <img src={photo} alt="Shoes" className="rounded-xl object-cover" />
          </div>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className="font-bold"> Price ${price}</p>
          <p className="font-bold">Rating {rating}</p>
          <div className="card-actions">
            <Link to={`/toys/${_id}`}>
              {" "}
              <button onClick={handleCondition} className="btn btn-primary">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniHockeyCard;
