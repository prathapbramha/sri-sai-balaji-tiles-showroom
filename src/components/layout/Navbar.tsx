import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/constants/company";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-24">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-4">

            <Image
              src="/logo.png"
              alt={COMPANY.name}
              width={90}
              height={90}
              priority
              className="object-contain"
            />

            <div className="leading-tight">

              <h1 className="text-2xl font-black text-gray-900">
                Sri Sai Balaji
              </h1>

              <h2 className="text-lg font-bold text-orange-600">
                Tiles & Granites
              </h2>

              <p className="text-xs text-gray-500 mt-1">
                Premium Tiles, Granites & Interior Solutions
              </p>

            </div>

          </Link>

          {/* Navigation */}

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-10 font-semibold text-gray-700">

              <li>
                <a href="#" className="hover:text-orange-600 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-orange-600 transition">
                  Products
                </a>
              </li>

              <li>
                <a href="#brands" className="hover:text-orange-600 transition">
                  Brands
                </a>
              </li>

              <li>
                <a href="#gallery" className="hover:text-orange-600 transition">
                  Gallery
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-orange-600 transition">
                  Contact
                </a>
              </li>

            </ul>
          </nav>

          {/* Right Buttons */}

          <div className="flex items-center gap-3">

            <a
              href={`tel:${COMPANY.phone[0]}`}
              className="hidden xl:flex px-5 py-3 rounded-xl border border-orange-600 text-orange-600 font-semibold hover:bg-orange-50 transition"
            >
              📞 Call Now
            </a>

            <a
              href={`https://wa.me/${COMPANY.whatsapp.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition"
            >
              Get Quote
            </a>

          </div>

        </div>
      </div>
    </header>
  );
}