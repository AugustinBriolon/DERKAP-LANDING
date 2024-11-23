import clsx from "clsx";

interface LinesProps {
  textOne: string;
  textTwo: string;
  purple?: boolean;
  black?: boolean;
}

export default function Lines({ textOne, textTwo, purple, black }: LinesProps) {
  return (
    <div className="h-32 w-full flex items-center justify-center">

      <div className={clsx("rotate-6 relative w-screen h-14 flex items-center justify-center gap-2", purple && "z-20")}>
        <div className="absolute bg-purple h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2 md:gap-4">
          {Array.from({ length: 50 }, (_, i) => (
            <>
              <p key={i} className="text-white text-2xl text-nowrap uppercase">{textOne}</p>
              <p key={i} className="text-white text-2xl">•</p>
            </>
          ))}
        </div>
      </div>

      <div className={clsx("-rotate-6 relative w-screen h-14 flex items-center justify-center gap-2", black && "z-20")}>
        <div className="absolute bg-black h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2 md:gap-4">
          {Array.from({ length: 50 }, (_, i) => (
            <>
              <p key={i} className="text-white text-2xl text-nowrap uppercase">{textTwo}</p>
              <p key={i} className="text-white text-2xl">•</p>
            </>
          ))}
        </div>
      </div>

    </div>
  )
}
