const Footer = () => (
  <footer className="bg-purple-700 text-white py-6 text-center">
    <p>&copy; {new Date().getFullYear()} House of Opra. All rights reserved.</p>
    <div className="mt-2 space-x-4">
      <a href="#" className="hover:underline">Contact</a>
      <a href="#" className="hover:underline">Privacy</a>
      <a href="#" className="hover:underline">Instagram</a>
    </div>
  </footer>
);
export default Footer;
