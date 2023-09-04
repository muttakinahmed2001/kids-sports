import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [asc, setAsc] = useState(true);
  const [toys, setToys] = useState([]);
  useTitle("My Toys");

  const url = `http://localhost:5000/toysByEmail?email=${user?.email}&sort=${
    asc ? "asc" : "desc"
  }`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [asc]);
  return (
    <div>
      <div className="flex justify-center mb-5">
        <button className="btn bg-[#2b5e09]" onClick={() => setAsc(!asc)}>
          {asc ? "Price: High to Low" : " Price: Low to High"}
        </button>
      </div>
      <div className="overflow-x-auto w-[1200px]">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Seller</th>
              <th>email</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>price</th>
              <th>Available Quantity</th>
              <th>Rating</th>
              <th> Details</th>
              <th> Update</th>
              <th> Delete</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <MyToysRow
                key={toy._id}
                toys={toys}
                setToys={setToys}
                toy={toy}></MyToysRow>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Seller</th>
              <th>email</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>price</th>
              <th>Available Quantity</th>
              <th>Rating</th>
              <th> Details</th>
              <th> Update</th>
              <th> Delete</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
