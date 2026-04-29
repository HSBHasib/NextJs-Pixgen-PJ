"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { Edit3, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";

export default function EditProfileInfo() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formHandaler = async (data) => {
    console.log(data);
    const { name, image } = data;

    const { data: dets, error } = await authClient.updateUser.email({
      name,
      image,
    });

    console.log("data is = ", dets);
    console.log("error is = ", error);

    // Success
    if (dets) {
      toast.success("Update Profile Successful", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      reset();
    }

    // Error
    if (error) {
      toast.error('Something went wrong', {
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
    <Modal>
      <Button variant="secondary">
        <Edit3 size={18} className="text-gray-700" />
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
                    <p className="text-gray-600 px-2">Only letters allowed (min. 3 chars)</p>
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
                      slot="close"
                      variant="secondary"
                    >
                      Cancel
                    </Button>
                    <Button type="submit" className="bg-[#8037FB]" slot="close">
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
