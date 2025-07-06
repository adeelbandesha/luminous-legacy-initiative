import { Calendar, BookOpen, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { useState } from "react";

const Blog = () => {
  const blogPosts = [
    {
      id: "1",
      title: "The Impact of Dahej Support on Rural Communities",
      excerpt:
        "Exploring how our Dahej program has transformed the nutritional landscape for families in rural areas.",
      category: "Dahej",
      date: "December 15, 2024",
      image: "/images/Dahej.jpg",
      readTime: "5 min read",
    },
    {
      id: "2",
      title: "Educational Scholarships: Building Tomorrow's Leaders",
      excerpt:
        "Stories of success from our scholarship recipients who are now making a difference in their communities.",
      category: "Education",
      date: "December 12, 2024",
      image: "/images/Education.jpg",
      readTime: "7 min read",
    },
    {
      id: "3",
      title: "Health Camps: Bringing Care to Communities",
      excerpt:
        "How our free health camps are making medical care accessible for underprivileged communities across Pakistan.",
      category: "Health",
      date: "December 10, 2024",
      image: "/images/Health.jpeg",
      readTime: "4 min read",
    },
    {
      id: "4",
      title: "Welfare Programs: Restoring Hope and Dignity",
      excerpt:
        "How our comprehensive welfare services are helping families overcome challenges and build better futures.",
      category: "Welfare",
      date: "December 8, 2024",
      image:
        "https://res.cloudinary.com/grand-canyon-university/image/fetch/w_750%2Ch_564%2Cc_fill%2Cg_faces%2Cq_auto/https%3A//www.gcu.edu/sites/default/files/images/articles/5fc4926e27261a42155391d31fc2c16051ac3204.jpg",
      readTime: "6 min read",
    },
   
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Dahej":
        return <Heart className="h-5 w-5" />;
      case "Education":
        return <BookOpen className="h-5 w-5" />;
      case "Health":
        return <Heart className="h-5 w-5" />;
      case "Welfare":
        return <Heart className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case "Dahej":
        return "bg-foundation-red text-white";
      case "Education":
        return "bg-foundation-navy text-white";
      case "Health":
        return "bg-foundation-green text-white";
      case "Welfare":
        return "bg-foundation-gold text-white";
      case "All":
        return "bg-foundation-gray-500 text-white";
      default:
        return "bg-foundation-gray-500 text-white";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-foundation-gray-50 to-foundation-gray-100 font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-foundation-navy/90 to-foundation-red/80 text-white py-24 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644')] bg-cover bg-center opacity-20"
          animate={{ scale: 1.1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        ></motion.div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Foundation Blog
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl max-w-3xl mx-auto mt-4 text-foundation-gray-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Discover stories of impact, program updates, and insights from our community initiatives.
            </motion.p>
            <motion.a
              href="#blog-posts"
              className="inline-block mt-8 bg-foundation-red text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-foundation-red/90 transition-all duration-300 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)" }}
            >
              Explore Posts
            </motion.a>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      {/* <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                className={`px-4 py-2 rounded-full font-semibold text-sm flex items-center space-x-2 ${getCategoryColor(category)} ${
                  selectedCategory === category ? "ring-2 ring-foundation-navy" : "hover:opacity-80"
                } transition-all duration-300`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {getCategoryIcon(category)}
                <span>{category}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Blog Posts */}
      <section id="blog-posts" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => {
              const linkTo = `/blog/${post.category.toLowerCase()}/${post.id}`;
              console.log(`Generated Link for ${post.title}: ${linkTo}`); // Debug log
              return (
                <motion.article
                  key={post.id}
                  className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 0, 0, 0.15)" }}
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-56 object-cover"
                    />
                    <div
                      className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2 ${getCategoryColor(
                        post.category
                      )}`}
                    >
                      {getCategoryIcon(post.category)}
                      <span>{post.category}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-foundation-gray-500 text-sm mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h2 className="text-xl font-bold text-foundation-navy mb-3 line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-foundation-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <Link
                      to={linkTo}
                      className="inline-flex items-center text-foundation-red hover:text-foundation-red/80 font-semibold transition-colors"
                    >
                      Read More
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      {/* <section className="py-16 bg-gradient-to-r from-foundation-navy to-foundation-gold text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-extrabold mb-4 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Stay Updated
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Subscribe to our newsletter for the latest stories and updates from our foundation.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-lg text-foundation-navy bg-white/80 backdrop-blur-lg focus:outline-none focus:ring-2 focus:ring-foundation-red"
            />
            <button className="bg-foundation-red hover:bg-foundation-red/90 px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </motion.div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Blog;