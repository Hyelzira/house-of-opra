import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const HomeFooter = () => (
  <footer className="bg-gray-800 text-gray-300 py-12">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6 text-left">
      {/* Branding & Mission */}
      <div>
        <h2 className="text-3xl font-extrabold text-white mb-4 tracking-wider">
          GFM YOUTH
        </h2>
        <p className="text-sm leading-relaxed mb-6 text-gray-400">
          Empowering the next generation through **faith, skills, and community**.
          Building leaders for a brighter future.
        </p>
        <div className="flex space-x-6 text-xl">
          <a
            href="#"
            aria-label="Instagram"
            className="transition duration-300 hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="transition duration-300 hover:text-blue-500"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="transition duration-300 hover:text-sky-500"
          >
            <FaXTwitter />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="transition duration-300 hover:text-red-600"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-purple-500 pl-3">
          Quick Links
        </h3>
        <ul className="space-y-3 text-sm">
          <li>
            <a
              href="#"
              className="hover:text-fuchsia-700 transition duration-200"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-fuchsia-700 transition duration-200"
            >
               Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-fuchsia-700 transition duration-200"
            >
              Reviews
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-fuchsia-700 transition duration-200"
            >
              Our Blog
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-fuchsia-700 transition duration-200"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Programs */}
      <div>
        <h3 className="font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-purple-500 pl-3">
          Programs
        </h3>
        <ul className="space-y-3 text-sm">
          <li>
            <a
              href="#"
              className="hover:text-fuchsia-500 transition duration-200"
            >
              Everything Tech
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-fuchsia-500 transition duration-200"
            >
              Everything Music
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-fuchsia-500 transition duration-200"
            >
              Godly Dating & Relationships
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-fuchsia-500 transition duration-200"
            >
              Everything Education
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Info */}
      <div>
        <h3 className="font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-purple-500 pl-3">
          Get in Touch
        </h3>
        <ul className="space-y-3 text-sm">
          <li>
            <p className="font-semibold text-white">EMAIL:</p>
            <a
              href="mailto:houseofoperaworld@gmail.com"
              className="hover:text-fuchsia-500 transition duration-200"
            >
              houseofoperaworld@gmail.com
            </a>
          </li>
          <li>
            <p className="font-semibold text-white">PHONE:</p>
            <a
              href="tel:+234802429018"
              className="hover:text-fuchsia-500 transition duration-200"
            >
              (+234)802 642 9018
            </a>
          </li>
          <li>
            <p className="font-semibold text-white">HOURS:</p>
            Mon - Fri: 9:00 AM - 5:00 PM (EST)
          </li>
        </ul>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
      <p>
        &copy; {new Date().getFullYear()} **GFM YOUTH**. All rights reserved.
      </p>
    </div>
  </footer>
);

export default HomeFooter;