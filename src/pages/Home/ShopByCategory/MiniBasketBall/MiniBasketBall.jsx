import { useEffect, useState } from "react";
import MiniBasketBallCard from "./MiniBasketBallCard";

const MiniBasketBall = () => {
  const [toys, setToys] = useState([]);

  const url =
    "http://localhost:5000/toysByCategory?subCategory=Miniature%20Basketball";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {toys.map((toy) => (
        <MiniBasketBallCard key={toy._id} toy={toy}></MiniBasketBallCard>
      ))}
    </div>
  );
};

export default MiniBasketBall;
