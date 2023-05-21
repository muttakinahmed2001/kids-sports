 
import ToysRow from "./ToysRow";
import { useEffect, useState } from "react";

 
const AllToys = () => {
    const [toys,setToys]=useState([])

    useEffect(()=>{
        fetch('https://toy-server-snowy.vercel.app/toys')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
     
    return (
        <div>
           
           <div className="overflow-x-auto w-[1200px]">
  <table className="table table-compact w-full">
    <thead>
      <tr>
        <th></th> 
        <th>Seller</th> 
        <th>Toy Name</th> 
        <th>Sub-category</th> 
        <th>price</th> 
        <th>Available Quantity</th> 
        <th>View Details</th>
      </tr>
    </thead> 
    <tbody>
       {toys.map(toy => <ToysRow key={toy._id} toy={toy}></ToysRow>)}
      
    </tbody> 
    <tfoot>
      <tr>
        <th></th> 
        <th>Seller</th> 
        <th>Toy Name</th> 
        <th>Sub-category</th> 
        <th>price</th> 
        <th>Available Quantity</th> 
        <th>View Details</th>
      </tr>
    </tfoot>
  </table>
</div>
        </div>
    );
};

export default AllToys;