import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Components/Button/Button";
import CommonLink from "../../Components/Link/CommonLink";
import NewCustomer from "../../Components/NewCustomer/NewCustomer";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm();

  const resetPasswordHandler = (event) => {
    console.log("event", event);
  };



  return (
    <div className="mt-20 mb-72">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white  ">
        <div className=" py-4">
          <div className="flex flex-col justify-center mx-auto mb-6">
            <h2 className="text-4xl font-bold rajdhani-font text-center">
              Reset your password
            </h2>
            <p className="text-base text-gray-500 mt-10 ">
              We'll send you an email to reset your password.
            </p>
          </div>

          <form className="mt-10" onSubmit={handleSubmit(resetPasswordHandler)}>
            <div className="w-full mt-4">
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

            <div className="flex items-center gap-x-8 mt-10">
              <Button>Reset</Button>
              <CommonLink to={'/login'}>Cancel</CommonLink>
            </div>
          </form>
        </div>
      </div>
      <NewCustomer></NewCustomer>
    </div>
  );
};

export default ResetPassword;
