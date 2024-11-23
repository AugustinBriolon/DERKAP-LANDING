import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Lines from "@/components/Lines";

export default function Home() {

  const timelineAnimation = () => {
    gsap.timeline().fromTo(
      ".hero-title",
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        duration: .8,
        ease: "power2.out",
      }
    ).fromTo(
      ".hero-img",
      {
        y: 100,
      },
      {
        y: 0,
        duration: .8,
        ease: "power2.out",
      },
      "<"
    )
  }

  useGSAP(() => {
    timelineAnimation()
  })

  return (
    <>
      <div className="min-h-screen w-screen">
        <div id="hero" className="h-screen py-32 flex flex-col items-center justify-start gap-8 px-2 md:px-4">
          <div className="overflow-hidden">
            <h1 className="hero-title w-full text-5xl text-center text-pretty">Tape toi des barres en <span className="text-purple">défiant</span> tes potes</h1>
          </div>
          <div className="overflow-hidden">
            <Image src="/images/img-hero.webp" alt="Trois téléphones montrant l'application Derkap" width={4188} height={3112} className="hero-img h-full w-auto object-contain" />
          </div>
        </div>
        <Lines textOne="Relève les Pdéfis" textTwo="DERKAP" black />
        <div className="h-screen"></div>
      </div>
    </>
  );
}
