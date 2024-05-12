"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container/container";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React from "react";

const Login = () => {
  const router = useRouter();
  return (
    <Container>
      <div className="flex justify-center my-5">
        <div className="w-[400px] p-5 border-2 rounded-lg">
          <h1 className="text-center py-3 text-2xl font-bold">Kirish</h1>
          <div>
            <label htmlFor="email">
              Email
              <Input className="mb-3" type="text" id="email" />
            </label>
            <label htmlFor="password">
              Parol
              <Input type="password" id="password" />
            </label>
            <div className="flex justify-between items-center">
              <p className="text-[12px] mt-3 mb-2 underline">
                Parolingizni unutdingizmi?
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Button className="w-full">Kirish</Button>
              <Button
                className="w-full hover:bg-black hover:text-white"
                variant="outline"
                onClick={() => router.push("/register")}
              >
                Ro'yhatdan o'tish
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
