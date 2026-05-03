const stats = [
  { id: 1, number: "500+", title: "Dishes Served" },
  { id: 2, number: "200+", title: "Happy Customers" },
  { id: 3, number: "50+", title: "Awards Won" },
  { id: 4, number: "10+", title: "Years of Experience" },
];

const WhoAreWe = () => {
  const firstHalf = stats.slice(0, 2);
  const secondHalf = stats.slice(2);

  return (
    <section id="who_are_we" className="w-full bg-purple-50 py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Text */}
        <div className="flex-1 flex flex-col gap-6">
          {firstHalf.map((s) => (
            <div key={s.id} className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-light text-purple-700">{s.number}</h1>
              <p className="text-gray-700 text-lg">{s.title}</p>
            </div>
          ))}
        </div>

        {/* Center Placeholder */}
        <div className="flex-1 w-64 h-64 md:w-80 md:h-80 bg-gray-200 rounded-3xl shadow-lg flex items-center justify-center text-gray-500">
          Who We Are
        </div>

        {/* Right Text */}
        <div className="flex-1 flex flex-col gap-6">
          {secondHalf.map((s) => (
            <div key={s.id} className="flex flex-col items-center md:items-start text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-light text-purple-700">{s.number}</h1>
              <p className="text-gray-700 text-lg">{s.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;