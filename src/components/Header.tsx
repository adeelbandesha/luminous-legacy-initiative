import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect logic
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Dahej", href: "/dahej" },
    { name: "Health", href: "/health" },
    { name: "Education", href: "/education" },
    { name: "Welfare", href: "/welfare" },
    { name: "Blog", href: "/blog" },
    { name: "History", href: "/history" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div
          className="flex justify-between items-center"
          style={{ height: "70px" }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <motion.img
              src="/images/18b1de3d-c6ac-467e-b9e0-2f4f8ed59bc5.png"
              alt="Foundation Logo"
              className="h-16 w-auto navbar-logo"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`nav-link text-sm font-medium tracking-wide ${
                  isActive(item.href)
                    ? "active text-foundation-red"
                    : "text-foundation-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Donate Button */}
          <div className="hidden sm:block">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-foundation-green donate-button text-white font-semibold rounded-full px-6 py-2">
                Donate Now
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-foundation-gray-700 menu-icon active" />
              ) : (
                <Menu className="h-6 w-6 text-foundation-gray-700 menu-icon" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu lg:hidden"
              transition={{ duration: 0.1 }}
            >
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`nav-link text-sm font-medium rounded-md px-4 py-3 ${
                      isActive(item.href)
                        ? "bg-foundation-red text-white"
                        : "text-foundation-gray-700 hover:bg-foundation-gray-100 hover:text-foundation-red"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{}}>
                  <Button className="rounded-full bg-foundation-green px-4 py-2 text-sm font-semibold text-white mx-4">
                    Donate Now
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
