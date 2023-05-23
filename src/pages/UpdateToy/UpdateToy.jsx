
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";




const UpdateToy = () => {
    const toy = useLoaderData();

    const { _id, details, price, quantity } = toy



    const handleUpdateToy = event => {
        event.preventDefault()
        const form = event.target;
        const details = form.details.value;
        const price = form.price.value;
        const quantity = form.quantity.value;


        const updatedToy = { details, price, quantity }
        console.log(updatedToy)
        console.log(_id)
        
        fetch(`https://toy-server-snowy.vercel.app/updateToys/${_id}`, {
            method: 'PATCH',
            
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedToy)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div className="bg-[#d7bfbf] p-24">
            <h2 className="text-4xl font-bold mb-5">Update a Toy</h2>
            <form onSubmit={handleUpdateToy}  >



                <div className="md:flex ">
                    <div className="form-control   ">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='quantity' placeholder="Available Quantity" defaultValue={quantity} className="  input input-bordered" />
                        </label>
                    </div>





                    <div className="form-control    ">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='price' defaultValue={price} placeholder="Price" className="  input input-bordered" />
                        </label>
                    </div>
                </div>


                <div className="md:flex mb-8">
                    <div className="form-control  ">
                        <label className="label">

                            <span className="label-text">Detail Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='details' placeholder="Detail description" defaultValue={details} className="input input-bordered  " />
                        </label>
                    </div>
                    <input className="btn ml-5 mt-8 bg-success" type="submit" value="Update" />


                </div>



            </form>
        </div>
    );
};

export default UpdateToy;