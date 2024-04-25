import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaEyeSlash, FaRegEye, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const navigate = useNavigate();
  const { loginUser, loginWithGoogle, loginWithGithub } =
    useContext(AuthContext);
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  {
    /***** handle login with email and password *****/
  }
  const handleLogin = (e) => {
    e.preventDefault();
    // toast.success("Successfully!!");
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then(() => {
        toast.success("Login Successfully!!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  {
    /***** handle login with google *****/
  }
  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(() => {
        toast.success("Login Successfully!!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  {
    /***** handle login with github *****/
  }
  const handleLoginWithGithub = () => {
    loginWithGithub()
      .then(() => {
        toast.success("Login Successfully!!");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      className="flex flex-col items-center justify-center px-4 mt-8"
    >
<Helmet>
        <title>Log In | Pinecrest Homes</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="lg:w-1/3 border rounded-3xl px-8 py-5">
        <form
        onSubmit={handleLogin}
        className="flex flex-col items-center"
      >
        <div className="flex items-center gap-2 md:mb-4">
          <img className="size-7" src="/logo.png" alt="logo" />
          <p className="text-2xl uppercase font-medium font-poppins text-primary">
            Pinecrest Homes
          </p>
        </div>
        <h3 className="text-3xl font-semibold mb-4 text-slate-800">Log in</h3>
        <div className="w-full">
          <label htmlFor="userEmail">Email Address:</label>
          <input
            required
            id="userEmail"
            type="email"
            name="email"
            placeholder="name@example.com"
            className="input input-bordered w-full mb-4"
          />
        </div>
        <div className="w-full relative">
          <label htmlFor="userPassword">Password:</label>
          <input
            required
            id="userPassword"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input input-bordered w-full"
          />
          <div
            className="absolute right-4 top-10"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaRegEye />}
          </div>
          <p className="text-slate-500">Forgot password?</p>
        </div>
        <input
          type="submit"
          value="Login"
          className="input focus:outline-none w-full bg-primary text-white font-medium my-4 cursor-pointer"
        />
        <h3 className="text-slate-500">
          {"Don't have an account? "}
          <span>
            <Link
              to={"/register"}
              className="font-bold text-slate-900 opacity-100"
            >
              Register
            </Link>
          </span>
        </h3>
      </form>
      <div>
        <div className="my-2 w-full gap-4 flex items-center justify-center">
          <hr className="w-[10%]" />
          <p>Or</p>
          <hr className="w-[10%]" />
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={handleLoginWithGoogle}
            className="border rounded-full px-8 py-2 flex items-center gap-5 justify-center"
          >
            {" "}
            <span>
              <FcGoogle />
            </span>
            Continue with Google
          </button>
          <button
            onClick={handleLoginWithGithub}
            className="border rounded-full px-8 py-2 flex items-center gap-5 justify-center"
          >
            <span>
              <FaGithub />
            </span>
            Continue with GitHub
          </button>
        </div>
      </div>
</div>

      
    </div>
  );
};

export default Login;
