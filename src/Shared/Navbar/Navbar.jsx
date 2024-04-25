import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, userSignOut } = useContext(AuthContext);
  const handleLogOut = () => {
    userSignOut()
      .then(() => {
        toast.success("Logout Successfully");
        navigate("/");
      })
      .catch((error) => {
        toast(error);
      });
  };

  const [isOpen, setOpen] = useState(false);
  const handleDrop = () => {
    setOpen(!isOpen);
  };

  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-primary font-medium text-lg border-b-2 border-primary"
            : "text-slate-600 hover:text-primary transform duration-500"
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-primary font-medium text-lg border-b-2 border-primary "
            : " text-slate-600 hover:text-primary transform duration-500"
        }
        to={"/aboutUs"}
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-primary font-medium text-lg border-b-2 border-primary"
            : " text-slate-600 hover:text-primary transform duration-500"
        }
        to={"/contact"}
      >
        Contact
      </NavLink>
      {user && (
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-primary font-medium text-lg border-b-2 border-primary"
              : "text-slate-600 hover:text-primary transform duration-500"
          }
          to={"/updateUser"}
        >
          Update Profile
        </NavLink>
      )}
      {user&&<button className="text-start md:hidden rounded-full border border-primary text-primary px-4" onClick={handleLogOut}>Logout</button>}
      {!user&&<Link className="text-start md:hidden rounded-full border border-primary text-primary px-4" to={"/register"}>Register</Link>}
    </>
  );
  
  return (
    <div className="flex items-center justify-between bg-base-100 py-4 md:px-8 px-2 shadow-sm font-poppins">
      {/***** Navbar Start *****/}
      <div className="relative flex items-center gap-1" data-aos="fade-right" data-aos-duration="1000">
        <div onClick={handleDrop} className="md:hidden flex flex-col">
          {!isOpen?<AiOutlineMenu className="text-2xl" data-aos="zoom-in" data-aos-duration="1000"/>:<RxCross2  className="text-2xl" data-aos="zoom-in" data-aos-duration="1000"/>}
          
          <ul className={`flex flex-col absolute shadow-lg ${isOpen?'top-12 left-0':'top-12 -left-48 '} transform duration-1000  pr-12 pl-4 border py-3 gap-2 z-10 bg-white rounded-xl`}>{links}</ul>
        </div>
        {/***** Logo & Title *****/}
        <div className="flex items-center gap-2">
          <img className="size-8" src="/logo.png" alt="logo" />
          <Link
            to={"/"}
            className="animate__animated animate__bounce text-2xl md:text-3xl font-poppins text-slate-900 font-bold"
          >
            Pinecrest <span className="text-primary">Homes</span>
          </Link>
        </div>
      </div>
      {/***** Center Nav Link *****/}
      <div data-aos-duration="1000" data-aos="fade-up" className="lg:flex items-center gap-4 hidden">{links}</div>
      {/***** Navbar End *****/}

      {user ? (
        user.photoURL ? (
          <div className="flex items-center gap-4">
            <div
              className="tooltip tooltip-bottom z-10"
              data-tip={user.displayName}
            >
              <img
                className="size-8 rounded-full"
                src={user.photoURL}
                alt={user.displayName}
              />
            </div>
            <button
              className="text-slate-900 font-medium hidden md:flex hover:text-primary"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <FaUserCircle className="text-3xl text-primary" />
            <button
              className="text-slate-900 font-medium hidden md:flex hover:text-primary"
              onClick={handleLogOut}
            >
              Logout
            </button>
          </div>
        )
      ) : (
        <div className="flex items-center">
          <button data-aos="fade-up" data-aos-duration="1000" 
            className="text-slate-900 hidden md:flex font-medium hover:text-primary"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button data-aos="fade-up" data-aos-duration="1000" 
            className="bg-primary hidden md:flex text-white px-2 py-1 md:px-4 md:py-2 rounded-full md:ml-4 ml-2 hover:bg-opacity-60"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
          <button data-aos="fade-up" data-aos-duration="1000" 
            className="bg-primary md:hidden text-white px-2  rounded-full hover:bg-opacity-60"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
