import {
  Calendar,
  Heart,
  Users,
  Share2,
  ArrowUp,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const HealthBlog = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const blogPost = {
    id: "3",
    title: "Building a Model Health Center for Rural Pakistan",
    category: "Health",
    date: "January 31, 2009",
    image: "/images/Health.jpeg",

    readTime: "4 min read",
    content: String.raw`
The **Bashir Educational Scholarship Trust (BEST)** is dedicated to creating a healthier and more hopeful future for rural Pakistan. One of our most impactful missions is the transformation of the **Zila Council Dispensary** in **Chak No. 485 GB, Samundri, Faisalabad**—a simple building being reborn into a **Model Health Center** that brings life-saving care to those who need it most.

---

### 🌟 A Vision of Healing in the Heart of Punjab

In partnership with the **Punjab Rural Support Program (PRSP)**, we identified a pressing need: rural families suffering in silence without access to basic healthcare. With a vision to uplift, heal, and empower, we embarked on a journey to build a **Model Health Center**—one that offers dignity, compassion, and care.

> *“Healthcare is not a luxury. It is a right—and we are here to make it accessible.”*  
> — **Bashir Ahmad Khan**, Chairman, BEST

---

### 🏥 Project Highlights

- 📍 **Location:** Chak No. 485 GB, Samundri, Faisalabad  
- 💸 **Estimated Cost:** PKR 3.5 million  
- 🤝 **Community Raised:** PKR 200,000  
- 🧑‍⚕️ **Staff & Equipment:** 80% provided by PRSP, 20% funded by BEST  
- 🔨 **Status:** Construction nearing completion

---

### 🤝 Powered by the People

What makes this project remarkable isn't just the bricks and mortar—it's the **spirit of unity**. Despite extreme financial hardship, villagers donated what little they had—**PKR 200,000**—to help this dream become reality. Their support is a powerful reminder: even the smallest contributions, when combined, build something lasting.

---

### 🧱 Brick by Brick: Overcoming Obstacles

Our founder, **Bashir Ahmad Khan**, poured his personal savings into this cause. Philanthropists like **Dr. M. Yaqub Mirza** joined hands with us. But challenges remain: we still need additional funding to cover construction and equipment.

These hurdles haven’t slowed us down—they've **ignited our determination**.

---

### 💡 Why It Matters

This health center is not just a building—it’s **a beacon of hope** for families who once had nowhere to turn. From emergency care to maternal support, this center will:

- Reduce **preventable diseases**
- Support **maternal and child health**
- Provide **accessible diagnostics and treatment**
- Build **trust in rural healthcare**

---

### 🌍 Together, We Heal

We believe in **community-led change**—where people are empowered, voices are heard, and futures are reshaped. This Model Health Center is just the beginning.

Your support can write the next chapter.

---

### ❤️ Be a Part of the Impact

Every donation brings us one step closer to opening the doors of this health center. One step closer to saving a life. One step closer to transforming a village.

**Join us. Heal with us. Change lives with us.**

👉 [Donate now](/donate) and become a hero for rural Pakistan.
`

  };

  if (id !== blogPost.id) {
    return (
      <div className="min-h-screen bg-foundation-gray-50 text-center pt-20">
        <h2 className="text-3xl font-bold text-foundation-navy font-serif">
          Blog Post Not Found
        </h2>
        <Link
          to="/blog"
          className="inline-flex items-center text-foundation-red hover:text-foundation-red/80 font-semibold mt-6 text-lg transition-colors"
        >
          Back to Blog
          <svg
            className="w-6 h-6 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Link>
      </div>
    );
  }

  const markdownComponents = {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-foundation-navy font-serif mb-8 mt-12 relative break-words overflow-wrap break-word">
        {children}
        <motion.span
          className="absolute bottom-0 left-0 w-20 h-1 bg-foundation-gold"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        />
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-foundation-navy font-serif mt-10 mb-6 relative break-words overflow-wrap break-word">
        {children}
        <motion.span
          className="absolute bottom-0 left-0 w-16 h-1 bg-foundation-red"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-foundation-navy font-serif mt-8 mb-4 break-words overflow-wrap break-word">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <motion.p
        className="text-foundation-gray-800 font-sans text-lg leading-normal mb-4 tracking-tight break-words overflow-wrap break-word whitespace-pre-wrap text-justify"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-foundation-gray-800 font-sans text-lg leading-normal mb-4 pl-4 break-words overflow-wrap break-word whitespace-pre-wrap">
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li className="mb-2 break-words overflow-wrap break-word whitespace-pre-wrap">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-foundation-gold pl-6 py-4 my-6 bg-foundation-gray-50/50 rounded-r-lg italic text-foundation-gray-700 font-sans text-lg leading-normal break-words overflow-wrap break-word">
        {children}
      </blockquote>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-foundation-navy break-words overflow-wrap break-word">
        {children}
      </strong>
    ),
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen bg-foundation-gray-50 font-sans"
      ref={containerRef}
    >
      <Header />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-foundation-red z-50 overflow-x-hidden"
        style={{ width: progressWidth }}
      />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center text-white overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${blogPost.image})` }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foundation-navy/90 to-foundation-red/90"></div>
        <motion.div
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-15"
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="relative container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight font-serif leading-tight drop-shadow-2xl break-words overflow-wrap break-word"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {blogPost.title}
          </motion.h1>
          <motion.div
            className="flex justify-center items-center space-x-6 text-lg mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center">
              <Calendar className="h-6 w-6 mr-3" />
              <span>{blogPost.date}</span>
            </div>
            <span className="text-foundation-gray-200">•</span>
            <span>{blogPost.readTime}</span>
            <span className="text-foundation-gray-200">•</span>
            <div className="flex items-center bg-foundation-navy/90 text-white px-6 py-2 rounded-full shadow-lg backdrop-blur-md">
              <Heart className="h-6 w-6 mr-3" />
              <span className="font-semibold">{blogPost.category}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-24 relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <motion.div
            className="lg:w-2/3 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-10 md:p-16 border border-foundation-gray-200 overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.img
              src={blogPost.image}
              alt={blogPost.title}
              className="w-full h-[500px] object-cover rounded-2xl mb-10 shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            />
            <motion.div
              className="w-full max-w-full overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="px-4 sm:px-6 lg:px-8 overflow-wrap break-word">
                <ReactMarkdown
                  components={markdownComponents}
                  remarkPlugins={[remarkGfm]}
                //   className="markdown-content"
                >
                  {blogPost.content}
                </ReactMarkdown>
              </div>
            </motion.div>

            {/* Decorative Divider */}
            <motion.div
              className="my-12 h-1 bg-gradient-to-r from-foundation-gold to-foundation-red rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />

            {/* Key Impact Section */}
            <motion.div
              className="mt-16 bg-gradient-to-r from-foundation-gray-50 to-foundation-gray-100 rounded-2xl p-10 shadow-inner overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-foundation-navy mb-8 font-serif relative">
                Key Impact
                <motion.span
                  className="absolute bottom-0 left-0 w-12 h-1 bg-foundation-gold"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Users,
                    title: "PKR 3.5M",
                    desc: "Estimated cost of the Model Health Center",
                  },
                  {
                    icon: Heart,
                    title: "PKR 200,000",
                    desc: "Raised by the local community",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <stat.icon className="h-14 w-14 mx-auto text-foundation-navy mb-4" />
                    <p className="text-2xl font-semibold text-foundation-navy break-words">
                      {stat.title}
                    </p>
                    <p className="text-foundation-gray-600 mt-2 break-words">
                      {stat.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/donate"
                className="inline-flex items-center bg-foundation-red text-white px-10 py-4 rounded-full font-semibold text-lg font-serif hover:bg-foundation-red/80 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Support Our Mission
                <svg
                  className="w-6 h-6 ml-3"
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
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.aside
            className="lg:w-1/3 sticky top-20 self-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-foundation-gray-200 overflow-hidden">
              <h3 className="text-2xl font-bold text-foundation-navy mb-6 font-serif">
                Share This Story
              </h3>
              <div className="flex gap-4">
                {[
                  {
                    name: "Twitter",
                    url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      window.location.href
                    )}&text=${encodeURIComponent(blogPost.title)}`,
                  },
                  {
                    name: "Facebook",
                    url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      window.location.href
                    )}`,
                  },
                  {
                    name: "LinkedIn",
                    url: `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
                      window.location.href
                    )}&title=${encodeURIComponent(blogPost.title)}`,
                  },
                ].map((platform) => (
                  <motion.a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-14 h-14 bg-foundation-gray-100 rounded-full hover:bg-foundation-red/20 transition-colors"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Share2 className="h-7 w-7 text-foundation-navy" />
                  </motion.a>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-foundation-navy mb-6 font-serif">
                  Explore More
                </h3>
                <ul className="space-y-4">
                  {[
                    { to: "/blog", text: "All Blog Posts" },
                    { to: "/about", text: "About Our Mission" },
                    { to: "/contact", text: "Get in Touch" },
                  ].map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link
                        to={link.to}
                        className="text-foundation-red hover:text-foundation-red/80 font-semibold text-lg transition-colors"
                      >
                        {link.text}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-foundation-navy mb-6 font-serif">
                  Related Posts
                </h3>
                <ul className="space-y-4">
                  {[
                    {
                      title: "The Impact of Dahej Support on Rural Communities",
                      to: "/blog/dahej/1",
                    },
                    {
                      title: "Educational Scholarships: Building Tomorrow's Leaders",
                      to: "/blog/education/3",
                    },
                  ].map((post, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                      <Link
                        to={post.to}
                        className="text-foundation-gray-700 hover:text-foundation-red font-medium transition-colors break-words"
                      >
                        {post.title}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-r from-foundation-navy to-foundation-gold text-white relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/subtle-dots.png')] opacity-10"
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight font-serif"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Stay Inspired
          </motion.h2>
          <motion.p
            className="text-xl mb-10 max-w-2xl mx-auto font-sans font-light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our community and receive the latest stories, updates, and
            opportunities to make a difference.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-foundation-gray-900 bg-white/95 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-foundation-red placeholder-foundation-gray-500 text-lg font-sans"
            />
            <button className="bg-foundation-red hover:bg-foundation-red/80 px-10 py-4 rounded-full font-semibold text-lg font-serif transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Subscribe
            </button>
          </motion.div>
        </div>
      </section>

      {/* Scroll to Top */}
      <motion.button
        className="fixed bottom-8 right-8 bg-foundation-red text-white p-4 rounded-full shadow-lg hover:bg-foundation-red/80 transition-all z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
      >
        <ArrowUp className="h-6 w-6" />
      </motion.button>

      <Footer />
    </div>
  );
};

export default HealthBlog;