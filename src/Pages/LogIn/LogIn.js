import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "../../Assets/Fonts/fonts.css";
import Button from "../../Components/Button/Button";
import CommonLink from "../../Components/Link/CommonLink";
import NewCustomer from "../../Components/NewCustomer/NewCustomer";
import { AuthContext } from "../../Contexts/AuthProvider";
import toast  from 'react-hot-toast';

const LogIn = () => {
  const {user,  userLogin,} = useContext(AuthContext)
  const [error, setError] = useState("");




  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const logInHandler = (event) => {
    console.log("event", event);


    userLogin( event?.email, event?.password)
    .then (res => {
      reset()
      toast.success("Welcome Back")
      setError('')
      
    })
    .catch(error => {
  
      if ((error?.message) === 'Firebase: Error (auth/user-not-found).') {
        setError("No Such User Found");
      }
      else{
        setError('Incorrect Email or Password')
      }
    })


  };


  return (
    <div className="my-20" onSubmit={handleSubmit(logInHandler)}>
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white  ">
        <div className=" py-4">
          <div className="flex justify-center mx-auto">
            <h2 className="text-4xl font-bold rajdhani-font">Log In</h2>
          </div>

          <form className="mt-10">
            <div className="w-full mt-4">
            <label for="email" className="block text-sm text-gray-900 font-semibold">Email</label>
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
            <label for="password" className="block text-sm text-gray-900 font-semibold">Password</label>
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border     focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="password"
                {...register("password", {
                  required: "THis Field is required",
                })}
                required
                placeholder="***********"
                aria-label="Password"
              />
                  { errors?.email?.message ?
                <p className="text-red-600  text-sm text-semibold mt-3">
                {errors?.email?.message}
              </p>
              :
              <p className="text-red-600  text-sm text-semibold mt-3">
                {error}
              </p>
              }

            </div>
           
            <div className="flex items-center gap-x-8 mt-10">
            

              <Button>Login</Button>

              <CommonLink to={'/resetPassword'}>Forget Password?</CommonLink>
            </div>
          </form>
        </div>

       
      </div>
      <NewCustomer></NewCustomer>
    </div>
  );
};

export default LogIn;
