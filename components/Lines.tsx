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
    if (!lineTextRight.current || !lineTextLeft.current) return;

    gsap.to(
      lineTextRight.current,
      {
        x: 200,
        scrollTrigger: {
          trigger: lineTextRight.current,
          scrub: true,
          start: 'top bottom+=150vh',
          end: 'bottom top-=150vh',
        },
      }
    )

    gsap.to(
      lineTextLeft.current,
      {
        x: -200,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: lineTextLeft.current,
          scrub: true,
          start: 'top bottom+=150vh',
          end: 'bottom top-=150vh',
        },
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    }
  }

  useGSAP(() => {
    scrollAnimation()
  }, [])

  return (
    <div className="h-32 w-full flex items-center justify-center">
      <div className={clsx("rotate-6 relative w-screen h-14 flex items-center justify-center gap-2", purple && "z-20")}>
        <div ref={lineTextRight} className="absolute bg-purple h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2 md:gap-4">
          {Array(50)
            .fill(null)
            .map((_, index) => (
              <p key={index}>
                <span className="text-white text-2xl text-nowrap uppercase">{textOne}</span>
                <span className="text-white text-2xl ml-2 md:ml-4">•</span>
              </p>
            ))}
        </div>
      </div>

      <div className={clsx("-rotate-6 relative w-screen h-14 flex items-center justify-center gap-2", black && "z-20")}>
        <div ref={lineTextLeft} className="absolute bg-black h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2 md:gap-4">
        {Array(50)
            .fill(null)
            .map((_, index) => (
              <p key={index}>
                <span className="text-white text-2xl text-nowrap uppercase">{textTwo}</span>
                <span className="text-white text-2xl ml-2 md:ml-4">•</span>
              </p>
            ))}
        </div>
      </div>
    </div>
  )
}