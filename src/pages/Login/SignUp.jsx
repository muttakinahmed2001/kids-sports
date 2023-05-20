 
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const SignUp = () => {
    const [error,setError]= useState();
    const {signUp}= useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.email.value;
        const photo = form.photo.value;
        console.log(name,email,password,photo)

        signUp(email,password)
        .then(result => {
            const user = result.user;
            console.log(user)
            setError('')
        })
        .catch(error => console.log(error.message))
        if(password.length<6){
            setError('Password Password should be at least 6 characters')
          }
      }
     
    return (




        <div className="hero min-h-screen bg-base-200">


            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-5xl font-bold text-center  ">Sign Up</h1>
                   


                    
                    <form onSubmit={handleSignUp}>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Your name" className="input input-bordered" />
                    </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning mb-3" type="submit" value="Sign Up" />

                        </div>
                         
                        </form>


                    <h3>Already have an account? <Link to='/login' className="font-bold">Login</Link></h3>

                    <h3 className="text-red-700">{error}</h3>


                </div>
            </div>
        </div>
    );
};

export default SignUp;