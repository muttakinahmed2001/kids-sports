import { useEffect, useState } from "react";
import PhotoCard from "../Home/Gallery/PhotoCard";

const Collection = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("https://toy-server-muttakinahmed2001.vercel.app/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div className="flex flex-col justify-center ">
      <h1 className="text-5xl text-center mt-80 ">Toy Collections</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 mt-40">
        {photos.map((photo) => (
          <PhotoCard key={photo._id} photo={photo}></PhotoCard>
        ))}
      </div>
    </div>
  );
};

export default Collection;
