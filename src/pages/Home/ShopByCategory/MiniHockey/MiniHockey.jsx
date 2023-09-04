import { useEffect, useState } from "react";
import MiniHockeyCard from "./MiniHockeyCard";

const MiniHockey = () => {
  const [toys, setToys] = useState([]);

  const url =
    "https://toy-server-muttakinahmed2001.vercel.app/toysByCategory?subCategory=Miniature%20Hockey";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
      {toys.map((toy) => (
        <MiniHockeyCard key={toy._id} toy={toy}></MiniHockeyCard>
      ))}
    </div>
  );
};

export default MiniHockey;
