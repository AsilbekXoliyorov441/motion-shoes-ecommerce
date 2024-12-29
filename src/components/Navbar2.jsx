import React, { useState } from "react";

import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { FaRegUser } from "react-icons/fa";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { UpdateFollower } from "react-mouse-follower";
import { NavbarMenu } from "./Navbar";



const Navbar2 = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="text-black py-2 bg-gray-200  z-10">
      <div className="container flex justify-between items-center">
        <div>
          <img src={Logo} alt="" className="max-w-[100px] insert fill-white" />
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center gap-4 relative z-40">
            {NavbarMenu.map((item, index) => (
              <li key={index}>
                <UpdateFollower
                  mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 9999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference",
                  }}
                >
                  <Link
                    to={item.link}
                    className="inline-block text-base font-semibold py-2 px-3 uppercase"
                  >
                    {item.title}
                  </Link>
                </UpdateFollower>
              </li>
            ))}
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <Link>
                <button className="text-xl ps-14">
                  <ShoppingCart />
                </button>
              </Link>
            </UpdateFollower>
            <UpdateFollower
              mouseOptions={{
                backgroundColor: "white",
                zIndex: 9999,
                followSpeed: 1.5,
                scale: 5,
                mixBlendMode: "difference",
              }}
            >
              <button className="text-xl ps-8">
                <FaRegUser />
              </button>
            </UpdateFollower>
          </ul>
        </div>
        <div className="flex gap-8 md:hidden z-50">
          <Link to={"/cart"}>
            <ShoppingCart />
          </Link>
          {showMenu ? (
            <HiMenuAlt1
              onClick={toggleMenu}
              className="cursor-pointer transition-all md:hidden z-50"
              size={30}
            />
          ) : (
            <HiMenuAlt3
              onClick={toggleMenu}
              className="cursor-pointer transition-all md:hidden z-50"
              size={30}
            />
          )}
        </div>
      </div>
      <div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </div>
  );
};

export default Navbar2;
