import  { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {
    const {user}=useContext(AuthContext)
    console.log(user.email)
    
    const [toys,setToys] =useState([])

    const url = `https://toy-server-snowy.vercel.app/toysByEmail?email=${user?.email}`

 useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => setToys(data))

 },[])
    return (
        <div>
           
        <div className="overflow-x-auto w-[1200px]">
<table className="table table-compact w-full">
 <thead>
   <tr>
    

     <th>Photo</th>
     <th>Seller</th> 
     <th>email</th>
     <th>Toy Name</th> 
     <th>Sub-category</th> 
     <th>price</th> 
     <th>Available Quantity</th> 
     <th>Rating</th> 
     <th> Details</th>
     <th> Update</th>
     <th> Delete</th>
   </tr>
 </thead> 
 <tbody>
    {toys.map(toy => <MyToysRow key={toy._id} toy={toy}></MyToysRow>)}
   
 </tbody> 
 <tfoot>
   <tr>
     <th></th> 
     <th>Photo</th>
     <th>Seller</th> 
     <th>email</th>
     <th>Toy Name</th> 
     <th>Sub-category</th> 
     <th>price</th> 
     <th>Available Quantity</th> 
     <th>Rating</th> 
     <th> Details</th>
     <th> Update</th>
     <th> Delete</th>
   </tr>
 </tfoot>
</table>
</div>
     </div>
    );
};

export default MyToys;