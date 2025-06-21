
import { BookOpen, Users, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StatsCard from '@/components/StatsCard';

const Education = () => {
  const stats = [
    { title: 'New Scholarships', count: 25, period: 'This Week', icon: <BookOpen className="h-6 w-6" />, color: 'red' as const },
    { title: 'Scholarships Awarded', count: 156, period: 'This Month', icon: <BookOpen className="h-6 w-6" />, color: 'green' as const },
    { title: 'Students Supported', count: 892, period: 'This Year', icon: <BookOpen className="h-6 w-6" />, color: 'navy' as const },
    { title: 'Total Graduates', count: 5430, period: 'All Time', icon: <BookOpen className="h-6 w-6" />, color: 'gold' as const },
  ];

  return (
    <div className="min-h-screen bg-foundation-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-foundation-navy to-foundation-navy/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Education Scholarships</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering students through educational scholarships, creating opportunities for a brighter future.
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
              <h2 className="text-3xl font-bold text-foundation-navy mb-6">Transforming Lives Through Education</h2>
              <p className="text-foundation-gray-700 mb-4">
                Education is the foundation of progress. Our scholarship program provides financial support to 
                deserving students who demonstrate academic excellence but lack the resources to pursue their dreams.
              </p>
              <p className="text-foundation-gray-700 mb-6">
                From primary school to university level, we support students across all educational stages, 
                ensuring that financial constraints never become a barrier to learning and growth.
              </p>
              <div className="bg-foundation-navy/10 border-l-4 border-foundation-navy p-4 rounded">
                <p className="text-foundation-navy font-semibold">Success Story:</p>
                <p className="text-foundation-gray-700">This year, 45 of our scholarship recipients graduated from university, with 38 securing employment in their chosen fields.</p>
              </div>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Student studying" 
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foundation-navy mb-4">Scholarship Programs</h2>
            <p className="text-xl text-foundation-gray-600">Supporting education at every level</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-foundation-gray-50 border-t-4 border-foundation-red">
              <div className="bg-foundation-red text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foundation-navy mb-2">Primary Education</h3>
              <p className="text-foundation-gray-600 mb-4">Supporting young learners with school fees, books, and supplies.</p>
              <p className="text-2xl font-bold text-foundation-red">325 Students</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-foundation-gray-50 border-t-4 border-foundation-green">
              <div className="bg-foundation-green text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foundation-navy mb-2">Secondary School</h3>
              <p className="text-foundation-gray-600 mb-4">Comprehensive support for high school students including tutoring.</p>
              <p className="text-2xl font-bold text-foundation-green">428 Students</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-foundation-gray-50 border-t-4 border-foundation-navy">
              <div className="bg-foundation-navy text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foundation-navy mb-2">Higher Education</h3>
              <p className="text-foundation-gray-600 mb-4">University scholarships for exceptional students pursuing degrees.</p>
              <p className="text-2xl font-bold text-foundation-navy">139 Students</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;
