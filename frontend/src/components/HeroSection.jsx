import Navbar from "./Navbar.jsx";

const HeroSection = () => (
  <section id="heroSection" className="w-full bg-gradient-to-b from-purple-50 to-white">
    <Navbar />
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col gap-16">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-4 md:gap-6">
          <h1 className="text-5xl md:text-7xl font-bold text-purple-700">Delicious</h1>
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <h1 className="text-5xl md:text-6xl font-bold text-purple-600">Food</h1>
              <h1 className="text-5xl md:text-6xl font-bold text-purple-400">Dishes</h1>
            </div>
          </div>
          <div className="w-24 md:w-32 h-24 md:h-32 bg-gray-300 rounded-full mt-4 flex items-center justify-center text-gray-500">
            Logo
          </div>
        </div>
        {/* Hero Placeholder */}
        <div className="flex-1 w-full h-64 md:h-96 bg-gray-200 rounded-3xl shadow-lg flex items-center justify-center text-gray-500">
          Hero Image
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;