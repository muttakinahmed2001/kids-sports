const PhotoCard = ({ photo }) => {
  const { img, title } = photo;
  console.log(title);
  return (
    <div>
      {" "}
      <div>
        <div className="card   bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-full"
              style={{ height: "200px" }}
              src={img}
              alt="Shoes"
            />
          </figure>
        </div>
        <h3 className="font-bold mt-4 mb-4">{title}</h3>
      </div>
    </div>
  );
};

export default PhotoCard;
