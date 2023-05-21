 

const ToysRow = ({toy}) => {
    const {seller,name,subCategory,price,quantity}=toy
    console.log(toy)
    return (
       
           <tr>
        <th>1</th> 
        <td>{seller}</td> 
        <td>{name}</td> 
        <td>{subCategory}</td> 
        <td>{price}</td> 
        <td>{quantity}</td> 
        <td>{<button>View Details</button>}</td>
       
      </tr> 
         
    );
};

export default ToysRow;