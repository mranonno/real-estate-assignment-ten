import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const UpdateUser = () => {
  const { updateUser, user } = useContext(AuthContext);
  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.photo.value;
    updateUser(name, image)
      .then(() => {
        toast.success("Update Successfully!");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  return (
    <div data-aos="zoom-in-up" data-aos-duration="1000" className="flex flex-col items-center justify-center mt-12 mx-4 font-poppins">
      <Helmet>
        <title>Update Profile | Pinecrest Homes</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <form
        onSubmit={handleUpdateProfile}
        className="flex flex-col lg:w-1/3 items-center border rounded-2xl px-8 py-5"
      >
        <div className="flex items-center gap-2 mb-4">
          <img className="size-7" src="/logo.png" alt="logo" />
          <p className="text-2xl uppercase font-medium font-poppins text-primary">
            Pinecrest Homes
          </p>
        </div>
        <h3 className="text-3xl font-semibold mb-8 text-slate-800">Update Profile</h3>
        {/***** Email Field *****/}
        <div className="w-full">
          <label htmlFor="userEmail">Registered Email:</label>
          <input
            id="userEmail"
            defaultValue={user?.email}
            type="email"
            name="email"
            disabled
            // placeholder="Name"
            className="input input-bordered w-full mb-4"
          />
        </div>
        {/***** Name Field *****/}
        <div className="w-full">
          <label htmlFor="userName">Your Full Name:</label>
          <input
            id="userName"
            defaultValue={user?.displayName}
            type="text"
            name="name"
            // placeholder="Name"
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
            defaultValue={user?.photoURL}
            className="input input-bordered w-full mb-4"
          />
        </div>
        <input
          type="submit"
          value="Update"
          className="input focus:outline-none w-full bg-primary text-white font-medium my-4 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default UpdateUser;
