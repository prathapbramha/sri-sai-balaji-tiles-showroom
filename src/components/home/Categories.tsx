const categories = [
  {
    title: "Floor Tiles",
    icon: "🏠",
    description: "Premium vitrified and ceramic floor tiles."
  },
  {
    title: "Wall Tiles",
    icon: "🧱",
    description: "Modern wall tiles for kitchens and bathrooms."
  },
  {
    title: "Granite",
    icon: "🪨",
    description: "Durable premium granite for every space."
  },
  {
    title: "Sanitary Ware",
    icon: "🚿",
    description: "Elegant bathroom fittings and sanitary products."
  }
];

export default function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Our Categories
        </h2>

        <p className="text-center text-gray-600 mt-3 mb-12">
          Everything you need to build beautiful interiors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-gray-200 p-8 text-center shadow-sm hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-5">{category.icon}</div>

              <h3 className="text-xl font-bold mb-3">
                {category.title}
              </h3>

              <p className="text-gray-600">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}