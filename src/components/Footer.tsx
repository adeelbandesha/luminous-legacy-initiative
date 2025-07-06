import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foundation-navy text-white mt-16 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Mission */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-4 mb-6 justify-center md:justify-start">
              <img
                src="/images/18b1de3d-c6ac-467e-b9e0-2f4f8ed59bc5.png"
                alt="BEST Foundation"
                className="h-20 w-20 bg-white rounded-full p-2 shadow-md"
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold">BEST Foundation</h3>
                <p className="text-foundation-gray-300 text-sm">
                  Bashir Educational Scholarship Trust
                </p>
              </div>
            </div>
            <p className="text-foundation-gray-300 max-w-md leading-relaxed text-center md:text-left">
              Empowering communities through education, welfare, and sustainable
              support programs. Building a brighter future for those in need.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 md:border-b pb-2 md:pb-2 border-white">
              Our Programs
            </h4>
            <ul className="space-y-2 text-foundation-gray-300 text-sm">
              <li>
                <Link to="/dahej" className="hover:text-white transition">
                  Dahej Support
                </Link>
              </li>
              <li>
                <Link to="/health" className="hover:text-white transition">
                  Health Program
                </Link>
              </li>
              <li>
                <Link to="/education" className="hover:text-white transition">
                  Education Scholarships
                </Link>
              </li>
              <li>
                <Link to="/welfare" className="hover:text-white transition">
                  Welfare Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}

          <div>
            <h4 className="text-xl lg:text-center font-semibold mb-4 md:border-b pb-2 md:pb-2 border-white text-center md:text-left">
              Contact
            </h4>
            <div className="space-y-3 text-foundation-gray-300 text-sm flex flex-col items-center md:items-start">
              <div className="flex items-center space-x-2 w-full justify-center md:justify-start">
                <Mail className="h-4 w-4 text-white flex-shrink-0" />
                <span className="leading-none">info@bestfoundation.org</span>
              </div>
              <p className="text-center md:text-left">
                Faisalabad, Pakistan
                <br />
                Serving communities worldwide
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-foundation-gray-300">
          <p>© 2024 BEST Foundation. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
