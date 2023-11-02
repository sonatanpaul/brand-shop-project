import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";


const Login = () => {
    const navigate = useNavigate()
    const {signIn} = useContext(AuthContext);



    const handleLogin = event =>{
        event.preventDefault();
        
            const email = event.target.email.value;
            const password = event.target.password.value;

           // validation 
            if( email,password) {
            signIn(email,password)
            .then(res => {
                    toast.success('User Login Successfully')
                    navigate('/')
            })
            .catch(error => {
                toast.error('User and Password not valid ?')
            })
    }


    }



    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                
                <div className="hero-content flex-col">
                     <div className=" text-4xl font-bold"><h1>Login Form</h1></div>
                    <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                    
                    <form onSubmit={handleLogin} className=" lg:card-body px-2 py-4">
                        <div className=" form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" name="email" required />
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
                        <button type="submit" className="btn btn-outline btn-primary">Login</button>
                        </div>
                        <p>Not a Member? <Link to={"/register"}> <span className=" text-blue-700 underline">Register Now</span> </Link></p>
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

export default Login;