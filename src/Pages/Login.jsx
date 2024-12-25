import { useContext, useState } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation , useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'animate.css';
import { AuthContext } from "../AuthProvider/AuthProvier";
import { Helmet } from "react-helmet";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {signIn,googleSignIn,GithubSignIn} = useContext(AuthContext);
  // const [errorMessage,setErrorMessage] = useState('');
  // const [successMessage,setSuccessMessage] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  // console.log('location redirect', location)
  const handleGoogleLogin = () =>{
    // console.log('hello world');
    googleSignIn()
    .then(()=>{
      // // console.log(res,'doing');
      // navigate(location?.state ? location.state : '/')
      toast.success('Google Login Successful')
      setTimeout(() => {
        navigate(location?.state ? location.state : '/')
      }, 2000);
    })
    .catch((error) =>{
      console.log(error,'login in failed')
    })
  }

  const handleGithubLogin = () =>{
    console.log('Hello world');
    GithubSignIn()
    .then(()=>{
      // console.log(res,'Hi')
      toast.success('Github Login Successful')
      setTimeout(() => {
        navigate(location?.state ? location.state : '/')
      }, 2000);
     
    })
    .catch(error=>{
      console.log(error,'github Login Done')
    })
  }


  const handleLogin = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password  = e.target.password.value;
    console.log(email,password)

    signIn(email,password)
    .then(()=>{
      // console.log(res.user)
      toast.success('You Have Successfully logged in');
      setTimeout(() => {
        navigate(location?.state ? location.state : '/')
      }, 2000);
    })
    .catch(()=>{
      // console.log(error,'Kaj Hocche na ')
      toast.error('Wrong Password or Email Please Try again with correct email and password')
      // setErrorMessage(error.message)
    })
  }

  return (
    <div className="container mt-10 mx-auto">
            <Helmet>
                <title>Login</title>
            </Helmet>
      <div>
        <h1 className="text-3xl font-bold text-center my-10 animate__animated animate__fadeInDown">Login Here</h1>
      </div>
      <div className="bg-base-200">
        <div className="py-10 flex items-center justify-center rounded-xl flex-col">
          <div className=" shrink-0 w-2/3 lg:w-2/4 py-10 border rounded-xl px-2 lg:px-20 bg-base-100">
            <form onSubmit={handleLogin}>
              <div className="form-control animate__animated animate__fadeInDown">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name='email'
                  placeholder="Email"
                  className="animate__animated animate__fadeInDown input input-bordered"
                  required
                />
              </div>
              <div className="form-control animate__animated animate__fadeInDown">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    name='password'
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="input input-bordered w-full animate__animated animate__fadeInDown"
                    required
                  />
                  <span
                    className="absolute animate__animated animate__fadeInDown inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? (
                      <FaEye className="text-gray-800 text-2xl cursor-pointer" />
                    ) : (
                      <FaEyeSlash className="text-gray-800 text-2xl cursor-pointer"/>

                    )}
                  </span>
                </div>

                <label className="label animate__animated animate__fadeInDown">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
                {/* <h1 className=" text-red-700">{errorMessage}</h1> */}
                {/* <h1 className=" text-red-700">{successMessage}</h1> */}
              </div>
              <div className="form-control mt-6 animate__animated animate__fadeInDown">
                <button className="btn btn-primary bg-btn border-btn-border">
                  Login
                </button>
              </div>
            </form>
            <div className="animate__animated animate__fadeInDown">
              <h1 className="mt-5 text-center">
                Do Not Have Account? 
                <Link className="font-bold text-green-700" to="/register">
                   Register
                </Link>
              </h1>
            </div>
            <div>
              <div onClick={handleGoogleLogin} className="p-5 text-center animate__animated animate__fadeInDown bg-blue-300 rounded-xl mt-5 flex items-center justify-center gap-10 hover:bg-blue-500 cursor-pointer">
                <h1>Login With Google</h1>
                <h1 className="text-xl">
                  <BsGoogle></BsGoogle>
                </h1>
              </div>
              <div onClick={handleGithubLogin} className="p-5 text-center animate__animated animate__fadeInDown bg-blue-300 rounded-xl mt-5 flex items-center justify-center gap-10 hover:bg-blue-500 cursor-pointer">
                <h1>Login With Github</h1>
                <h1 className="text-xl">
                  <BsGithub></BsGithub>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
