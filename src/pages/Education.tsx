import { BookOpen, Users, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsCard from "@/components/StatsCard";
import { motion } from "framer-motion";

const Education = () => {
  const stats = [
    {
      title: "Scholarships Awarded",
      count: 40,
      period: "This Month",
      icon: <BookOpen className="h-6 w-6" />,
      color: "green" as const,
    },
    {
      title: "Students Supported",
      count: 183,
      period: "This Year",
      icon: <BookOpen className="h-6 w-6" />,
      color: "navy" as const,
    },
    {
      title: "Total Graduates",
      count: 5430,
      period: "All Time",
      icon: <BookOpen className="h-6 w-6" />,
      color: "gold" as const,
    },
  ];

  const galleryImages = [
    {
      src: "/images/Education1.jpeg",
      alt: "Students attending class",
      caption: "Celebrating student achievements and scholarships",
    },
    {
      src: "/images/Education2.jpeg",
      alt: "Student with a scholarship certificate",
      caption: "Fostering learning environments for every child",
    },
    {
      src: "/images/Education3.jpeg",
      alt: "Students studying together",
      caption: "Collaborative learning supported by our programs",
    },
    {
      src: "/images/Education4.jpeg",
      alt: "Young student reading a book",
      caption: "Empowering students through access to education",
    },
    {
      src: "/images/Education5.jpeg",
      alt: "Graduates holding diplomas",
      caption: "Helping students graduate and succeed in life",
    },
    {
      src: "/images/Education6.jpeg",
      alt: "Scholarship distribution to students",
      caption: "Empowering bright minds through scholarship support",
    },
  ];

  return (
    <div className="min-h-screen bg-foundation-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-foundation-navy to-foundation-navy/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Education Scholarships
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Empowering students through educational scholarships, creating
              opportunities for a brighter future.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Left Column - Text */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-foundation-navy mb-6">
                Transforming Lives Through Education
              </h2>
              <p className="text-foundation-gray-700 mb-4">
                Bashir Educational Scholarship Trust (BEST) was established in
                2004 to provide financial assistance to talented but
                underprivileged students. Starting with just 20 scholarships,
                the Trust has gradually expanded its reach.
              </p>
              <p className="text-foundation-gray-700 mb-6">
                Over the years, award ceremonies have been held, and the number
                of beneficiaries has grown significantly. With funding from
                generous individuals, including Mr. Bashir Ahmad Khan and
                overseas supporters, the Trust has enabled many students to
                continue their studies without financial barriers.
              </p>
              <div className="bg-foundation-navy/10 border-l-4 border-foundation-navy p-4 rounded">
                <p className="text-foundation-navy font-semibold">
                  Success Story:
                </p>
                <p className="text-foundation-gray-700">
                  The third award ceremony saw 35 scholarships distributed. With
                  increasing demand, the Trust now plans to expand to 40
                  scholarships in upcoming phases.
                </p>
              </div>
            </div>

            {/* Right Column - Image with Scroll Animation */}
            <div className="animate-scale-in">
              <motion.img
                src="/images/Education.jpg"
                alt="Student studying"
                className="rounded-lg shadow-lg w-full h-auto lg:h-full object-cover"
                initial={{ opacity: 0, scale: 0.95, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foundation-navy mb-4">
              Scholarship Programs
            </h2>
            <p className="text-xl text-foundation-gray-600">
              Supporting education at every level
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-foundation-gray-50 border-t-4 border-foundation-red">
              <div className="bg-foundation-red text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foundation-navy mb-2">
                Primary Education
              </h3>
              <p className="text-foundation-gray-600 mb-4">
                Supporting young learners with school fees, books, and supplies.
              </p>
              <p className="text-2xl font-bold text-foundation-red">
                325 Students
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-foundation-gray-50 border-t-4 border-foundation-green">
              <div className="bg-foundation-green text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foundation-navy mb-2">
                Secondary School
              </h3>
              <p className="text-foundation-gray-600 mb-4">
                Comprehensive support for high school students including
                tutoring.
              </p>
              <p className="text-2xl font-bold text-foundation-green">
                428 Students
              </p>
            </div>

            <div className="text-center p-6 rounded-lg bg-foundation-gray-50 border-t-4 border-foundation-navy">
              <div className="bg-foundation-navy text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foundation-navy mb-2">
                Higher Education
              </h3>
              <p className="text-foundation-gray-600 mb-4">
                University scholarships for exceptional students pursuing
                degrees.
              </p>
              <p className="text-2xl font-bold text-foundation-navy">
                139 Students
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact in Pictures */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-foundation-navy mb-4">
              Our Impact in Pictures
            </h2>
            <p className="text-xl text-foundation-gray-600 max-w-3xl mx-auto">
              See how your support transforms educational journeys across
              Pakistan.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-sm font-medium p-4">
                    {image.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Education;
