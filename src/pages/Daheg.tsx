
import { Heart, Users, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StatsCard from '@/components/StatsCard';

const Daheg = () => {
  const stats = [
    { title: 'Daheg Distributed', count: 156, period: 'This Week', icon: <Heart className="h-6 w-6" />, color: 'red' as const },
    { title: 'Daheg Distributed', count: 642, period: 'This Month', icon: <Heart className="h-6 w-6" />, color: 'green' as const },
    { title: 'Daheg Distributed', count: 2847, period: 'This Year', icon: <Heart className="h-6 w-6" />, color: 'navy' as const },
    { title: 'Total Daheg', count: 15420, period: 'All Time', icon: <Heart className="h-6 w-6" />, color: 'gold' as const },
  ];

  return (
    <div className="min-h-screen bg-foundation-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-foundation-red to-foundation-red/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Daheg Support Program</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Providing essential nutritional support to families in need through our daheg distribution program.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foundation-navy mb-6">What is Daheg?</h2>
              <p className="text-foundation-gray-700 mb-4">
                Daheg is a traditional form of support providing essential dairy products to families in need. 
                Our program ensures that nutritious milk and dairy products reach those who need them most, 
                particularly focusing on children and pregnant mothers.
              </p>
              <p className="text-foundation-gray-700 mb-6">
                Through our extensive network of volunteers and partners, we distribute fresh dairy products 
                weekly to registered families, ensuring consistent nutritional support for growing children 
                and supporting family health.
              </p>
              <div className="bg-foundation-green/10 border-l-4 border-foundation-green p-4 rounded">
                <p className="text-foundation-green font-semibold">Impact This Month:</p>
                <p className="text-foundation-gray-700">642 families received regular daheg support, benefiting over 2,500 individuals including 800+ children.</p>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23" 
                alt="Dairy farming community" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foundation-navy mb-4">How Our Daheg Program Works</h2>
            <p className="text-xl text-foundation-gray-600">A systematic approach to providing nutritional support</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-foundation-gray-50">
              <div className="bg-foundation-red text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foundation-navy mb-2">Family Registration</h3>
              <p className="text-foundation-gray-600">We identify and register families in need through community outreach and referrals.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-foundation-gray-50">
              <div className="bg-foundation-green text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foundation-navy mb-2">Quality Sourcing</h3>
              <p className="text-foundation-gray-600">We source fresh, high-quality dairy products from trusted local suppliers.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-foundation-gray-50">
              <div className="bg-foundation-navy text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foundation-navy mb-2">Regular Distribution</h3>
              <p className="text-foundation-gray-600">Weekly distribution ensures consistent nutritional support for all registered families.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Daheg;
