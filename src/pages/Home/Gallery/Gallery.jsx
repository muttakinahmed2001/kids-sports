import { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";

const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div>
      <h1 className="text-5xl text-center mt-80 ">Toy Collections</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-40 p-5 mx-auto">
        {photos.map((photo) => (
          <PhotoCard key={photo._id} photo={photo}></PhotoCard>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
