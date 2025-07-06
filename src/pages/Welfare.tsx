import { Heart, Users, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsCard from "@/components/StatsCard";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/images/Welfare1.jpeg",
    alt: "Welfare support distribution",
    caption: "Newly constructed school buildings in rural communities",
  },
  {
    src: "/images/Welfare2.jpeg",
    alt: "Doctor helping patient",
    caption: "School infrastructure built to promote education access",
  },
  {
    src: "/images/Welfare3.jpeg",
    alt: "Shelter support",
    caption: "Shelter provided for displaced individuals",
  },
  {
    src: "/images/Welfare4.jpeg",
    alt: "Food support",
    caption: "Providing food and nutrition to underprivileged families",
  },
];

const Welfare = () => {
  const stats = [
    {
      title: "Welfare Cases",
      count: 342,
      period: "This Month",
      icon: <Heart className="h-8 w-8" />,
      color: "green" as const,
    },
    {
      title: "People Supported",
      count: 1567,
      period: "This Year",
      icon: <Heart className="h-8 w-8" />,
      color: "navy" as const,
    },
    {
      title: "Total Beneficiaries",
      count: 12840,
      period: "All Time",
      icon: <Heart className="h-8 w-8" />,
      color: "gold" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-foundation-gray-50 overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-foundation-gold to-foundation-gold/80 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505455184861-77031f07e971')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Welfare Services
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-foundation-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Comprehensive welfare support for families and individuals, fostering dignity and hope.
            </motion.p>
            <motion.a
              href="#learn-more"
              className="inline-block bg-foundation-navy text-white px-8 py-3 rounded-full font-semibold hover:bg-foundation-navy/80 transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Learn More
            </motion.a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="transform hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <StatsCard
                  {...stat}
                  className={`bg-gradient-to-br from-foundation-${stat.color}/10 to-foundation-${stat.color}/5 shadow-lg hover:shadow-xl transition-shadow duration-300`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-extrabold text-foundation-navy mb-6">
                Comprehensive Welfare Support
              </h2>
              <p className="text-foundation-gray-700 text-lg mb-6 leading-relaxed">
                Our welfare programs address diverse needs, supporting families and individuals facing financial hardship, health challenges, or other difficulties.
              </p>
              <p className="text-foundation-gray-700 text-lg mb-8 leading-relaxed">
                From emergency assistance to long-term support, we restore dignity and provide pathways to self-sufficiency for those we serve.
              </p>
              <div className="bg-foundation-gold/10 border-l-4 border-foundation-gold p-6 rounded-lg">
                <p className="text-foundation-gold font-semibold text-lg mb-2">
                  Emergency Response:
                </p>
                <p className="text-foundation-gray-700">
                  Our 24/7 emergency support line has handled over 200 crisis situations this year, providing immediate assistance.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750%2Ch_564%2Cc_fill%2Cg_faces%2Cq_auto/https%3A//www.gcu.edu/sites/default/files/images/articles/5fc4926e27261a42155391d31fc2c16051ac3204.jpg"
                alt="Community welfare support"
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-extrabold text-foundation-navy mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Welfare in Action
            </motion.h2>
            <motion.p
              className="text-xl text-foundation-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Capturing moments from our recent welfare initiatives
            </motion.p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg mb-6 break-inside-avoid"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-base font-semibold p-4">
                    {image.caption}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Welfare Programs Section */}
      <section className="py-20 bg-foundation-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-extrabold text-foundation-navy mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Welfare Programs
            </motion.h2>
            <motion.p
              className="text-xl text-foundation-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Addressing diverse community needs
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-foundation-red hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-foundation-red text-white p-3 rounded-full mr-4">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foundation-navy">
                  Emergency Relief
                </h3>
              </div>
              <p className="text-foundation-gray-600 text-base leading-relaxed">
                Immediate assistance for families facing crisis situations, including financial emergencies and urgent needs.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-foundation-green hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-foundation-green text-white p-3 rounded-full mr-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foundation-navy">
                  Family Support
                </h3>
              </div>
              <p className="text-foundation-gray-600 text-base leading-relaxed">
                Ongoing support for families with children, including childcare assistance and family counseling services.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-foundation-navy hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="bg-foundation-navy text-white p-3 rounded-full mr-4">
                  <Home className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-foundation-navy">
                  Housing Assistance
                </h3>
              </div>
              <p className="text-foundation-gray-600 text-base leading-relaxed">
                Support with housing costs, temporary accommodation, and assistance for those at risk of homelessness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Welfare;
