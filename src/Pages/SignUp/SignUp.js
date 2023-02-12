import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Button from "../../Components/Button/Button";
import { AuthContext } from "../../Contexts/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const { user, createUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const singUpHandler = (event) => {

    createUser(event?.email, event?.password)
      .then((res) => {
        storingUserData(event)
      
      })
      .catch((error) => {
        console.error(error.message);
      });
  };


  const storingUserData = (event) => {
    const users = {
      firstName: event?.firstName,
      lastName: event?.lastName,
      email: event?.email,
      password: event?.password
    }

    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users)
    })
    .then((res) => res.json())
    .then(data => {
      if(data.acknowledged){
        reset();
        toast.success("New User Created"); 
      }
    })
    .catch((err)=> console.log(err))

  }

  return (
    <div className="my-20">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white  ">
        <div className=" py-4">
          <div className="flex justify-center mx-auto">
            <h2 className="text-4xl font-bold rajdhani-font">Sign up</h2>
          </div>

          <form className="mt-10" onSubmit={handleSubmit(singUpHandler)}>
            <div className="w-full mt-4">
              <label
                for="firstName"
                className="block text-sm text-gray-900 font-semibold"
              >
                First name
              </label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border     focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                {...register("firstName", {
                  required: "THis Field is required",
                })}
                placeholder="Enter your first name"
                aria-label="First Name"
              />
              <p className="text-red-600  text-sm text-semibold mt-1">
                {errors?.firstName?.message}
              </p>
            </div>
            <div className="w-full mt-8">
              <label
                for="firstName"
                className="block text-sm text-gray-900 font-semibold"
              >
                Last name
              </label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border     focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                {...register("lastName", {
                  required: "THis Field is required",
                })}
                placeholder="Enter your last name"
                aria-label="last Name"
              />
              <p className="text-red-600  text-sm text-semibold mt-1">
                {errors?.lastName?.message}
              </p>
            </div>
            <div className="w-full mt-8">
              <label
                for="email"
                className="block text-sm text-gray-900 font-semibold"
              >
                Email
              </label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border     focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="email"
                {...register("email", { required: "THis Field is required" })}
                placeholder="your@email.com"
                aria-label="Email Address"
              />
              <p className="text-red-600  text-sm text-semibold mt-1">
                {errors?.email?.message}
              </p>
            </div>

            <div className="w-full mt-8">
              <label
                for="password"
                className="block text-sm text-gray-900 font-semibold"
              >
                Password
              </label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border     focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                {...register("password", {
                  required: "THis Field is required",
                })}
                placeholder="***********"
                aria-label="Password"
              />
              <p className="text-red-600  text-sm text-semibold mt-1">
                {errors?.password?.message}
              </p>
            </div>

            <div className="flex items-center gap-x-8 mt-10">
              <Button>Register</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
