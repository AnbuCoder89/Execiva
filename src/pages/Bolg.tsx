import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion, Variants } from "framer-motion";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  topic: string;
  image: string;
  description: string;
  readTime: string;
  date: string;
}

interface BlogData {
  blogPosts: BlogPost[];
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i = 0) => ({
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: i * 0.1,
        },
    }),
};

const ITEMS_PER_PAGE = 8; // 2 rows of 4 items on desktop

const Bolg: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [blogData, setBlogData] = useState<BlogData | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await fetch('/data/blogPosts.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch blog data');
                }
                const data = await response.json();
                setBlogData(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                console.error('Error fetching blog data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchBlogData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error || !blogData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-red-500">Error loading blog posts. Please try again later.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    const { blogPosts } = blogData;
    
    // Pagination logic
    const totalPages = Math.ceil(blogPosts.length / ITEMS_PER_PAGE);
    const currentPosts = blogPosts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = async (page: number) => {
        if (page < 1 || page > totalPages || page === currentPage || isTransitioning) return;
        
        setIsTransitioning(true);
        
        // Wait for the fade-out animation
        await new Promise(resolve => setTimeout(resolve, 200));
        
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Wait for the state to update and the new content to render
        await new Promise(resolve => setTimeout(resolve, 50));
        
        // Fade back in
        setIsTransitioning(false);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxVisiblePages = 3; // Number of page numbers to show around current page
        
        // Always show first page
        pageNumbers.push(1);
        
        // Calculate start and end of pagination range
        let startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);
        
        // Adjust if we're near the start or end
        if (currentPage <= Math.ceil(maxVisiblePages / 2) + 1) {
            endPage = Math.min(maxVisiblePages + 1, totalPages - 1);
        } else if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
            startPage = Math.max(2, totalPages - maxVisiblePages);
        }
        
        // Add ellipsis after first page if needed
        if (startPage > 2) {
            pageNumbers.push('...');
        }
        
        // Add middle pages
        for (let i = startPage; i <= endPage; i++) {
            if (i > 1 && i < totalPages) {
                pageNumbers.push(i);
            }
        }
        
        // Add ellipsis before last page if needed
        if (endPage < totalPages - 1) {
            pageNumbers.push('...');
        }
        
        // Always show last page if there is more than one page
        if (totalPages > 1) {
            pageNumbers.push(totalPages);
        }
        
        return pageNumbers;
    };

    return (
        <motion.section
            className="pt-16 sm:pt-20 lg:pt-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-2xl shadow-xl w-full overflow-hidden h-[60vh] min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]">
                    {/* background image */}
                    <img
                        src="/image/case-studies/casestudy-1.jpeg"
                        alt="Blog hero"
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    {/* dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/40"></div>

                    {/* content overlay */}
                    <motion.div
                        className="absolute inset-0 z-10 flex flex-col items-center justify-center p-8 sm:p-12 text-white text-center"
                        variants={containerVariants}
                    >
                        {/* Blog Category Badge - Semantic and Accessible */}
                        <motion.span
                            role="contentinfo"
                            aria-label="Blog Category"
                            className="inline-block mb-6 sm:mb-8"
                            variants={itemVariants}
                        >
                            <span className="inline-flex items-center bg-green-500/20 backdrop-blur-sm rounded-lg border border-white/30 px-3 py-1.5 sm:px-4 sm:py-2">
                                <span className="font-sf-pro-text text-xs sm:text-sm font-medium text-white">
                                    Our Blog
                                </span>
                            </span>
                        </motion.span>

                        {/* Main Heading - Using SF Pro Display for headings */}
                        <motion.h1
                            className="font-sf-pro-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white max-w-4xl mx-auto px-4 tracking-tight"
                            variants={itemVariants}
                            itemProp="headline"
                        >
                            The Latest Writings from Our Team
                        </motion.h1>

                        {/* Subtitle - Using SF Pro Text for body text */}
                        <motion.p
                            className="font-sf-pro-text text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto px-4 font-light leading-relaxed"
                            variants={itemVariants}
                            itemProp="description"
                        >
                            Stay updated with the latest industry news, expert interviews, emerging technologies, and valuable resources.
                        </motion.p>
                    </motion.div>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className={`container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 transition-opacity duration-200 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {currentPosts.map((post) => (
                        <article 
                            key={post.id} 
                            className="group cursor-pointer" 
                            onClick={() => navigate(`/blog/${post.id}`)}
                        >
                            <div className="flex flex-col h-full">
                                <figure>
                                    <img
                                        className="w-full border-t border-x rounded-t md:rounded-t-xl object-cover aspect-video"
                                        src={post.image}
                                        alt={post.title}
                                        width="688"
                                        height="384"
                                        loading="lazy"
                                    />
                                </figure>
                                
                                <div className="p-4 space-y-2 rounded-b border-b transition md:rounded-b-xl group-hover:bg-gray-100 grow border-x">
                                    <p className="uppercase text-xs font-medium text-gray-600 font-sf-pro-text">
                                        <span className="opacity-80 after:content-['|'] after:text-gray-600 after:mx-1.5">
                                            {post.category}
                                        </span>
                                        <span className="opacity-80">{post.readTime}</span>
                                    </p>
                                    <h3 className="text-gray-800 text-base sm:text-lg font-medium leading-tight font-sf-pro-display">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base font-normal font-sf-pro-text line-clamp-3">
                                        {post.description.length > 100 ? `${post.description.substring(0, 100)}...` : post.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-12">
                        <nav className="flex items-center space-x-1" aria-label="Pagination">
                            <button
                                onClick={() => handlePageChange(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                                aria-label="Previous page"
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            
                            {renderPageNumbers().map((page, index) => (
                                <React.Fragment key={index}>
                                    {page === '...' ? (
                                        <span className="px-3 py-1 text-gray-500">...</span>
                                    ) : (
                                        <button
                                            onClick={() => handlePageChange(Number(page))}
                                            className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                                                currentPage === page
                                                    ? 'bg-blue-100 text-blue-600'
                                                    : 'text-gray-600 hover:bg-gray-100'
                                            }`}
                                            aria-current={currentPage === page ? 'page' : undefined}
                                        >
                                            {page}
                                        </button>
                                    )}
                                </React.Fragment>
                            ))}
                            
                            <button
                                onClick={() => handlePageChange(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
                                aria-label="Next page"
                            >
                                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </motion.section>
    );
};

export default Bolg;
