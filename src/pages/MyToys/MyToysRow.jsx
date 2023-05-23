 

const MyToysRow = ({toy}) => {
    const {seller,photo,name,email,rating,details,subCategory,price,quantity}=toy
    console.log(toy)
    return (
       
           <tr>
         
        <td><img className="rounded-full w-11" src={photo} alt="" /></td>
        <td>{seller}</td>
        <td>{email}</td>

        <td>{name}</td> 
        <td>{subCategory}</td> 
        <td>{price}</td> 
        <td>{quantity}</td> 
        <td>{rating}</td> 
        <td>{details}</td>
       
      </tr> 
         
    );
};


export default MyToysRow;