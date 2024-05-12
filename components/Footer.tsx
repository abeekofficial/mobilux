"use client";

import Image from "next/image";
import React from "react";
import logo from "@/assets/logo.png";
import googleplay from "@/assets/googleplay.png";
import appstore from "@/assets/appstore.png";
import Container from "./ui/container/container";

const Footer = () => {
  return (
    <Container>
      <footer className="flex justify-between mb-5">
        <div className="flex flex-col gap-2">
          <Image src={logo} alt="imagee" className="mb-4" />
          <h3 className="font-semibold">Mobilux © 2022</h3>
          <p>Barcha huquqlar kafolatlangan</p>
          <div className="flex gap-3 items-center">
            <Image src={googleplay} alt="googleplay" />
            <Image src={appstore} alt="appstore" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Foydali havolalar</h3>
          <p className="text-[12px]">Bosh sahifa</p>
          <p className="text-[12px]">Yordam kerakmi?</p>
          <p className="text-[12px]">Foydalanish shartlari</p>
          <p className="text-[12px]">Maxfiylik siyosati</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Biz haqimizda</h3>
          <p className="text-[12px]">
            #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul, 03113,
            Crescent Trade ltd
          </p>
          <p className="text-[12px]">Korxona nomi:Mobilux trade</p>
          <p className="text-[12px]">Korxona rahbari:HASANBOY TURSUNOV</p>
          <p className="text-[12px]">Registratsiya raqami:433-62-00377</p>
          <p className="text-[12px]">Telefon raqam:93 000 66-44 97 000 66-44</p>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
