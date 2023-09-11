const Info = () => {
  return (
    <div className="flex justify-center items-center flex-col sm:flex-row gap-20  my-40">
      <div>
        <img className="w-full object-cover" src="/child.jpg" alt="" />
      </div>

      <div>
        <h1 className="text-3xl font-semibold my-5">Make the Most Playtime</h1>
        <p className="my-3 font-semibold">
          We partner with the best retailers to bring you safe, educational
          toys.
        </p>
        <ul style={{ listStyleType: "circle" }}>
          <li className="mb-2">Takeout of the Guesswork</li>
          <li className="mb-2">Right toys, Right time</li>
          <li className="mb-2">Child safe & Sustainable</li>
          <li className="mb-2">Parenting Made Easier</li>
          <li className="mb-2">No Commitments</li>
        </ul>

        <button className="btn btn-info rounded-full my-5">Get Started</button>
      </div>
    </div>
  );
};

export default Info;
