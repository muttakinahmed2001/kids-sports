import { useEffect, useState } from "react";
import MiniHockeyCard from "./MiniHockeyCard";

const MiniHockey = () => {
  const [toys, setToys] = useState([]);

  const url =
    "http://localhost:5000/toysByCategory?subCategory=Miniature%20Hockey";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {toys.map((toy) => (
        <MiniHockeyCard key={toy._id} toy={toy}></MiniHockeyCard>
      ))}
    </div>
  );
};

export default MiniHockey;
