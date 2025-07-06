
import { Heart, Users, BookOpen, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Compassion",
      description: "We approach every situation with empathy and understanding, recognizing the dignity in every person we serve."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community",
      description: "We believe in the power of community and work to strengthen bonds between people and neighborhoods."
    },
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Education",
      description: "We see education as the foundation for personal growth and community development."
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Sustainability",
      description: "We focus on creating lasting change through sustainable programs and community empowerment."
    }
  ];

  return (
    <div className="min-h-screen bg-foundation-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-foundation-navy to-foundation-red text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About BEST Foundation</h1>
            <p className="text-xl max-w-4xl mx-auto">
              Bashir Educational Scholarship Trust (BEST) Foundation has been a beacon of hope for communities 
              across Pakistan and beyond, providing education, welfare, and essential services to those who need it most.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foundation-navy mb-6">Our Mission</h2>
              <p className="text-foundation-gray-700 mb-4 text-lg">
                To empower individuals and communities through comprehensive support programs that address 
                education, welfare, and basic human needs, fostering dignity, hope, and sustainable development.
              </p>
              <p className="text-foundation-gray-700 mb-6">
                Founded with the vision of creating lasting positive change, BEST Foundation operates on the 
                principle that every person deserves access to education, nutrition, and essential services 
                regardless of their economic circumstances.
              </p>
              <div className="bg-foundation-red/10 border-l-4 border-foundation-red p-4 rounded">
                <p className="text-foundation-red font-semibold">Our Vision:</p>
                <p className="text-foundation-gray-700">A world where every individual has the opportunity to reach their full potential through education and community support.</p>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="/images/18b1de3d-c6ac-467e-b9e0-2f4f8ed59bc5.png" 
                alt="BEST Foundation Logo" 
                className="w-full max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foundation-navy mb-4">Our Core Values</h2>
            <p className="text-xl text-foundation-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-foundation-gray-50 animate-scale-in">
                <div className="bg-foundation-red text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-foundation-navy mb-2">{value.title}</h3>
                <p className="text-foundation-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foundation-navy mb-4">Our Journey</h2>
            <p className="text-xl text-foundation-gray-600">Building a legacy of service and impact</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-foundation-red text-white p-2 rounded-full flex-shrink-0">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foundation-navy mb-2">2009 - Foundation Established</h3>
                  <p className="text-foundation-gray-700">BEST Foundation was established in Faisalabad with a mission to provide educational opportunities to underprivileged students.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-foundation-green text-white p-2 rounded-full flex-shrink-0">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foundation-navy mb-2">2012 - Program Expansion</h3>
                  <p className="text-foundation-gray-700">Expanded services to include daheg distribution and welfare support, reaching over 1,000 families in the first year.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-foundation-navy text-white p-2 rounded-full flex-shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foundation-navy mb-2">2018 - International Reach</h3>
                  <p className="text-foundation-gray-700">Began serving Pakistani communities in America, establishing partnerships with local organizations for greater impact.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-foundation-gold text-white p-2 rounded-full flex-shrink-0">
                  <Heart className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foundation-navy mb-2">2024 - Digital Transformation</h3>
                  <p className="text-foundation-gray-700">Launched our digital platform to better serve communities and provide transparent reporting on our impact and programs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
