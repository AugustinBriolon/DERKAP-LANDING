import Button from "./Button";

export default function Header() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 h-16 px-4 py-2 container rounded-xl border border-black bg-white/50 backdrop-blur-md z-50">
      <ul className="h-full flex justify-between items-center">
        <li>
          <a href="#hero" className="text-black text-xl">DERKAP</a>
        </li>
        <li>
          <ul className="flex items-center gap-4">
            <li>
              <a href="#how" className="text-black font-inter font-bold text-xs">COMMENT ÇA MARCHE</a>
            </li>
            <li>
              <a href="#contact" className="text-black font-inter font-bold text-xs">CONTACT</a>
            </li>
          </ul>
        </li>
        <li>
          <Button />
        </li>
      </ul>


    </nav>
  )
}
