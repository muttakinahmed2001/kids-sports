const Featured = () => {
  const featuredImages = [
    { img: "/featured/image1.jpg", title: "Miniature BasketBall" },
    { img: "/featured/image2.jpg", title: "Miniature Bowling" },
    { img: "/featured/image3.jpg", title: "Miniature Hockey" },
  ];

  return (
    <>
      <h1 className="text-3xl text-center font-bold my-20">Featured Toys</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10">
        {featuredImages.map((toy, index) => (
          <div
            data-aos="fade-down-right"
            key={index}
            className="card  bg-base-100 shadow-xl">
            <figure>
              <div className=" h-[300px] ">
                <img
                  className="w-full h-100 object-cover"
                  src={toy.img}
                  alt="Shoes"
                />
              </div>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{toy.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Featured;
