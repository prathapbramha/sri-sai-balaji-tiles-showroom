export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1">
          <span className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
            Premium Tiles • Granite • Sanitary
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            Build Beautiful
            <span className="text-orange-600"> Spaces</span>
            <br />
            With Premium Tiles
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Discover premium quality floor tiles, wall tiles, granite,
            marble, sanitary ware, and bath fittings for your dream home.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition">
              Explore Products
            </button>

            <button className="border border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-lg h-96 rounded-3xl bg-orange-100 shadow-xl flex items-center justify-center">
            <span className="text-2xl text-orange-600 font-bold">
              Hero Image Here
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}