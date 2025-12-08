import { useState } from "react";
import {
  HiHome,
  HiUser,
  HiBriefcase,
  HiCode,
  HiMail,
  HiMenu,
  HiX
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "@/assets/profile.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/", icon: HiHome },
    { name: "Projects", href: "/projects", icon: HiBriefcase },
    { name: "Gallery", href: "/gallery", icon: HiBriefcase },
    { name: "About", href: "/about", icon: HiUser },
    { name: "Tools", href: "/tools", icon: HiCode },
    { name: "Connections", href: "/connections", icon: HiMail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-50/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <Link to="/" className="flex items-center group">
            <img
              src={profileImage}
              alt="Logo"
              className="w-8 h-8 rounded-full object-cover transition-transform group-hover:scale-110"
            />
          </Link>

          {/* Desktop Navigation - Centered pill container */}
          <div className="hidden md:flex items-center justify-center flex-1 px-8">
            <div className="flex items-center gap-1 bg-white rounded-full px-3 py-2 shadow-sm border border-gray-200">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side - Icon buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://github.com/GaneshShah"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              title="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="#linkedin"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
            <button className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-colors">
              <HiMail className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-200 transition-all"
          >
            {mobileMenuOpen ? (
              <HiX className="w-6 h-6 text-gray-900" />
            ) : (
              <HiMenu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 py-3 absolute top-16 left-0 right-0 bg-white shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-100 transition-all group"
              >
                <Icon className="w-5 h-5 text-gray-600 group-hover:text-cyan-600 transition-colors" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                  {item.name}
                </span>
              </Link>
            );
          })}

          {/* Mobile Social Links */}
          <div className="flex items-center gap-3 px-4 pt-3 mt-3 border-t border-gray-200">
            <a
              href="https://github.com/GaneshShah"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-all"
            >
              <FaGithub className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-600">GitHub</span>
            </a>
            <a
              href="#linkedin"
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100 transition-all"
            >
              <FaLinkedin className="w-5 h-5 text-gray-600" />
              <span className="text-sm text-gray-600">LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
