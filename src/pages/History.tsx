import { Clock, Award, Users, HeartPulse } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const History = () => {
  const timelineEvents = [
    {
      year: "2004",
      title: "Foundation Established",
      description: "Bashir Educational Scholarship Trust (BEST) was founded by Bashir Ahmad Khan to provide educational opportunities to underprivileged students in Pakistan.",
      icon: <Award className="h-6 w-6" />,
      color: "green",
    },
    {
      year: "2009",
      title: "Scholarship Growth & Health Initiatives",
      description: "Increased scholarships from 80 to 110 and supported over 20 families with Dahej. Launched plans for a self-help hospital in Punjab.",
      icon: <Users className="h-6 w-6" />,
      color: "navy",
    },
    {
      year: "2015",
      title: "Health Program Expanded",
      description: "Introduced mobile health clinics, treating over 5,000 patients in rural Punjab in the first year.",
      icon: <HeartPulse className="h-6 w-6" />,
      color: "red",
    },
    {
      year: "2020",
      title: "Welfare Initiatives Launched",
      description: "Expanded welfare programs, including Dahej support and disaster relief in flood-affected areas of Pakistan.",
      icon: <Clock className="h-6 w-6" />,
      color: "gold",
    },
  ];

  const galleryImages = [
    {
      src: "/images/history1.jpeg",
      alt: "Students receiving scholarships in Pakistan",
      caption: "Distributing scholarships to deserving students",
    },
     {
      src: "/images/History3.jpeg",
      alt: "Students receiving scholarships in Pakistan",
      caption: "Empowering education through scholarships",
    },
    {
      src: "/images/History2.jpg",
      alt: "Mobile health clinic in rural Pakistan",
      caption: "Delivering healthcare to remote communities",
    },
    {
      src: "/images/Welfare4.jpeg",
      alt: "Community welfare event in Punjab",
      caption: "Supporting families with welfare initiatives",
    },
      {
      src: "/images/Health3.jpg",
      alt: "Community health screening event",
      caption: "Organizing free health screenings for early detection",
    },
   
    {
      src:"/images/Education2.jpeg",
      alt: "Student with a scholarship certificate",
      caption: "Fostering learning environments for every child",
    },
     {
      src:"/images/Education4.jpeg",
      alt: "Young student reading a book",
      caption: "Empowering students through access to education",
    },
    {
      src:"/images/Education5.jpeg",
      alt: "Graduates holding diplomas",
      caption: "Helping students graduate and succeed in life",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-foundation-gray-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-foundation-green to-foundation-navy text-white py-20 overflow-hidden">
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
              Our History
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              A journey of impact, transforming lives through education, health, and welfare in Pakistan since 2004.
            </p>
            <motion.a
              href="#learn-more"
              className="mt-6 inline-block bg-white text-foundation-navy font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-foundation-green hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Journey
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-12 -mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-foundation-navy mb-4 tracking-tight">
              Our Timeline
            </h2>
            <p className="text-xl text-foundation-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to empower communities across Pakistan.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
          >
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl bg-foundation-${event.color}/10 border-l-4 border-foundation-${event.color} shadow-lg hover:shadow-xl transition-shadow duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className={`text-foundation-${event.color} mb-4`}>{event.icon}</div>
                <h3 className="text-xl font-semibold text-foundation-navy mb-2">{event.year}</h3>
                <h4 className="text-lg font-medium text-foundation-gray-700 mb-2">{event.title}</h4>
                <p className="text-foundation-gray-600">{event.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Milestones Section */}
      <section id="learn-more" className="py-20 bg-foundation-gray-50">
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
              <h2 className="text-4xl font-extrabold text-foundation-navy tracking-tight">
                Key Milestones
              </h2>
              <p className="text-lg text-foundation-gray-700 leading-relaxed">
                Since its inception in 2004, the Bashir Educational Scholarship Trust (BEST) has grown from a small initiative to a transformative force, impacting thousands through scholarships, healthcare, and welfare programs in Pakistan.
              </p>
              <p className="text-lg text-foundation-gray-700 leading-relaxed">
                Founded by Bashir Ahmad Khan, BEST has expanded its reach through dedicated efforts in education, health camps, and community support, including Dahej for families and disaster relief.
              </p>
              <motion.div
                className="bg-foundation-red/10 border-l-4 border-foundation-red p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-foundation-red font-semibold text-lg">
                  Founder’s Vision (2009):
                </p>
                <p className="text-foundation-gray-700 text-sm leading-relaxed">
                  <strong>Date:</strong> January 31, 2009<br />
                  <strong>From:</strong> Bashir Ahmad Khan<br />
                  <strong>To:</strong> Dr. Ahmad Totonji<br /><br />
                  Assalam-o-Alaikum,<br />
                  I moved back to Pakistan in 2004 and joined hands with like-minded people under the banner of “Bashir Educational Scholarship Trust Regd” (BEST). It has a seven-member Board of Trustees, all well-educated and dedicated. I invested my savings in the National Investment Trust, enabling BEST to raise scholarships from 80 to 110 and support over 20 parents to wed their daughters. Dr. M. Yaqub Mirza’s generous donations have been instrumental.<br /><br />
                  Our Health Camp/Hospital project, advised to be built on a self-help basis, is nearly complete and will function once machinery is received. BEST will cover part of the machinery costs, with the government providing the rest. Community demand for our services is growing, but resources are limited. We seek support to invest in sustainable initiatives for the needy.<br /><br />
                  With best regards,<br />
                  Bashir Ahmad Khan
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Image with Animation */}
            <motion.div
              className="relative max-h-[500px] lg:max-h-[600px] overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img
                src="/images/bashir.jpeg"
                alt="Scholarship ceremony in Pakistan"
                className="rounded-2xl shadow-2xl w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/500x500?text=Image+Not+Found";
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Impact in Pictures Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-foundation-navy mb-4 tracking-tight">
              Our Impact in Pictures
            </h2>
            <p className="text-xl text-foundation-gray-600 max-w-3xl mx-auto">
              Capturing the moments that define our journey in transforming lives across Pakistan.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.3 }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 h-[400px] flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full max-h-full object-contain transform group-hover:scale-105 group-hover:rounded-2xl transition-all duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://via.placeholder.com/400x400?text=Image+Not+Found";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white text-lg font-semibold p-4">
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

export default History;