"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import { addToWaitlist } from "./action";
import Link from "next/link";
import { ArrowLeftToLine } from "lucide-react";

// Zod schema for form validation
const waitlistSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

export default function Waitlist() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
  });

  const onSubmit = async (data: WaitlistFormData) => {
    try {
      const result = await addToWaitlist(data);

      if (result.success) {
        toast.success(result.message, {
          icon: "✅",
          duration: 4000,
          style: {
            padding: "16px 32px",
            color: "#6666ff",
          },
        });
        reset();
      } else {
        console.error("Error submitting form", result);
        toast.error(result.message, {
          icon: "❌",
          duration: 4000,
          style: {
            padding: "16px 32px",
            color: "#FF0000",
          },
        });
      }
    } catch {
      toast.error("Something went wrong", {
        duration: 4000,
        style: {
          padding: "16px 32px",
          color: "#FF0000",
        },
      });
    }
  };
  return (
    <>
      <main className="relative min-h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg-waitlist.jpg"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <button className="fixed top-4 left-4 z-20 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md hover:bg-white/90 duration-200 cursor-pointer">
          <Link href="/" className="text-primary font-medium">
          <ArrowLeftToLine  />
          </Link>
        </button>

        <section className="relative z-10 min-h-screen flex flex-col justify-center items-center px-4">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md mx-auto border border-black space-y-3"
          >
            <div className="w-16 h-16 bg-ring/20 rounded-[50%] flex items-center justify-center">
              <Image
                src="/logo-vector.svg"
                width={30}
                height={30}
                alt="Logo"
                className=""
              />
            </div>

            <div className="">
              <h1 className="text-primary text-3xl font-bold">
                Join Our Waitlist
              </h1>
              <p className="font-light">Kindly enter your details below</p>

              <div className="w-full mt-4">
                <label htmlFor="name" className="relative text-sm">
                  Full Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="John Doe"
                  className="peer mt-0.5 p-3 py-3 outline-none border w-full rounded-lg border-gray-300 text-sm md:text-base focus:border-primary focus:ring-1 focus:ring-primary"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className="w-full mt-4">
                <label htmlFor="email" className="relative text-sm">
                  Email Address
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="john.doe@example.com"
                  className="peer mt-0.5 p-3 py-3 outline-none border w-full rounded-lg border-gray-300 text-sm md:text-base focus:border-primary focus:ring-1 focus:ring-primary"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm mt-1 block">
                    {errors.email.message}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-4 w-full py-3 bg-primary text-white rounded-lg cursor-pointer duration-200 hover:bg-primary/90 active:scale-95 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
