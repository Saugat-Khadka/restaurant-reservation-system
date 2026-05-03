const sampleDishes = [
  { id: 1, title: "Grilled Salmon", category: "Main", price: 25 },
  { id: 2, title: "Pasta Primavera", category: "Main", price: 18 },
  { id: 3, title: "Steak Medium Rare", category: "Main", price: 30 },
];

const Menu = () => {
  return (
    <section id="menu" className="w-full bg-gradient-to-b from-purple-50 to-white py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="text-center flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-700">POPULAR DISHES</h2>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto">
            Delicious dishes to satisfy your taste buds.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sampleDishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-3xl shadow-lg overflow-hidden flex flex-col items-center p-6 hover:scale-105 transition-transform"
            >
              <div className="w-full h-48 bg-gray-200 rounded-2xl mb-4 flex items-center justify-center text-gray-500">
                Dish Image
              </div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">{dish.title}</h3>
              <button className="bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
                {dish.category}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;