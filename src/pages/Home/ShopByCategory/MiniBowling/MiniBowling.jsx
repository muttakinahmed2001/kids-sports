import { useEffect, useState } from "react";
import MiniBowlingCard from "./MiniBowlingCard";


const MiniBowling = () => {

    const [toys,setToys] =useState([])

    const url = `https://toy-server-snowy.vercel.app/toys?category=Miniature%20Bowling`

 useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setToys(data))

 },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-3">
            {
                toys.map(toy => <MiniBowlingCard key={toy._id} toy={toy}></MiniBowlingCard>
                    )
            }
        </div>
    );
};

export default MiniBowling;