import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Button from "./Button";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useLenis } from "@studio-freight/react-lenis";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const lenis = useLenis();

  const timelineAnimation = () => {
    gsap.timeline()
      .fromTo(
        ".header-link",
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        }
      )
      .fromTo(
        ".header-btn",
        {
          scale: 0.5,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "elastic.out",
        },
        "-=0.6"
      )
      .fromTo(
        ".burger-line",
        {
          scaleX: 0,
        },
        {
          scaleX: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: "power1.out",
        },
        "<"
      );
  };

  const openMenu = () => {
    const tl = gsap.timeline();
    
    if (!isOpen) {
      tl.fromTo(".nav-burger",
        {
          height: "4rem"
        },
        {
        height: "calc(100vh - 2.5rem)",
        duration: 0.8,
        ease: "power2.inOut",
      })
      .fromTo(
        ".menu-container",
        {
          height: 0
        },
        {
          height: "calc(100% - 10vh)",
          duration: 0.8,
          ease: "power2.inOut"
        },
        "<"
      )
      .fromTo(
        ".mobile-menu-item",
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out"
        },
        ">"
      );
    } else {
      tl.fromTo(
        ".mobile-menu-item",
        {
          opacity: 1,
          y: 0
        },
        {
          opacity: 0,
          y: -20,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out"
        }
      ).to(".nav-burger", {
        height: "4rem",
        duration: .6,
        ease: "power2.inOut"
      }, ">");
    }
    
    setIsOpen(!isOpen);
  };

  useGSAP(() => {
    timelineAnimation();
  });

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
    } else {
      lenis?.start();
    }
  }, [isOpen, lenis]);

  return (
    <div className="w-full max-w-screen-2xl container fixed top-5 left-1/2 -translate-x-1/2 px-2 z-50">
      <nav className="nav-burger w-full px-4 py-2 rounded-xl border-2 border-black bg-white/50 backdrop-blur-md">
        <div className="h-11 flex justify-between items-center">
          <div className="overflow-hidden">
            <a href="#hero" className="header-link text-black inline-block text-xl">
              DERKAP
            </a>
          </div>

          <div className="hidden sm:flex items-center justify-center gap-8 overflow-hidden">
            <a href="#how" className="header-link text-black font-inter font-bold text-sm inline-block">
              COMMENT ÇA MARCHE
            </a>
            <a href="#contact" className="header-link text-black font-inter font-bold text-sm inline-block">
              CONTACT
            </a>
          </div>
          <div className="hidden sm:block header-btn">
            <Button />
          </div>

          <div className="flex flex-col items-end gap-1 sm:hidden cursor-pointer" onClick={openMenu}>
            <div className="burger-line h-[2px] w-5 rounded-full bg-black origin-right"></div>
            <div className="burger-line h-[2px] w-5 rounded-full bg-black origin-right"></div>
            <div className="burger-line h-[2px] w-3 rounded-full bg-black origin-right"></div>
          </div>
        </div>

        <div className={clsx(isOpen && "pt-8", "menu-container")}>
          <div className="h-full w-full flex flex-col items-center justify-center gap-24">
            <a href="#how" className="mobile-menu-item text-black font-inter font-bold text-2xl inline-block text-center text-pretty">
              COMMENT ÇA MARCHE
            </a>
            <a href="#contact" className="mobile-menu-item text-black font-inter font-bold text-2xl inline-block text-center">
              CONTACT
            </a>
            <div className="mobile-menu-item pt-10">
              <Button />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}