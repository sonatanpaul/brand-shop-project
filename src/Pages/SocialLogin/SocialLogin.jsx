import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa6";


const SocialLogin = () => {
    const navigate = useNavigate();

const {googleLogin} = useContext(AuthContext);

const handleSocialLogin = (media) => {
      media()
      .then(res => {
        toast.success('User Login Successfully')
        navigate('/')
      })
      .catch(error => {
        toast.error(error.message)
    })

}


    return (
        <div>
            <button  onClick={() => handleSocialLogin(googleLogin)} className="btn btn-outline btn-warning"> <FaGoogle className="text-2xl"></FaGoogle>Sign With Google</button>
        </div>
    );
};

export default SocialLogin;