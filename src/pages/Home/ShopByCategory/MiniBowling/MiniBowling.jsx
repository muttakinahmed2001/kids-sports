import { useEffect, useState } from "react";
import MiniBowlingCard from "./MiniBowlingCard";

const MiniBowling = () => {
  const [toys, setToys] = useState([]);

  const url =
    "http://localhost:5000/toysByCategory?subCategory=Miniature%20Bowling";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {toys.map((toy) => (
        <MiniBowlingCard key={toy._id} toy={toy}></MiniBowlingCard>
      ))}
    </div>
  );
};

export default MiniBowling;
