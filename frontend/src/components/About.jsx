const About = () => {
  return (
    <section id="about" className="w-full bg-white py-20 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-700">ABOUT US</h2>
          <p className="text-purple-600 font-semibold">The only thing we're serious about is food.</p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, veniam!
          </p>
        </div>
        {/* Image Placeholder */}
        <div className="flex-1 w-full h-64 md:h-80 bg-gray-200 rounded-3xl shadow-lg flex items-center justify-center text-gray-500">
          About Image
        </div>
      </div>
    </section>
  );
};

export default About;