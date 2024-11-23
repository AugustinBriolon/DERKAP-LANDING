import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import clsx from "clsx";
import { useRef } from "react";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LinesProps {
  textOne: string;
  textTwo: string;
  purple?: boolean;
  black?: boolean;
}

export default function Lines({ textOne, textTwo, purple, black }: LinesProps) {
  const lineTextRight = useRef<HTMLDivElement>(null);
  const lineTextLeft = useRef<HTMLDivElement>(null);

  const scrollAnimation = () => {
    if(!lineTextRight.current || !lineTextLeft.current) return;
    const animateTextRight = lineTextLeft.current.querySelectorAll('p');
    const animateTextLeft = lineTextRight.current.querySelectorAll('p');
    
    gsap.fromTo(
      animateTextRight,
      {
        x: 0,
      },
      {
        x: 150,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger:  document.documentElement,
          scrub: true,
          start: 'top 85%',
        },
      }
    )

    gsap.fromTo(
      animateTextLeft,
      {
        x: 0,
      },
      {
        x: -150,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger:  document.documentElement,
          scrub: true,
          start: 'top top',
          end: 'bottom bottom',
        },
      }
    )
  }

  useGSAP(() => {
    scrollAnimation()
  })

  return (
    <div className="h-32 w-full flex items-center justify-center">

      <div className={clsx("rotate-6 relative w-screen h-14 flex items-center justify-center gap-2", purple && "z-20")}>
        <div ref={lineTextRight} className="absolute bg-purple h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2 md:gap-4">
          {Array.from({ length: 50 }, (_, i) => (
            <div className="flex gap-4" key={`right-${i}`}>
              <p className="text-white text-2xl text-nowrap uppercase">{textOne}</p>
              <p className="text-white text-2xl">•</p>
            </div>
          ))}
        </div>
      </div>

      <div className={clsx("-rotate-6 relative w-screen h-14 flex items-center justify-center gap-2", black && "z-20")}>
        <div ref={lineTextLeft} className="absolute bg-black h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2 md:gap-4">
          {Array.from({ length: 50 }, (_, i) => (
            <div className="flex gap-4" key={`left-${i}`}>
              <p className="text-white text-2xl text-nowrap uppercase">{textTwo}</p>
              <p className="text-white text-2xl">•</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
