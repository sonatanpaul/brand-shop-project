import { Link, Navigate, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {

    const navigate = useNavigate()
    
    const {createUser, handleUpdateProfile} = useContext(AuthContext);


     const handleSignUp = event => {
            event.preventDefault();

            const name = event.target.name.value;
            const email = event.target.email.value;
            const image = event.target.image.value;
            const password = event.target.password.value;

            // validation 

            if(password.length < 6) {
                toast.error('Password must be at least 6 characters long')
                return;
            }

            
            if (!/[A-Z]/.test(password)) {
                toast.error('Password must be at capital letter')
                return;
            }

            if (!/[!@#$%^&*()_+{}[\]:;<>,.?/~]/.test(password)) { 
                toast.error('Password must be at a special character.')
                return;
            }

   

      createUser(email, password)
            .then(res => {
                handleUpdateProfile(name,image)
                .then(() => {
                    toast.success('User Created Successfully')
                    navigate('/')
                })
            })
            .catch(error => {
                toast.error(error.message)
            })
                }





    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                
                <div className="hero-content flex-col">
                     <div className=" text-4xl font-bold"><h1>Register Now</h1></div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    
                    <form onSubmit={handleSignUp} className="lg:card-body py-4 px-2">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" name="name" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" name="email"  required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="text" placeholder="image Url" className="input input-bordered" name="image"  required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" className="input input-bordered" name="password" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control mt-6">
                        <button className="btn btn-outline btn-primary" type="submit">Register</button>
                        </div>
                        <p>Already Member? <Link to={"/login"}> <span className=" text-blue-700 underline">Login</span> </Link></p>
                        
                    </form>
                        <div  className="flex justify-center items-start mb-10">
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Register;