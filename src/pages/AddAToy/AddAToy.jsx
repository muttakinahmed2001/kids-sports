import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";


const AddAToy = () => {
  const {user}= useContext(AuthContext);

  const handleAddToy = event  => {
event.preventDefault()
const form = event.target;
const name = form.name.value;
const seller = form.seller.value;
const email = form.email.value;
const subCategory = form.category.value;
const details = form.details.value;
const price = form.price.value;
const rating = form.rating.value;
const quantity = form.quantity.value;
const photo = form.photo.value;

const toy = {name,seller,email,subCategory,details,price,rating,quantity,photo}
console.log(toy)
  }
    return (
        <div className="bg-[#d7bfbf] p-24">
            <h2 className="text-4xl font-bold text-center mb-5">Add a Toy</h2>
            <form onSubmit={handleAddToy}>
                {/* form row name and quantity*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='name' placeholder="Toy Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2  ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='quantity' placeholder="Available Quantity" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form row seller name and email */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='seller' placeholder="Seller Name" defaultValue={user?.displayName} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2  ml-4">
                        <label className="label">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='email' placeholder="Seller Email" defaultValue={user?.email}className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Sub-category</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='category' placeholder="Sub-category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2  ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='price' placeholder="Price" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form row detail and rating*/}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Detail Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='details' placeholder="Detail description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2  ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='rating' placeholder="Rating" className="w-full input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* form photo row */}
                <div >
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='photo' placeholder="photo  URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                   
                </div>
                 
                <input className="btn btn-block mt-8 bg-warning" type="submit" value="Add A Toy" />
            </form>
        </div>

    );
};

export default AddAToy;