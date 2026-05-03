const teamMembers = [
  { name: "Alice", role: "Chef" },
  { name: "Bob", role: "Sous Chef" },
  { name: "Charlie", role: "Manager" },
];

const Crew = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-purple-700 mb-12">Meet Our Crew</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((m, i) => (
            <div
              key={i}
              className="bg-purple-50 rounded-3xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition"
            >
              <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-gray-500">
                {m.name[0]}
              </div>
              <h3 className="text-xl font-semibold text-purple-700">{m.name}</h3>
              <p className="text-gray-700">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Crew;