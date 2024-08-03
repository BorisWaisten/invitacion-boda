'use client'
import React from "react";
import { montserrat } from "../public/fonts";

export default function SideNav() {
  return (
    <div className="fixed z-[999] bottom-4 right-4 p-2 shadow-inner shadow-rose-400 transition ease-in-out delay-150 bg-white rounded-3xl  hover:scale-110 hover:bg-primary duration-300 ">
      <a href="#confirmar" className="flex flex-col items-center" style={montserrat.style} >
         Para Confirmar 
      </a>
    </div>
  );
}
