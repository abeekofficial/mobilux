"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const Register = () => {
  const [error, setError] = useState<string>("");

  const router = useRouter();
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    if (!isValidEmail(email)) {
      setError("Email xato kiritilgan");
      return;
    }

    if (password.length < 6 || password.length > 20) {
      setError("Parol 6-20 ta belgidan iborat bo'lishi kerak");
    }

    if (name.length < 3 || name.length > 20) {
      setError("Ism 3-20 ta belgidan iborat bo'lishi kerak");
      return;
    }

    try {
      router.push("/login");
    } catch (error) {
      setError("Ro'yhatdan o'tishda xatolik yuz berdi");
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center my-5">
      <div className="w-[400px] p-5 border-2 rounded-lg">
        <form action="" onSubmit={handleSubmit}>
          <h1 className="text-center py-3 text-2xl font-bold">
            Ro'yhatdan o'tish
          </h1>
          <label htmlFor="name">
            Ism
            <Input
              required
              className="w-full mb-3 rounded-md"
              type="text"
              id="name"
            />
          </label>
          <label htmlFor="email">
            Email
            <Input
              required
              className="w-full mb-3 rounded-md"
              type="text"
              id="email"
            />
          </label>
          <label htmlFor="password">
            Parol
            <Input
              required
              className="w-full mb-3 rounded-md"
              type="password"
              id="password"
            />
          </label>
          <p className="text-red-500">{error}</p>
          <div className="flex justify-between items-center mb-2">
            <p className="text-[13px] underline">Parolingizni unutdingizmi?</p>
            <Link href={"/login"} className="text-[13px] underline">
              Akkountingiz bormi?
            </Link>
          </div>
          <Button className="w-full">Ro'yhatdan o'tish</Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
