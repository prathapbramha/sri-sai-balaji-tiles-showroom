import Image from "next/image";
import { COMPANY } from "@/constants/company";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              Premium Tiles • Granites • Interior Solutions
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              {COMPANY.tagline}
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              {COMPANY.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#products"
                className="rounded-xl bg-orange-600 px-8 py-4 font-semibold text-white transition hover:bg-orange-700"
              >
                Explore Products
              </a>

              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace("+", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border-2 border-orange-600 px-8 py-4 font-semibold text-orange-600 transition hover:bg-orange-50"
              >
                Get Quote
              </a>

            </div>

            {/* Stats */}

            <div className="mt-12 grid grid-cols-3 gap-6">

              <div>
                <h2 className="text-3xl font-bold text-orange-600">
                  10+
                </h2>
                <p className="text-gray-600">
                  Categories
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-orange-600">
                  500+
                </h2>
                <p className="text-gray-600">
                  Products
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-orange-600">
                  1000+
                </h2>
                <p className="text-gray-600">
                  Happy Customers
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="relative">

            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <Image
                src="/hero/showroom.jpg"
                alt={COMPANY.name}
                width={700}
                height={700}
                priority
                className="h-full w-full object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}