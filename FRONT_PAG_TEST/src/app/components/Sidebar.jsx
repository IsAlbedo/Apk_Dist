/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";

import { RiLogoutCircleRLine, } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { MdOutlineWeb } from "react-icons/md";
import { TiMessageTyping } from "react-icons/ti";

import Link from "next/link";
import { usePathname } from "next/navigation";


const Sidebar = (props) => {
  const { showMenu } = props;
  const pathname = usePathname();

  const navLinks = [
    { name: "Inicio", href: "/", icon: <IoHomeOutline  className="text-2xl" /> },
    { name: "VendeTodo", href: "/vendetodo", icon: <MdOutlineWeb className="text-2xl" /> },
    { name: "Carrito", href: "/carrito", icon: <TiMessageTyping className="text-2xl" /> },


    
  ];



  return (

    <div className={`bg-[#000000] fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between  rounded-tr-xl rounded-br-xl z-50 transition-all ${showMenu ? "left-0" : "-left-full"}`}>

      
      <div>
        <ul className="pl-4">
          <li><h1 className="text-2xl text-gray-300 uppercase font-bold text-center my-5"><img src="logo.png" alt="" /></h1></li>

          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (

              <li key={link.href} className={`${ isActive ? "bg-[#AF9189]" : "hover:bg-[#AF9189#EAE1E1]" } p-4 rounded-tl-xl rounded-bl-xl group transition-colors`} >
                <Link href={link.href} className={`${ isActive ? "bg-[#C2A595] text-[white]" : "group-hover:bg-[#C2A595] text-[#C2A595] group-hover:text-[white]" } p-4 flex justify-center rounded-xl transition-colors`} >{link.icon}
                </Link>
              </li>

            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;