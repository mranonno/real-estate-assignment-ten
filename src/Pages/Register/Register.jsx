import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, userSignOut,updateUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.name.value;
    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long!");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Password must contain at least one uppercase letter!"
      );
    }
    if (!/[a-z]/.test(password)) {
      return toast.error(
        "Password must contain at least one lowercase letter!"
      );
    }
    createUser(email, password)
      .then(() => {
        toast.success("Account Create Successfully!!");
        updateUser(name,photo)
        userSignOut();
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  return (
    <div data-aos="zoom-in-up" data-aos-duration="1000" className="flex flex-col items-center justify-center mx-4 mt-8">
      <Helmet>
        <title>Register | Pinecrest Homes</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <form
        onSubmit={handleRegister}
        className="flex flex-col lg:w-1/3 items-center border rounded-3xl px-8 py-5"
      >
        <div className="flex items-center gap-2 md:mb-4">
          <img className="size-7" src="/logo.png" alt="logo" />
          <p className="text-2xl uppercase font-medium font-poppins text-primary">Pinecrest Homes</p>
        </div>
      <h3 className="text-3xl font-semibold mb-4 text-slate-800">Register Now</h3>
        {/***** Name Field *****/}
        <div className="w-full">
          <label htmlFor="userName">Your Full Name:</label>
          <input
            id="userName"
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered w-full mb-4"
          />
        </div>
        {/***** Email Field *****/}
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
        {/***** Photo URL Field *****/}
        <div className="w-full">
          <label htmlFor="userPhoto">Photo URL:</label>
          <input
            id="userPhoto"
            type="text"
            name="photo"
            placeholder="http://example.com/picture.jpg"
            className="input input-bordered w-full mb-4"
          />
        </div>
        {/***** Password Field *****/}
        <div className="w-full relative">
          <label htmlFor="userPassword">Password:</label>
          <input
            required
            id="userPassword"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input input-bordered w-full mb-4"
          />
          <div
            className="absolute right-4 top-10"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaRegEye />}
          </div>
        </div>
        <input
          type="submit"
          value="Register"
          className="input focus:outline-none w-full bg-primary text-white font-medium my-4 cursor-pointer"
        />
        <h3 className="text-slate-500">
          {"Already have an account? "}
          <span>
            <Link
              to={"/login"}
              className="font-bold text-slate-900 opacity-100"
            >
              Login
            </Link>
          </span>
        </h3>
      </form>
    </div>
  );
};

export default Register;
