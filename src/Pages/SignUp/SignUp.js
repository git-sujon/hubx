import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Button from "../../Components/Button/Button";
import { AuthContext } from "../../Contexts/AuthProvider";

const SignUp = () => {

  const {user,  createUser,} = useContext(AuthContext)

  console.log("user", user)


  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const singUpHandler = (event) => {
    console.log("event", event);


    createUser( event?.email, event?.password)
    .then (res => res.json())
    .then(data => {
      console.log(data)
    })

  };

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
