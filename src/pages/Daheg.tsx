import { Heart, Users, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsCard from "@/components/StatsCard";
import { motion } from "framer-motion";

const Dahej = () => {
  const stats = [
    {
      title: "Dahej Distributed",
      count: 642,
      period: "This Month",
      icon: <Heart className="h-6 w-6" />,
      color: "green" as const,
    },
    {
      title: "Dahej Distributed",
      count: 2847,
      period: "This Year",
      icon: <Heart className="h-6 w-6" />,
      color: "navy" as const,
    },
    {
      title: "Total Dahej",
      count: 15420,
      period: "All Time",
      icon: <Heart className="h-6 w-6" />,
      color: "gold" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-foundation-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-foundation-red to-foundation-navy text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-pattern opacity-10"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/diagonal-striped-brick.png')",
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Dahej Support Program
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Empowering families with essential dairy nutrition through our
              heartfelt Dahej distribution initiative.
            </p>
            <motion.a
              href="#learn-more"
              className="mt-6 inline-block bg-white text-foundation-navy font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-foundation-red hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Poetic Quote Section */}
      <section className="bg-foundation-gray-100 py-12">
        <div className="max-w-3xl mx-auto text-center px-4">
          <p className="text-2xl italic text-foundation-navy font-medium">
            “Helping one person might not change the whole world, but it could change the world for one person.”
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* What is Dahej Section */}
      <section id="learn-more" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-extrabold text-foundation-navy tracking-tight">
                What is Dahej?
              </h2>
              <p className="text-lg text-foundation-gray-700 leading-relaxed">
                Dahej is a compassionate tradition of providing fresh,
                high-quality dairy products to families in need. Our program
                delivers essential nutrition, such as milk and dairy essentials,
                to support the health and well-being of children, pregnant
                mothers, and entire households.
              </p>
              <p className="text-lg text-foundation-gray-700 leading-relaxed">
                Through our dedicated network of volunteers and local partners,
                we ensure that Dahej reaches communities weekly, fostering
                stronger, healthier families with every delivery.
              </p>
              <motion.div
                className="bg-foundation-green/10 border-l-4 border-foundation-green p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-foundation-green font-semibold text-lg">
                  Our Impact This Month:
                </p>
                <p className="text-foundation-gray-700">
                  642 families received Dahej, nourishing over 2,500
                  individuals, including 800+ children.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Image with Animation */}
            <motion.div
              className="relative max-h-[400px] lg:max-h-[450px] overflow-hidden rounded-xl shadow-xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-full h-full overflow-hidden rounded-xl">
                <img
                  src="/images/Dahej.jpg"
                  alt="Dairy farming community"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="py-20 bg-foundation-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-foundation-navy mb-4 tracking-tight">
              How Our Dahej Program Works
            </h2>
            <p className="text-xl text-foundation-gray-600">
              A seamless process to deliver nutrition with care
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-foundation-red text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foundation-navy mb-2">
                Family Registration
              </h3>
              <p className="text-foundation-gray-600">
                We connect with families in need through community outreach and
                trusted referrals.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-foundation-green text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foundation-navy mb-2">
                Quality Sourcing
              </h3>
              <p className="text-foundation-gray-600">
                We partner with trusted local suppliers to source fresh,
                high-quality dairy products.
              </p>
            </motion.div>

            <motion.div
              className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-foundation-navy text-white p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-foundation-navy mb-2">
                Regular Distribution
              </h3>
              <p className="text-foundation-gray-600">
                Weekly deliveries ensure consistent nutritional support for
                every family.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Dahej;