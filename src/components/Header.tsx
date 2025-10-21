const Header = () => (
  <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
    <h1 className="text-2xl font-bold text-purple-700">House of Opra</h1>
    <nav className="space-x-4">
      <a href="#about" className="text-gray-700 hover:text-purple-700">About</a>
      <a href="#membership" className="text-gray-700 hover:text-purple-700">Join</a>
      <a href="#blog" className="text-gray-700 hover:text-purple-700">Blog</a>
    </nav>
  </header>
);
export default Header;
