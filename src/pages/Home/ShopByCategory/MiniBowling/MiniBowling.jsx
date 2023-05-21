import { useEffect, useState } from "react";
import MiniBowlingCard from "./MiniBowlingCard";


const MiniBowling = () => {

    const [toys,setToys] =useState([])

    const url = `http://localhost:5000/toys?category=Miniature%20Bowling`

 useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setToys(data))

 },[])
    return (
        <div>
            {
                toys.map(toy => <MiniBowlingCard key={toy._id} toy={toy}></MiniBowlingCard>
                    )
            }
        </div>
    );
};

export default MiniBowling;