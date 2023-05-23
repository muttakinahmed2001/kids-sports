 import Swal from 'sweetalert2';
import deleteIcon from '../../assets/delete.avif'

const MyToysRow = ({toy}) => {
    const {_id,seller,photo,name,email,rating,details,subCategory,price,quantity}=toy
    console.log(toy)

    const handleDeleteToy = (id) => {
console.log(id)
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    
   fetch(`https://toy-server-snowy.vercel.app/toys/${_id}`,
  { method:'DELETE'})
   .then(res => res.json())
   .then(data => {console.log(data);
  if(data.deletedCount >0){
    Swal.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  }})
  
  }
})
    }
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
        <td><button className="btn btn-success">Update</button></td>
        <td ><button onClick={()=> handleDeleteToy(_id)}><img className="rounded-xl" width={'50px'} src={deleteIcon} alt="" /></button></td>
       
      </tr> 
         
    );
};


export default MyToysRow;