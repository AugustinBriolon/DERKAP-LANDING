import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

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
      },
    });
  };

  useGSAP(() => {
    pinContainer();
  }, []);

  return (
    <div
      ref={containerPin}
      className='h-screen max-w-screen-2xl container mx-auto mt-16'
    >
      <div className='h-screen w-full flex items-center justify-center gap-12'>
        <div className='w-1/2 h-[500px] overflow-hidden relative'>
          <Image
            src='/images/mockup-iphone.webp'
            alt="Mockup de l'application Derkap"
            width={1080}
            height={1920}
            className='w-full h-auto max-h-full object-contain z-20'
          />
          <Image
            src="/images/home.png"
            alt="Capture d'écran de l'application Derkap"
            width={1170}
            height={2532}
            className='w-full h-auto max-h-full object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0'
            />
        </div>
        <div className='overflow-hidden'>
          <p className='w-3/4 text-xl text-1'>
            Créer un groupe avec tes potes et mets les à l’épreuve grâce à
            DERKAP
          </p>
        </div>
        <div className='overflow-hidden'>
          <p className='w-3/4 text-xl text-2'>
            Vote pour celui ou celle qui réalisera le DERKAP le plus fou 🤪 
          </p>
        </div>
      </div>
    </div>
  );
}
