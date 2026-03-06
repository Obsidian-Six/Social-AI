import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Sparkles, Search, ChevronRight, Loader2 } from 'lucide-react';
// 1. Swap next/link for react-router-dom
import { Link } from 'react-router-dom';

const m = motion;

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // FETCH FROM WORDPRESS API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://public-api.wordpress.com/wp/v2/sites/obsidiansixblogs.wordpress.com/posts?per_page=100&_embed');
        const data = await response.json();

        if (!Array.isArray(data)) {
          console.error('Unexpected posts response:', data);
          setPosts([]);
          return;
        }

        const formattedPosts = data.map(post => ({
          id: post.id,
          slug: post.slug,
          title: post.title.rendered,
          // Extract plain text from excerpt
          description: post.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 150) + "...",
          date: new Date(post.date).toLocaleDateString('en-US', {
            month: 'long', day: 'numeric', year: 'numeric'
          }),
          // Fallback to local image if featured media is missing
          image: post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/founder.jpg",
          categories: post._embedded?.['wp:term']?.[0]?.map(cat => cat.name) || ["AI Updates"]
        }));

        setPosts(formattedPosts);
      } catch (error) {
        console.error("Error fetching WordPress posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // FILTER POSTS BASED ON SEARCH
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-[#F02D8E]/30">

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F02D8E]/10 rounded-full blur-[120px] -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F02D8E]/10 border border-[#F02D8E]/20 text-[#F02D8E] text-[10px] font-black uppercase tracking-[0.2em] mb-8"
          >
            <Sparkles size={14} /> The Future of Intelligence
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter"
          >
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F02D8E] to-purple-500">News Updates</span>
          </motion.h1>

          <div className="max-w-xl mx-auto relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-[#F02D8E] transition-colors" size={20} />
            <input
              type="text"
              placeholder="Search AI breakthroughs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-[#F02D8E]/40 transition-all text-lg"
            />
          </div>
        </div>
      </section>

      {/* MAIN BLOG GRID */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          {loading ? (
            <div className="flex flex-col items-center justify-center py-40 text-slate-500">
              <Loader2 className="animate-spin mb-4 text-[#F02D8E]" size={40} />
              <p className="text-lg font-medium uppercase tracking-widest ">Syncing with AI Core...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="group relative flex flex-col bg-[#0A0A0A] rounded-4xl border border-white/5 hover:border-[#F02D8E]/30 transition-all duration-500 overflow-hidden"
                  >
                    {/* 2. Changed href to 'to' for React Router */}
                    <Link to={`/blogs/${post.slug}`} className="cursor-pointer flex flex-col h-full">
                      <div className="relative aspect-16/10 overflow-hidden">
                        {/* 3. Replaced next/image with standard img tag */}
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                      </div>

                      <div className="p-8 flex flex-col grow">
                        <div className="flex flex-wrap gap-2 mb-6">
                          {post.categories.map(cat => (
                            <span key={cat} className="px-3 py-1 rounded-lg bg-[#F02D8E]/10 text-[#F02D8E] text-[10px] font-bold uppercase tracking-wider">
                              {cat}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-slate-500 text-xs font-medium mb-4">
                          <Calendar size={14} />
                          {post.date}
                        </div>

                        <h3
                          className="text-2xl font-bold mb-4 leading-tight group-hover:text-[#F02D8E] transition-colors"
                          dangerouslySetInnerHTML={{ __html: post.title }}
                        />

                        <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-3">
                          {post.description}
                        </p>

                        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                          <span className="flex items-center gap-2 text-xs font-bold text-[#F02D8E] uppercase tracking-widest group-hover:gap-4 transition-all">
                            Full Article <ChevronRight size={16} />
                          </span>

                          <div className="p-2 rounded-full bg-white/5 group-hover:bg-[#F02D8E] transition-colors duration-300">
                            <Sparkles size={16} className="text-[#F02D8E] group-hover:text-white" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>
          )}

          {/* NO RESULTS STATE */}
          {!loading && filteredPosts.length === 0 && (
            <div className="text-center py-20 text-slate-500 border border-dashed border-white/10 rounded-3xl">
              <p className="text-xl">No intelligence reports found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}