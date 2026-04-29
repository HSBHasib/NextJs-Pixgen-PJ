"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField, useOverlayState } from "@heroui/react";
import { Edit3, User } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";

export default function EditProfileInfo() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formHandaler = async (data) => {
    try {
      const { name, image } = data;
      await authClient.updateUser({
        name: name,
        image: image,
      });

      toast.success("Profile updated!", {
        position: "top-center",
        autoClose: 600,
        transition: Bounce,
      });
    } catch (error) {
      toast.error('Something went wrong!', {
        position: "top-center",
        autoClose: 2000,
        transition: Bounce,
      });
    }
  };

  return (
    <Modal>
      <Button variant="secondary">
        <p><Edit3 size={18} className="text-gray-700" /></p>
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-purple-100 text-purple-400">
                <User className="size-7" />
              </Modal.Icon>
              <Modal.Heading>Update Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form
                  onSubmit={handleSubmit(formHandaler)}
                  className="flex flex-col gap-4"
                >
                  <TextField className="w-full" name="name" type="text">
                    <Label className="text-black pl-2">Name</Label>
                    <Input
                      placeholder="Enter your name"
                      className="bg-gray-100 w-full rounded-md"
                      {...register("name", {
                        required: true,
                        pattern: /^[a-zA-Z\s]{3,25}$/,
                      })}
                    />
                    {errors.name && (
                      <p className="text-red-500 px-2">
                        Only letters allowed (min. 3 chars)
                      </p>
                    )}
                  </TextField>
                  <TextField className="w-full" name="message">
                    <Label className="text-black pl-2">Image URL</Label>
                    <Input
                      placeholder="Enter your Image URL"
                      className="bg-gray-100 w-full rounded-md"
                      {...register("image")}
                    />
                  </TextField>
                  <Modal.Footer>
                    <Button
                      className="text-[#8037FB]"
                      
                      variant="secondary"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" slot="close" className="bg-[#8037FB]">
                      Save
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
