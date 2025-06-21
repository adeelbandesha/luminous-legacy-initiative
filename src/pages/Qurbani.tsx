
import { Users, Calendar, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StatsCard from '@/components/StatsCard';

const Qurbani = () => {
  const stats = [
    { title: 'Animals Sacrificed', count: 42, period: 'This Week', icon: <Heart className="h-6 w-6" />, color: 'red' as const },
    { title: 'Animals Sacrificed', count: 189, period: 'This Month', icon: <Heart className="h-6 w-6" />, color: 'green' as const },
    { title: 'Animals Sacrificed', count: 756, period: 'This Year', icon: <Heart className="h-6 w-6" />, color: 'navy' as const },
    { title: 'Total Qurbani', count: 4280, period: 'All Time', icon: <Heart className="h-6 w-6" />, color: 'gold' as const },
  ];

  return (
    <div className="min-h-screen bg-foundation-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-foundation-green to-foundation-green/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Qurbani Program</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Facilitating sacred Qurbani rituals and distributing meat to those in need during Eid al-Adha and throughout the year.
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
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1517022812141-23620dba5c23" 
                alt="Livestock for Qurbani" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foundation-navy mb-6">Our Qurbani Mission</h2>
              <p className="text-foundation-gray-700 mb-4">
                Our Qurbani program serves the dual purpose of facilitating the sacred Islamic ritual of sacrifice 
                while ensuring that fresh, halal meat reaches families who cannot afford it themselves.
              </p>
              <p className="text-foundation-gray-700 mb-6">
                We work with certified halal butchers and follow all Islamic guidelines for proper sacrifice, 
                ensuring the spiritual and practical aspects of Qurbani are respected and fulfilled.
              </p>
              <div className="bg-foundation-red/10 border-l-4 border-foundation-red p-4 rounded">
                <p className="text-foundation-red font-semibold">Eid al-Adha 2024:</p>
                <p className="text-foundation-gray-700">Over 300 animals were sacrificed, providing fresh meat to 1,200+ families across multiple communities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foundation-navy mb-4">Qurbani Process</h2>
            <p className="text-xl text-foundation-gray-600">Following Islamic principles with transparency and care</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-foundation-gray-50">
              <div className="bg-foundation-green text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foundation-navy mb-2">Animal Selection</h3>
              <p className="text-foundation-gray-600">We carefully select healthy animals that meet all Islamic requirements for Qurbani.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-foundation-gray-50">
              <div className="bg-foundation-red text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foundation-navy mb-2">Sacred Ritual</h3>
              <p className="text-foundation-gray-600">Qualified Islamic scholars oversee the sacrifice according to proper religious guidelines.</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-foundation-gray-50">
              <div className="bg-foundation-navy text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foundation-navy mb-2">Distribution</h3>
              <p className="text-foundation-gray-600">Fresh meat is distributed to needy families within hours of sacrifice, ensuring quality.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Qurbani;
