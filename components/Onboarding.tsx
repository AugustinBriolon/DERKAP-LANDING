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
        markers: true,
        start: 'top top',
        end: 'bottom +=300vh',
        pin: true,
        scrub: 1,
      }
    })
  }

  useGSAP(() => {
    pinContainer()
  }, [])


  return (
    <div ref={containerPin} className="h-screen">
      <div className="h-screen w-screen flex items-center justify-center gap-12">
        <div className="w-1/2 h-[500px]">
          <Image src="/images/mockup.webp" alt="Mockup de l'application Derkap" width={1396} height={2849} className="w-full h-auto max-h-full object-contain" />
        </div>
        <p className="max-w-1/2">Créer un groupe avec tes potes et mets les à l’épreuve grâce à DERKAP</p>
      </div>
    </div>
  )
}
