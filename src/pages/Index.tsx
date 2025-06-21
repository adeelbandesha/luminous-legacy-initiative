
import { Link } from 'react-router-dom';
import { ArrowDown, Heart, BookOpen, Users, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import { Button } from '@/components/ui/button';

const Index = () => {
  const programs = [
    {
      title: "Daheg Support",
      description: "Providing essential nutritional support through dairy products to families in need.",
      icon: <Heart className="h-8 w-8" />,
      link: "/daheg",
      color: "bg-foundation-red",
      stats: "15,420 families supported"
    },
    {
      title: "Qurbani Program",
      description: "Facilitating sacred Qurbani rituals and distributing meat to those in need.",
      icon: <Users className="h-8 w-8" />,
      link: "/qurbani",
      color: "bg-foundation-green",
      stats: "4,280 animals sacrificed"
    },
    {
      title: "Education Scholarships",
      description: "Empowering students through financial support for their educational journey.",
      icon: <BookOpen className="h-8 w-8" />,
      link: "/education",
      color: "bg-foundation-navy",
      stats: "5,430 graduates supported"
    },
    {
      title: "Welfare Services",
      description: "Comprehensive support for families facing various challenges and hardships.",
      icon: <Calendar className="h-8 w-8" />,
      link: "/welfare",
      color: "bg-foundation-gold",
      stats: "12,840 beneficiaries"
    }
  ];

  return (
    <div className="min-h-screen bg-foundation-gray-50">
      <Header />
      <HeroSection />
      
      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foundation-navy mb-4">Our Programs</h2>
            <p className="text-xl text-foundation-gray-600 max-w-3xl mx-auto">
              Comprehensive support programs designed to address the diverse needs of our communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-8">
                  <div className={`${program.color} text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {program.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foundation-navy mb-3 text-center">{program.title}</h3>
                  <p className="text-foundation-gray-600 text-center mb-4">{program.description}</p>
                  <p className="text-sm font-semibold text-foundation-red text-center mb-6">{program.stats}</p>
                  <Link to={program.link} className="block">
                    <Button className="w-full bg-foundation-gray-100 text-foundation-navy hover:bg-foundation-red hover:text-white transition-colors duration-300">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-foundation-navy to-foundation-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Over 15 years of dedicated service to communities in need
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foundation-gold mb-2">38,000+</div>
              <div className="text-foundation-gray-200">Total Beneficiaries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foundation-gold mb-2">150+</div>
              <div className="text-foundation-gray-200">Communities Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foundation-gold mb-2">4</div>
              <div className="text-foundation-gray-200">Major Programs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foundation-gold mb-2">15</div>
              <div className="text-foundation-gray-200">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-foundation-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foundation-navy mb-6">Join Our Mission</h2>
          <p className="text-xl text-foundation-gray-600 mb-8">
            Your support can make a real difference in the lives of those who need it most. 
            Together, we can build stronger, more resilient communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-foundation-red hover:bg-foundation-red/90">
              Make a Donation
            </Button>
            <Button size="lg" variant="outline" className="border-foundation-navy text-foundation-navy hover:bg-foundation-navy hover:text-white">
              Become a Volunteer
            </Button>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-foundation-green text-foundation-green hover:bg-foundation-green hover:text-white">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
