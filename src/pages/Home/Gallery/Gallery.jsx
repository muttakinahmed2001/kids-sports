const Gallery = () => {
  const photos = [
    "https://m.media-amazon.com/images/I/61YfyC3GQ+L._AC_UF894,1000_QL80_.jpg",
    "https://img.fruugo.com/product/2/11/834536112_max.jpg",
    "https://static-01.daraz.com.bd/p/2b4caff14db59ab1becd8b88a90a7322.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzoe0Wh6J2RRjzG1gTPvv-jsaCwas-2atknA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ53JbAsSWUzudx6zranVexKj41PoxLn8L-A&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8YBoLDtdbbxyTl2G69mC77pshyAO6LGZ0pQ&usqp=CAU",
    "https://m.media-amazon.com/images/I/61NjJL1WGRL._AC_UF894,1000_QL80_.jpg",
    "https://www.jiomart.com/images/product/original/rv9aah3jwp/channapatna-toys-miniature-bowling-ball-game-desktop-office-indoor-games-corporate-training-and-workshop-stress-relief-for-adults-and-kids-bowling-game-8-9-15-years-boys-birthday-gift-toys-product-images-orv9aah3jwp-p594291523-0-202210061231.jpg?im=Resize=(1000,1000)",
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 mt-[200px] gap-10 ">
      {photos.map((photo, index) => (
        <div
          data-aos="fade-down-left"
          className="w-[200px] h-[200px]"
          key={index}>
          <img className="w-100 h-100 object-cover" src={photo} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
