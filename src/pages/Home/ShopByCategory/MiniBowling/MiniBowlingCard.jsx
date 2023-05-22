 

const MiniBowlingCard = ({toy}) => {
    const {photo,name,price,rating } = toy
    return (
        <div style={{width:'150px'}}>
            <div className="card w-80 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img   src={photo} alt="Shoes" className="rounded-xl   w-full object-cover" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p className="font-bold"> Price  ${price}</p>
    <p className="font-bold">Rating {rating}</p>
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MiniBowlingCard;