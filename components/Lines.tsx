import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useRef, useMemo } from "react";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

interface LinesProps {
  textOne: string;
  textTwo: string;
  purple?: boolean;
  black?: boolean;
}

interface ScrollLineProps {
  text: string;
  direction: 'left' | 'right';
  bgColor: string;
  rotate: string;
  zIndex?: boolean;
}

const ScrollLine = ({ text, direction, bgColor, rotate, zIndex }: ScrollLineProps) => {
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!lineRef.current) return;

    const xValue = direction === 'right' ? 200 : -200;

    gsap.to(lineRef.current, {
      x: xValue,
      scrollTrigger: {
        trigger: lineRef.current,
        scrub: true,
        start: 'top bottom+=150vh',
        end: 'bottom top-=150vh',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [direction]);

  const repeatedText = useMemo(() => (
    Array(50).fill(null).map((_, index) => (
      <p key={index} className="flex items-center">
        <span className="text-white text-2xl text-nowrap uppercase">{text}</span>
        <span className="text-white text-2xl ml-2 md:ml-4">•</span>
      </p>
    ))
  ), [text]);

  return (
    <div className={clsx(
      "relative w-screen h-14 flex items-center justify-center gap-2",
      rotate,
      zIndex && "z-20"
    )}>
      <div
        ref={lineRef}
        className={clsx(
          "absolute h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          "flex items-center justify-center gap-2 md:gap-4",
          bgColor
        )}
      >
        {repeatedText}
      </div>
    </div>
  );
};

export default function Lines({ textOne, textTwo, purple, black }: LinesProps) {
  return (
    <div className="h-32 w-full flex items-center justify-center">
      <ScrollLine
        text={textOne}
        direction="right"
        bgColor="bg-purple"
        rotate="rotate-6"
        zIndex={purple}
      />
      <ScrollLine
        text={textTwo}
        direction="left"
        bgColor="bg-black"
        rotate="-rotate-6"
        zIndex={black}
      />
    </div>
  );
}