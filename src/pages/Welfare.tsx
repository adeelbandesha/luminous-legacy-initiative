import { Heart, Users, Home } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsCard from "@/components/StatsCard";
import { motion } from "framer-motion";

const Welfare = () => {
  const stats = [
    {
      title: "Families Assisted",
      count: 89,
      period: "This Week",
      icon: <Heart className="h-6 w-6" />,
      color: "red" as const,
    },
    {
      title: "Welfare Cases",
      count: 342,
      period: "This Month",
      icon: <Heart className="h-6 w-6" />,
      color: "green" as const,
    },
    {
      title: "People Supported",
      count: 1567,
      period: "This Year",
      icon: <Heart className="h-6 w-6" />,
      color: "navy" as const,
    },
    {
      title: "Total Beneficiaries",
      count: 12840,
      period: "All Time",
      icon: <Heart className="h-6 w-6" />,
      color: "gold" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-foundation-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-foundation-gold to-foundation-gold/80 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welfare Services
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive welfare support for families and individuals facing
              hardship, providing dignity and hope.
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
            {/* Animated Image - Slide In from Left */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Community welfare support"
                className="rounded-lg shadow-lg w-full h-auto lg:h-full object-cover"
              />
            </motion.div>

            {/* Animated Text - Slide In from Right */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-foundation-navy mb-6">
                Comprehensive Welfare Support
              </h2>
              <p className="text-foundation-gray-700 mb-4">
                Our welfare program addresses the diverse needs of families and
                individuals facing financial hardship, health challenges, or
                other circumstances that require community support.
              </p>
              <p className="text-foundation-gray-700 mb-6">
                From emergency assistance to long-term support programs, we work
                to restore dignity and provide pathways to self-sufficiency for
                those we serve.
              </p>
              <div className="bg-foundation-gold/10 border-l-4 border-foundation-gold p-4 rounded">
                <p className="text-foundation-gold font-semibold">
                  Emergency Response:
                </p>
                <p className="text-foundation-gray-700">
                  Our 24/7 emergency support line has handled over 200 crisis
                  situations this year, providing immediate assistance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Welfare Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foundation-navy mb-4">
              Our Welfare Programs
            </h2>
            <p className="text-xl text-foundation-gray-600">
              Addressing diverse community needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-foundation-gray-50 p-6 rounded-lg border-l-4 border-foundation-red">
              <div className="flex items-center mb-4">
                <div className="bg-foundation-red text-white p-2 rounded-full mr-3">
                  <Heart className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foundation-navy">
                  Emergency Relief
                </h3>
              </div>
              <p className="text-foundation-gray-600">
                Immediate assistance for families facing crisis situations,
                including financial emergencies and urgent needs.
              </p>
            </div>

            <div className="bg-foundation-gray-50 p-6 rounded-lg border-l-4 border-foundation-green">
              <div className="flex items-center mb-4">
                <div className="bg-foundation-green text-white p-2 rounded-full mr-3">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foundation-navy">
                  Family Support
                </h3>
              </div>
              <p className="text-foundation-gray-600">
                Ongoing support for families with children, including childcare
                assistance and family counseling services.
              </p>
            </div>

            <div className="bg-foundation-gray-50 p-6 rounded-lg border-l-4 border-foundation-navy">
              <div className="flex items-center mb-4">
                <div className="bg-foundation-navy text-white p-2 rounded-full mr-3">
                  <Home className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foundation-navy">
                  Housing Assistance
                </h3>
              </div>
              <p className="text-foundation-gray-600">
                Support with housing costs, temporary accommodation, and
                assistance for those at risk of homelessness.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Welfare;
