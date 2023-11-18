"use client";
import { useCart } from "@/utils/CartContext";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [menu, setmenu] = useState("shop");
  const { cart } = useCart();
  const cartCount = calculateTotalQuantity(cart);
  const handleMenuClick = (category) => {
    setmenu(category);
  };
  return (
    <>
      <nav className="flex justify-around p-5 w-screen h-24 shadow-md">
        <div id="logo" className="flex items-center gap-1">
          <img src="/Assets/logo-black.png" alt="logo" className="w-24"></img>
          <p className="text-2xl">Utopia Store</p>
        </div>
        <ul className="flex items-center list-none gap-14 text-lg ">
        <li
            className={`flex flex-col items-center justify-center gap-1 cursor-pointer ${
              menu === "shop" && "active"
            }`}
            onClick={() => handleMenuClick("shop")}
          >
            <Link href="/">
              Shop
              {menu === "shop" && <hr className="border-none w-11/12 h-1 rounded bg-red-600" />}
            </Link>
          </li>
          <li
            className={`flex flex-col items-center justify-center gap-1 cursor-pointer ${
              menu === "men" && "active"
            }`}
          >
            <Link href="/men" onClick={() => handleMenuClick("men")}>
              Men
              {menu === "men" && <hr className="border-none w-11/12 h-1 rounded bg-red-600" />}
            </Link>
          </li>
          <li
            className={`flex flex-col items-center justify-center gap-1 cursor-pointer ${
              menu === "women" && "active"
            }`}
            onClick={() => handleMenuClick("women")}
          >
            <Link href="/women">
              Women
              {menu === "women" && <hr className="border-none w-11/12 h-1 rounded bg-red-600" />}
            </Link>
          </li>
          <li
            className={`flex flex-col items-center justify-center gap-1 cursor-pointer ${
              menu === "kids" && "active"
            }`}
            onClick={() => handleMenuClick("kids")}
          >
            <Link href="/kids">
              Kids
              {menu === "kids" && <hr className="border-none w-11/12 h-1 rounded bg-red-600" />}
            </Link>
          </li>
        </ul>
        <div id="logincart" className="flex items-center gap-10">
          <Link href="/login">
            <button className="w-32 h-14 outline-none border-gray-300 border  rounded-full text-lg cursor-pointer text-black">
              Login
            </button>
          </Link>

          <Link href="/cart">
            <img src="/Assets/cart_icon.png" alt="" />
          </Link>
          <div
            id="cartcount"
            className="w-4 h-4 bg-red-500 flex justify-center items-center -mt-8 -ml-11 rounded-full text-sm text-white"
          >
            {cartCount}
          </div>
        </div>
      </nav>
    </>
  );
};
const calculateTotalQuantity = (cart) => {
  return cart.reduce((total, item) => total + (item.quantity || 1), 0);
};
export default Header;
