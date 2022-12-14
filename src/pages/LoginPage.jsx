import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).max(32).required(),
});
// login page
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="bg-no-repeat bg-cover bg-center relative bg-[https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Flight%2520background%2F&psig=AOvVaw3RDcu9UDcoDHhRtrzOD1xn&ust=1671104119815000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDK_I2C-fsCFQAAAAAdAAAAABAY]">
          <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
          <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
            <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
              <div className="self-start hidden lg:flex flex-col  text-white">
                <h1 className="mb-3 font-bold text-5xl">TopHat </h1>
                <p className="pr-3">Empolyee Managment Software</p>
              </div>
            </div>
            <div className="flex justify-center self-center  z-10">
              <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                <div className="mb-4">
                  <h3 className="font-semibold text-2xl text-gray-800">
                    Login In{" "}
                  </h3>

                  <p className="text-gray-500">Please Login in your account.</p>
                </div>
                <div className="space-y-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 tracking-wide">
                      Email
                    </label>
                    <input
                      {...register("email")}
                      className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                      type="email"
                      placeholder="mail@gmail.com"
                      required
                    />
                    <p>{errors.email?.message}</p>
                  </div>
                  <div className="space-y-2">
                    <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                      Password
                    </label>
                    <input
                      {...register("password")}
                      className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                    <p>{errors.password?.message}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                      />{" "}
                      <label
                        htmlFor="remember_me"
                        className="ml-2 block text-sm text-gray-800"
                      >
                        Remember me
                      </label>
                    </div>
                    <div className="text-sm">
                      <span
                        href="#"
                        className="text-green-400 hover:text-green-500"
                      >
                        Forgot your password?
                      </span>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
