
import { Calendar, BookOpen, Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Impact of Daheg Support on Rural Communities",
      excerpt: "Exploring how our daheg program has transformed the nutritional landscape for families in rural areas.",
      category: "Daheg",
      date: "December 15, 2024",
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Educational Scholarships: Building Tomorrow's Leaders",
      excerpt: "Stories of success from our scholarship recipients who are now making a difference in their communities.",
      category: "Education",
      date: "December 12, 2024",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Qurbani 2024: A Season of Giving and Gratitude",
      excerpt: "Reflecting on this year's Qurbani program and the families who benefited from the sacred tradition.",
      category: "Qurbani",
      date: "December 10, 2024",
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Welfare Programs: Restoring Hope and Dignity",
      excerpt: "How our comprehensive welfare services are helping families overcome challenges and build better futures.",
      category: "Welfare",
      date: "December 8, 2024",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Technology in Education: Bridging the Digital Divide",
      excerpt: "Our initiatives to provide digital literacy and technology access to underprivileged students.",
      category: "Education",
      date: "December 5, 2024",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Community Partnerships: Strength in Unity",
      excerpt: "Building stronger communities through partnerships with local organizations and volunteers.",
      category: "Community",
      date: "December 3, 2024",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      readTime: "4 min read"
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Daheg': return <Heart className="h-4 w-4" />;
      case 'Education': return <BookOpen className="h-4 w-4" />;
      case 'Qurbani': return <Users className="h-4 w-4" />;
      case 'Welfare': return <Heart className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Daheg': return 'bg-foundation-red text-white';
      case 'Education': return 'bg-foundation-navy text-white';
      case 'Qurbani': return 'bg-foundation-green text-white';
      case 'Welfare': return 'bg-foundation-gold text-white';
      default: return 'bg-foundation-gray-500 text-white';
    }
  };

  return (
    <div className="min-h-screen bg-foundation-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-foundation-navy to-foundation-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Foundation Blog</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stories of impact, updates from our programs, and insights from our community work.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 ${getCategoryColor(post.category)}`}>
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
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-foundation-red hover:text-foundation-red/80 font-semibold transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-foundation-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">Subscribe to our newsletter for the latest updates and stories from our foundation.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 rounded-lg text-foundation-navy"
            />
            <button className="bg-foundation-red hover:bg-foundation-red/90 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
