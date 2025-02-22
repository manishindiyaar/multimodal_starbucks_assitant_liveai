import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b">
      <div className="flex items-center justify-between px-4 md:px-6 h-[72px] max-w-[1440px] mx-auto">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <Image src="/starbuck.svg" alt="Logo" width={51} height={51} className="h-[51px] w-[51px]" priority />
          </Link>
          {/* <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-semibold text-black hover:text-gray-600 transition-colors">
              MENU
            </Link>
            <Link href="#" className="text-sm font-semibold text-black hover:text-gray-600 transition-colors">
              REWARDS
            </Link>
            <Link href="#" className="text-sm font-semibold text-black hover:text-gray-600 transition-colors">
              GIFT CARDS
            </Link>
          </nav> */}
        </div>

        <div className="flex items-center">
          <span className="text-sm font-semibold text-gray-600">Powered by Bladex Assistant</span>
        </div>
      </div>
    </header>
  )
}

