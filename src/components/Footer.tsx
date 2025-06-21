
import { Link } from 'react-router-dom';
import { Mail, Users, BookOpen, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foundation-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/18b1de3d-c6ac-467e-b9e0-2f4f8ed59bc5.png" 
                alt="BEST Foundation" 
                className="h-12 w-auto bg-white rounded p-1"
              />
              <div>
                <h3 className="text-xl font-bold">BEST Foundation</h3>
                <p className="text-foundation-gray-300">Bashir Educational Scholarship Trust</p>
              </div>
            </div>
            <p className="text-foundation-gray-300 max-w-md">
              Empowering communities through education, welfare, and sustainable support programs. 
              Building a brighter future for those in need.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2">
              <li><Link to="/daheg" className="text-foundation-gray-300 hover:text-white transition-colors">Daheg Support</Link></li>
              <li><Link to="/qurbani" className="text-foundation-gray-300 hover:text-white transition-colors">Qurbani Program</Link></li>
              <li><Link to="/education" className="text-foundation-gray-300 hover:text-white transition-colors">Education Scholarships</Link></li>
              <li><Link to="/welfare" className="text-foundation-gray-300 hover:text-white transition-colors">Welfare Services</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-foundation-gray-300">info@bestfoundation.org</span>
              </div>
              <p className="text-foundation-gray-300">
                Faisalabad, Pakistan<br />
                Serving communities worldwide
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-foundation-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foundation-gray-300">&copy; 2024 BEST Foundation. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="text-foundation-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-foundation-gray-300 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
