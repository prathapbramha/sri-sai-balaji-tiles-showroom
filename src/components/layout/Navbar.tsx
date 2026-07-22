export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div>
          <h1 className="text-2xl font-bold text-orange-600">
            Sri Sai Balaji Tiles
          </h1>
          <p className="text-xs text-gray-500">Tiles • Granite • Sanitary</p>
        </div>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li className="hover:text-orange-600 cursor-pointer">Home</li>
          <li className="hover:text-orange-600 cursor-pointer">Products</li>
          <li className="hover:text-orange-600 cursor-pointer">Gallery</li>
          <li className="hover:text-orange-600 cursor-pointer">About</li>
          <li className="hover:text-orange-600 cursor-pointer">Contact</li>
        </ul>

        <button className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition">
          Get Quote
        </button>
      </div>
    </nav>
  );
}