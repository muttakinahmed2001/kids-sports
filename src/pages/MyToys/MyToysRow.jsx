import Swal from "sweetalert2";

import { Link } from "react-router-dom";

const MyToysRow = ({ toy, toys, setToys }) => {
  const {
    _id,
    seller,
    photo,
    name,
    email,
    rating,
    details,
    subCategory,
    price,
    quantity,
  } = toy;
  console.log(toy);

  const handleDeleteToy = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toys/${_id}`, { method: "DELETE" })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== _id);
              setToys(remaining);
            }
          });
      }
    });
  };
  return (
    <tr>
      <td>
        <img className="rounded-full w-11" src={photo} alt="" />
      </td>
      <td>{seller}</td>
      <td>{email}</td>

      <td>{name}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{rating}</td>
      <td>{details}</td>
      <td>
        <Link to={`/updateToys/${_id}`}>
          <button className="btn btn-success">Update</button>
        </Link>
      </td>
      <td>
        <button className="btn btn-danger" onClick={() => handleDeleteToy(_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyToysRow;
