"use client";

import React, { useState } from "react";
import { Button, Input, Link, Form } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";

export default function SignUpPage() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandaler = async (data) => {
    console.log(data);
    const { name, image, email, password } = data;

    const { data: dets, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    console.log("data is = ", dets);
    console.log("error is = ", error);

    // Success
    if (dets) {
      toast.success("Sign up Successful", {
        position: "top-center",
        autoClose: 600,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      reset();

      setTimeout(() => {
        router.push("/");
      }, 600);
    }

    // Error
    if (error) {
      toast.error(error.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-500 text-sm mt-1">
            Join PixGen to start generating images
          </p>
        </div>

        {/* Signup Form */}
        <Form
          onSubmit={handleSubmit(formHandaler)}
          className="flex flex-col gap-4"
        >
          {/* Name */}
          <fieldset className="space-y-2">
            <legend className="font-semibold pl-2">Name</legend>
            <Input
              required
              placeholder="Enter your name"
              className="bg-gray-100 w-full"
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </fieldset>

          {/* Image url */}
          <fieldset className="space-y-2">
            <legend className="font-semibold pl-2">Image Url</legend>
            <Input
              required
              placeholder="Enter your image url"
              className="bg-gray-100 w-full"
              {...register("image", { required: true })}
            />
            {errors.image && <span>This field is required</span>}
          </fieldset>

          {/* Email */}
          <fieldset className="space-y-2">
            <legend className="font-semibold pl-2">Email</legend>
            <Input
              required
              placeholder="Enter your email"
              type="email"
              className="bg-gray-100 w-full"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </fieldset>

          {/* Password */}
          <fieldset className="space-y-2 relative">
            <legend className="font-semibold pl-2">Password</legend>
            <Input
              required
              type={isVisible ? "text" : "password"}
              placeholder="Enter you password"
              className="bg-gray-100 w-full"
              {...register("password", { required: true })}
            />
            {errors.password && <span>This field is required</span>}
            <Button
              isIconOnly
              aria-label={isVisible ? "Hide password" : "Show password"}
              size="sm"
              variant="ghost"
              className="absolute right-2 top-1"
              onClick={() => setIsVisible(!isVisible)}
            >
              {isVisible ? (
                <FaEye className="size-4" />
              ) : (
                <FaEyeSlash className="size-4" />
              )}
            </Button>
          </fieldset>

          <Button
            className="w-full bg-black text-white font-semibold mt-2"
            size="lg"
            type="submit"
          >
            Sign Up
          </Button>

          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-xs">OR</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <Button
            variant="tertiary"
            className="w-full border-gray-200 font-medium"
          >
            <FcGoogle />
            Sign up with Google
          </Button>

          <Button
            variant="tertiary"
            className="w-full border-gray-200 font-medium"
          >
            <FaGithub />
            Sign up with Github
          </Button>
        </Form>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <Link
            href="/auth/signin"
            className="font-bold text-black hover:opacity-80"
          >
            sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
