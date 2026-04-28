"use client";

import React, { useState } from "react";
import { Button, Input, Checkbox, Link, Form } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";

export default function SignUpPage() {
  const [isVisible, setIsVisible] = useState(false);

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
        <Form className="flex flex-col gap-4">
          <fieldset className="space-y-2">
            <legend className="font-semibold pl-2">Name</legend>
            <Input
              isRequired
              placeholder="Enter your name"
              className="bg-gray-100 w-full"
            />
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="font-semibold pl-2">Image Url</legend>
            <Input
              isRequired
              placeholder="Enter your image url"
              className="bg-gray-100 w-full"
            />
          </fieldset>

          <fieldset className="space-y-2">
            <legend className="font-semibold pl-2">Email</legend>
            <Input
              isRequired
              placeholder="Enter your email"
              type="email"
              className="bg-gray-100 w-full"
            />
          </fieldset>

          <fieldset className="space-y-2 relative">
            <legend className="font-semibold pl-2">Password</legend>
            <Input
              isRequired
              type={isVisible ? "text" : "password"}
              placeholder="Enter you password"
              className="bg-gray-100 w-full"
            />
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                className='absolute right-2 top-1'
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
            href="auth/signin"
            className="font-bold text-black hover:opacity-80"
          >
            sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
