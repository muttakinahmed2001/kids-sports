

const AddAToy = () => {
    return (
        <div className="bg-[#d7bfbf] p-24">
            <h2 className="text-4xl font-bold">Add a Toy</h2>
            <form>  <div className="md:flex">
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Toy Name</span>
                </label>
                <label className="input-group">

                    <input type="text" placeholder="Toy Name" className="input input-bordered" />
                </label>
            </div>
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Available Quantity</span>
                </label>
                <label className="input-group">

                    <input type="text" placeholder="Available Quantity" className="input input-bordered" />
                </label>
            </div>
        </div></form>
          </div>

    );
};

export default AddAToy;