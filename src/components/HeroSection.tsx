
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-foundation-navy via-foundation-navy/90 to-foundation-red/20 text-white py-20 lg:py-32">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Communities
            <span className="block text-foundation-gold">Through Compassion</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
            BEST Foundation is dedicated to providing educational scholarships, welfare support, 
            and essential services to those who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-foundation-red hover:bg-foundation-red/90 text-white">
              Make a Donation
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-foundation-navy">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Stats Preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-3xl font-bold text-foundation-gold">10,000+</p>
            <p className="text-sm text-gray-300">Students Supported</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foundation-gold">5,000+</p>
            <p className="text-sm text-gray-300">Families Helped</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foundation-gold">50+</p>
            <p className="text-sm text-gray-300">Communities</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-foundation-gold">15</p>
            <p className="text-sm text-gray-300">Years of Service</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-white" />
      </div>
    </section>
  );
};

export default HeroSection;
