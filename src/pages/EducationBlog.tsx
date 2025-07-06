import {
  Calendar,
  BookOpen,
  Users,
  Heart,
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

const EducationBlog = () => {
  const { id } = useParams();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const blogPost = {
    id: "2",
    title: "Educational Scholarships: Building Tomorrow's Leaders",
    category: "Education",
    date: "December 12, 2024",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    readTime: "7 min read",
    content: String.raw`
The Bashir Educational Scholarship Trust (BEST), founded by the visionary Mr. Bashir Ahmad Khan in 2004, stands as a beacon of hope for bright minds burdened by financial challenges. Through strategic scholarships and educational initiatives, BEST empowers future leaders to rise and reshape their communities. This blog explores the journey, milestones, and impact of the trust’s noble mission.

## 🌟 The Vision Behind BEST
In June 2003, a dream took root — Mr. Bashir Ahmad Khan imagined a Pakistan where no child is deprived of education due to poverty. This vision materialized in 2004 as the Benevolent Educational Scholarship Trust (BEST), headquartered in Faisalabad. A joint bank account was opened at the National Bank of Pakistan, and formal communication channels were established — the foundation was set.

## 👥 Leading With Purpose
BEST's leadership team, driven by compassion and conviction, laid the groundwork for transformation:
- **Mr. Bashir Ahmad Khan** — *Patron-in-Chief*
- **Mr. Mahmood Ahmad Khan** — *Patron*
- **Dr. Muhammad Saleem** — *General Secretary*
- **Mr. Ijaz Tabassum** — *Joint Secretary*

Together, they launched a mission to provide students with not just scholarships — but the belief that their future matters.

> *“Education is the most powerful weapon which you can use to change the world.” — Nelson Mandela*

## 🎓 Transforming Lives Through Scholarships
From its humble beginnings, the BEST Scholarship Program rapidly made an impact:

**📈 Growth from 20 to 35 Scholars**: Starting with 20 scholars receiving Rs. 1,000/month for 3 months in 2004, the program quickly expanded to 35 students by late 2005, with ambitions to support 40 in the near future.
  
**🎯 Merit-Driven Selection**: Out of 183 applications, candidates were chosen through a transparent, merit-based process, involving interviews and financial assessments.

- **🏅 Celebratory Award Ceremonies**:
  - **1st Ceremony (Dec 29, 2004)**: Cheques of Rs. 3,000 were awarded in the presence of professors, press, and patrons.
  - **2nd Ceremony (Apr 6, 2005)**: New and returning students were celebrated for academic excellence.
  - **3rd Ceremony (Oct 3, 2005)**: 35 scholars were honored in a grand event attended by community leaders and proud parents.

Each event was more than financial support — it was a public affirmation that education transforms lives.

## 👩‍🎓 Empowering Women, Enabling Futures
BEST goes beyond scholarships with its **Women’s Industrial School**, focused on vocational uplift:

- **🧵 Skill Development in Sewing**: With 10 manual and 1 computerized sewing machine, 35 women are trained under the guidance of expert instructors.
- **💪 Empowerment Through Employment**: These skills unlock pathways to independence, dignity, and economic contribution.

## 📖 Spiritual Growth: A Holistic Approach
Education at BEST includes **spiritual nurturing**:

- **📘 Morning Quran Classes & Evening Hadith Lessons**: 180 young boys participate daily, guided by a qualified Qari and assistant.
- **👳 Adult Education**: A Madinah University scholar leads Hadith sessions for adults, enriching moral and spiritual character in the community.

## 🇵🇰 بشیر ایجوکیشنل اسکالرشپ ٹرسٹ کی نمایاں خدمات
بشیر ایجوکیشنل اسکالرشپ ٹرسٹ نے 2004 سے 2005 کے دوران نہایت قابل قدر خدمات انجام دیں:

- **اسکالرشپس کا اجراء**: 20 سے بڑھا کر 35 طلباء و طالبات کو مالی معاونت فراہم کی گئی، مکمل میرٹ کے ساتھ انتخاب۔
- **خواتین کے لیے انڈسٹریل اسکول**: سلائی کی تربیت کے ذریعے خودکفالت کی راہیں ہموار کی گئیں۔
- **دینی تعلیم**: قرآن اور حدیث کی کلاسز سے نوجوانوں اور بڑوں کو دینی فہم عطا کی گئی۔
- **فنڈنگ اور اخراجات**: ٹرسٹ کے تمام اخراجات بشمول اساتذہ کی تنخواہیں، محترم بشیر احمد خان اور ان کے بیرون ملک ساتھیوں کے تعاون سے پورے کیے جا رہے ہیں۔

## 💸 Sustaining the Mission
Currently, the trust’s operating expenses — including staff salaries (Rs. 10,000/month or ~$200) — are fully funded by Mr. Bashir Ahmad Khan and friends from the USA. As the initiative grows, so does the need for **sustainable donor support**. The trust is also finalizing its legal registration to broaden its reach.

## ❤️ Your Role in This Journey
The BEST Scholarship isn’t just about financial support — it’s a **movement** to ignite dreams and dismantle barriers.

### ✅ Here’s how you can contribute:
- **Donate**: Help extend scholarships to more deserving students.
- **Volunteer**: Share your time or skills in mentoring and outreach.
- **Spread Awareness**: Share this story and inspire others to believe in the power of education.

Together, we can build a brighter, more educated Pakistan — one student at a time.
`,
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

  const containsUrdu = (children) => {
    const flattenText = (nodes) =>
      nodes
        .map((node) => {
          if (typeof node === "string") return node;
          if (Array.isArray(node?.props?.children)) {
            return flattenText(node.props.children);
          }
          if (typeof node?.props?.children === "string") {
            return node.props.children;
          }
          return "";
        })
        .join(" ");

    const text = flattenText(Array.isArray(children) ? children : [children]);
    return /[ء-ی]/.test(text);
  };

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

    h2: ({ children }) => {
      const isUrdu = containsUrdu(children);
      return (
        <h2
          className={`text-3xl font-bold font-serif mt-10 mb-6 relative break-words overflow-wrap break-word ${
            isUrdu
              ? "text-black text-right rtl font-urdu leading-loose"
              : "text-foundation-navy"
          }`}
        >
          {children}
          {!isUrdu && (
            <motion.span
              className="absolute bottom-0 left-0 w-16 h-1 bg-foundation-red"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          )}
        </h2>
      );
    },

    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-foundation-navy font-serif mt-8 mb-4 break-words overflow-wrap break-word">
        {children}
      </h3>
    ),

    p: ({ children }) => {
      const isUrdu = containsUrdu(children);
      return (
        <motion.p
          className={`text-lg leading-loose mb-3 tracking-tight break-words overflow-wrap break-word whitespace-pre-wrap text-justify font-sans ${
            isUrdu
              ? "text-black text-right rtl font-urdu leading-relaxed"
              : "text-foundation-gray-800"
          }`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.p>
      );
    },

    ul: ({ children }) => (
      <ul
        className="list-disc list-inside text-foundation-gray-800 font-sans text-lg leading-relaxed mb-3 pl-4 break-words overflow-wrap break-word whitespace-pre-wrap rtl:pr-4"
        dir="auto"
      >
        {children}
      </ul>
    ),

    li: ({ children }) => {
      const isUrdu = containsUrdu(children);
      return (
        <li
          className={`mb-2 break-words overflow-wrap break-word whitespace-pre-wrap ${
            isUrdu
              ? "text-black text-right rtl list-disc list-inside font-urdu leading-loose"
              : "text-foundation-gray-800"
          }`}
          dir="auto"
        >
          {children}
        </li>
      );
    },

    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-foundation-gold pl-6 py-4 my-8 bg-foundation-gray-50/50 rounded-r-lg italic text-foundation-gray-700 font-sans text-lg leading-loose break-words overflow-wrap break-word">
        {children}
      </blockquote>
    ),

    strong: ({ children }) => (
      <strong className="font-semibold text-black break-words overflow-wrap break-word">
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
        <div className="relative container mx-auto text-center">
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
              <BookOpen className="h-6 w-6 mr-3" />
              <span className="font-semibold">{blogPost.category}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-24 relative container mx-auto">
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
              <div className="markdown-content px-4 sm:px-6 lg:px-8 overflow-wrap break-word">
                <ReactMarkdown
                  components={markdownComponents}
                  remarkPlugins={[remarkGfm]}
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

            {/* Key Achievements Section */}
            <motion.div
              className="mt-16 bg-gradient-to-r from-foundation-gray-50 to-foundation-gray-100 rounded-2xl p-10 shadow-inner overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-foundation-navy mb-8 font-serif relative">
                Key Achievements
                <motion.span
                  className="absolute bottom-0 left-0 w-12 h-1 bg-foundation-gold"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                />
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Users,
                    title: "35 Students",
                    desc: "Supported with scholarships in 2005",
                  },
                  {
                    icon: BookOpen,
                    title: "183 Applications",
                    desc: "Received and evaluated on merit",
                  },
                  {
                    icon: Heart,
                    title: "3 Ceremonies",
                    desc: "Celebrating student success",
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
            <Link
              to="/blog"
              className="inline-flex items-center text-foundation-red hover:text-foundation-red/80 font-semibold transition-colors mt-6"
            >
              Back to Blog
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </Link>
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
                      title: "The Impact of Dahej Support",
                      to: "/blog/dahej/1",
                    },
                    {
                      title: "Health Camps for Communities",
                      to: "/blog/health/3",
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
        ></motion.div>
        <div className="container mx-auto text-center">
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

export default EducationBlog;
