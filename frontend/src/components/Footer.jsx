const Footer = () => (
  <footer className="bg-purple-700 text-white py-12">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold">SAUGAT KHADKA</h3>
        <p className="text-gray-200">© 2026 All Rights Reserved</p>
      </div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-purple-300 transition">
          Facebook
        </a>
        <a href="#" className="hover:text-purple-300 transition">
          Instagram
        </a>
        <a href="#" className="hover:text-purple-300 transition">
          Twitter
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;