import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Onboarding() {

  const containerPin = useRef<HTMLDivElement>(null);

  const pinContainer = () => {
    if (!containerPin.current) return;

    gsap.to(containerPin.current, {
      scrollTrigger: {
        trigger: containerPin.current,
        start: 'top top',
        end: 'bottom +=300vh',
        pin: true,
        scrub: 1,
        snap: {
          snapTo: [0.27, 1],
          delay: 0,
          ease: 'power2.inOut',
          duration: { min: 0.2, max: 1.2 },
        },
      }
    })
  }

  useGSAP(() => {
    pinContainer()
  }, [])


  return (
    <div ref={containerPin} className="h-screen">
      <div className="h-screen w-screen flex items-center justify-center gap-12">
        <div className="w-1/2 h-[500px] overflow-hidden">
          <Image src="/images/mockup-iphone.webp" alt="Mockup de l'application Derkap" width={1080} height={1920} className="w-full h-auto max-h-full object-contain" />
        </div>
        <div className="overflow-hidden"></div>
        <p className="w-1/2 text-xl">Créer un groupe avec tes potes et mets les à l’épreuve grâce à DERKAP</p>
      </div>
    </div>
  )
}
