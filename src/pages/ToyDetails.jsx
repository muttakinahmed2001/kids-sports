import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  const { photo, name, seller, email, price, rating, quantity, details } = toy;
  console;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Seller Name: {seller}</p>
        <p>Seller Email: {email}</p>
        <p>Price: ${price}</p>
        <p>Rating: {rating}</p>
        <p>Available Quantity: {quantity}</p>
        <p>
          Details: <small>{details}</small>
        </p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};

export default ToyDetails;
