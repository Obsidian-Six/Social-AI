import React, { useEffect, useState } from 'react';
// 1. Swap next/link for react-router-dom
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, ChevronLeft, Sparkles, Loader2, ChevronRight } from 'lucide-react';

// Assuming your Sidebar component is in this path
import BlogSidebarForm from './BlogSidebarForm';

/**
 * HELPER: Extracts the featured image from WordPress data
 */
const getPostImage = (post) => {
    if (!post) return '/founder.jpg';
    if (post.jetpack_featured_media_url) return post.jetpack_featured_media_url;
    const embeddedImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
    if (embeddedImage) return embeddedImage;
    const contentMatch = post.content.rendered.match(/<img [^>]*src="([^"]+)"/);
    return contentMatch ? contentMatch[1] : '/founder.jpg';
};

export default function BlogPostClient() {
    // 2. Access the slug from the URL params (React Router style)
    const { slug } = useParams();
    const navigate = useNavigate();

    const [post, setPost] = useState(null);
    const [morePosts, setMorePosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadData() {
            try {
                setLoading(true);
                const cb = new Date().getTime();

                // Fetch the specific post by slug
                const postRes = await fetch(
                    `https://public-api.wordpress.com/wp/v2/sites/socialai9.wordpress.com/posts?slug=${slug}&_embed&cb=${cb}`
                );
                const posts = await postRes.json();

                if (posts && posts.length > 0) {
                    setPost(posts[0]);

                    // Fetch "More Blogs" for the bottom section
                    const allRes = await fetch(
                        `https://public-api.wordpress.com/wp/v2/sites/socialai9.wordpress.com/posts?_embed&per_page=4&cb=${cb}`
                    );
                    const allPosts = await allRes.json();
                    if (Array.isArray(allPosts)) {
                        setMorePosts(allPosts.filter((p) => p.slug !== slug).slice(0, 3));
                    }
                }
            } catch (err) {
                console.error("Failed to fetch blog data:", err);
            } finally {
                setLoading(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        if (slug) {
            loadData();
        }
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-10 h-10 text-[#F02D8E] animate-spin" />
                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest">Decrypting Intelligence...</div>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="pt-40 text-center text-slate-500 font-bold min-h-screen bg-black">
                Post not found
            </div>
        );
    }

    const imageUrl = getPostImage(post);

    return (
        <div className="bg-black min-h-screen text-white font-sans selection:bg-[#F02D8E]/30">

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 md:pt-44 pb-12 md:pb-24 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#F02D8E]/10 rounded-full blur-[120px] -z-10" />

                <div className="max-w-7xl mx-auto px-6">
                    <Link to="/blogs" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#F02D8E] transition-colors mb-8 text-sm group">
                        <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Back to Feed
                    </Link>

                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <div className="flex items-center gap-2 text-[#F02D8E] text-[10px] font-black uppercase tracking-[0.3em]">
                                <Sparkles size={14} />
                                Intelligence Briefing
                            </div>

                            <h1
                                className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tighter"
                                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                            />

                            <div className="flex flex-wrap items-center gap-6 text-slate-400 text-xs font-medium">
                                <div className="flex items-center gap-2">
                                    <Calendar size={14} className="text-[#F02D8E]" />
                                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={14} className="text-[#F02D8E]" />
                                    6 min read
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-[45%] aspect-video relative rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                            {/* 3. Replaced Next Image with standard img tag */}
                            <img
                                src={imageUrl}
                                alt="featured"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. MAIN CONTENT SECTION */}
            <section className="py-12 md:py-20 relative">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">

                    <div className="lg:col-span-8">
                        <article
                            className={`
    lg:col-span-8 
    max-w-none 
    text-slate-300 
    text-lg 
    md:text-xl 
    leading-[1.8] 
    tracking-wide
    /* Targeting WordPress inner elements directly */
    [&_p]:mb-10 
    [&_p]:block
    [&_h2]:text-white [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:mt-16 [&_h2]:mb-8 [&_h2]:tracking-tight
    [&_h3]:text-white [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mt-12 [&_h3]:mb-6
    [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-10 [&_ul]:space-y-4
    [&_ol]:list-decimal [&_ol]:ml-6 [&_ol]:mb-10 [&_ol]:space-y-4
    [&_li]:pl-2
    [&_strong]:text-white [&_strong]:font-bold
    [&_a]:text-[#F02D8E] [&_a]:underline [&_a]:underline-offset-4
    [&_img]:rounded-4xl [&_img]:my-12 [&_img]:border [&_img]:border-white/10
    [&_figure]:my-12
  `}
                            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
                        />
                    </div>

                    <aside className="lg:col-span-4">
                        <div className="lg:sticky lg:top-32 space-y-8">
                            <div className="bg-[#0A0A0A] p-8 rounded-[32px] border border-white/5 relative overflow-hidden group">
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#F02D8E]/10 rounded-full blur-3xl group-hover:bg-[#F02D8E]/20 transition-colors" />

                                <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Scale your AI</h3>
                                <p className="text-slate-400 text-sm mb-6 relative z-10">Book a strategy call with our specialists.</p>

                                <div className="relative z-10">
                                    <BlogSidebarForm />
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* 3. RELATED POSTS */}
            <section className="py-20 border-t border-white/5 bg-[#050505]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-white">More Intelligence</h2>
                        <Link to="/blogs" className="text-[#F02D8E] font-bold text-xs uppercase tracking-widest hover:translate-x-1 transition-transform inline-flex items-center gap-2">
                            All Posts <ChevronRight size={14} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {morePosts.map((p) => {
                            const pImg = getPostImage(p);
                            return (
                                <Link to={`/blogs/${p.slug}`} key={p.id} className="group">
                                    <div className="aspect-[16/10] rounded-[24px] overflow-hidden relative mb-4 border border-white/5 bg-zinc-900">
                                        <img
                                            src={pImg}
                                            alt="thumbnail"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <h4
                                        className="font-bold text-white text-lg group-hover:text-[#F02D8E] transition-colors line-clamp-2 leading-tight"
                                        dangerouslySetInnerHTML={{ __html: p.title.rendered }}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}