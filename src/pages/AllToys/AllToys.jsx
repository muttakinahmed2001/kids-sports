import useTitle from "../../hooks/useTitle";
import ToysRow from "./ToysRow";
import { useEffect, useRef, useState } from "react";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const searchRef = useRef(null);
  const [search, setSearch] = useState("");
  useTitle("All Toys");

  useEffect(() => {
    fetch(`http://localhost:5000/toys?search=${search}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [search]);

  const handleSearch = () => {
    console.log(searchRef.current.value);
    setSearch(searchRef.current.value);
  };

  return (
    <div>
      {/* <div className="flex justify-center my-5">
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered"
            />
            <button className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div> */}
      <div className="join flex justify-center my-3">
        <div>
          <div>
            <input
              type="text"
              ref={searchRef}
              className="input input-bordered join-item"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="indicator ms-2">
          <button onClick={handleSearch} className="btn join-item">
            Search
          </button>
        </div>
      </div>
      <div className="overflow-x-auto w-[1200px]">
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <ToysRow key={toy._id} toy={toy}></ToysRow>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
