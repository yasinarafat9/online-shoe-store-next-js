import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Menu from "./Menu";

import { IoMdHeartEmpty } from "react-icons/io"
import { BsCart } from "react-icons/bs"
import { BiMenuAltRight } from "react-icons/bi"
import { VscChromeClose } from "react-icons/vsc"
import MenuMobile from "./MenuMobile";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState('translate-y-0');
  const [lastScrolly, setLastScrolly] = useState(0);

  // Scroll down to hide navbar and scroll to show navbar code start
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrolly && !mobileMenu) {
        setShow("-translate-y-[80px]")
      }
    } else {
      setShow("translate-y-0")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrolly])

  // Scroll down to hide navbar and scroll to show navbar code end


  return (

    <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href="/">
          <img src="/logo.svg" className="w-[40px] md:w-[60px]" alt="" />
        </Link>

        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
        />

        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        <div className="flex items-center gap-2 text-black">

          {/* Icon Start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] 
            rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white
            text-[10px] md:text-[12px] flex justify-center items-center px-[2px]
            md:px-[5px]">51</div>
          </div>
          {/* Icon End */}

          {/* Icon Start */}
          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px]" />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] 
            rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white
            text-[10px] md:text-[12px] flex justify-center items-center px-[2px]
            md:px-[5px]">5</div>
            </div>
          </Link>
          {/* Icon End */}

          {/* Mobile Icon Start */}
          <div className="w-8 md:w-12 h-8 md:h-12 md:hidden rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* Mobile Icon End */}

        </div>
      </Wrapper>
    </header>


  );
};

export default Header;
