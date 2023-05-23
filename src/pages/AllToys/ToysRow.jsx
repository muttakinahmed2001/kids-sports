import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

 

const ToysRow = ({toy}) => {
    const {_id,seller,name,subCategory,price,quantity}=toy
    console.log(toy)
    const {user}=useContext(AuthContext)
    const handleCondition = () => {
      if(!user){
       Swal.fire({
         title: 'You have to log in first to view details',
          
         confirmButtonText: 'Ok'
       })
      
      }
         }
      
    
    return (
       
           <tr>
        
         
        <td>{seller?seller:''}</td> 
        <td>{name}</td> 
        <td>{subCategory}</td> 
        <td>{price}</td> 
        <td>{quantity}</td> 
        <td>{ <Link to={`/toys/${_id}`}> <button onClick={handleCondition} className="btn btn-primary">View Details</button></Link>}</td>
       
      </tr> 
         
    );
};

export default ToysRow;