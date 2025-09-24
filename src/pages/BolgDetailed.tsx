import React from 'react';
import { useParams, Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  content: string;
  image: string;
  tags: string[];
}

const BolgDetailed: React.FC = () => {
  // In a real app, you would fetch the blog post data using the ID from the URL
  const { id } = useParams<{ id: string }>();
  
  // Mock data - replace with actual data fetching
  const blogPost: BlogPost = {
    id: id || '1',
    title: 'The Future of Web Development in 2025',
    author: 'Jane Doe',
    date: 'September 24, 2025',
    readTime: '8 min read',
    content: `
      <p>Web development continues to evolve at a rapid pace, with new technologies and frameworks emerging regularly. In this post, we'll explore the key trends shaping the future of web development in 2025.</p>
      
      <h2>1. AI-Powered Development</h2>
      <p>AI tools are becoming increasingly sophisticated, helping developers write better code faster. From code completion to automated testing, AI is transforming how we build web applications.</p>
      
      <h2>2. WebAssembly (WASM) Maturity</h2>
      <p>WebAssembly continues to gain traction, enabling near-native performance in the browser. More applications are leveraging WASM for performance-critical operations.</p>
      
      <h2>3. Edge Computing</h2>
      <p>With the rise of edge computing, web applications are becoming faster and more responsive by processing data closer to the user.</p>
    `,
    image: '/image/blog/web-dev-2025.jpg',
    tags: ['Web Development', 'Technology', 'Trends']
  };

  const relatedPosts = [
    {
      id: '2',
      title: 'React 19: What\'s New?',
      date: 'September 20, 2025',
      readTime: '5 min read',
      image: '/image/blog/react-19.jpg'
    },
    {
      id: '3',
      title: 'The Rise of TypeScript',
      date: 'September 15, 2025',
      readTime: '6 min read',
      image: '/image/blog/typescript-rise.jpg'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <article className="mb-12">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{blogPost.title}</h1>
          <div className="flex items-center text-gray-600 text-sm">
            <span>By {blogPost.author}</span>
            <span className="mx-2">•</span>
            <span>{blogPost.date}</span>
            <span className="mx-2">•</span>
            <span>{blogPost.readTime}</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {blogPost.tags.map((tag, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="mb-8">
          <img 
            src={blogPost.image} 
            alt={blogPost.title}
            className="w-full h-96 object-cover rounded-lg mb-6"
          />
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>

        <footer className="border-t border-gray-200 pt-6">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-gray-600 mr-4">
              {blogPost.author.charAt(0)}
            </div>
            <div>
              <h3 className="font-semibold">{blogPost.author}</h3>
              <p className="text-gray-600 text-sm">Senior Web Developer</p>
            </div>
          </div>
        </footer>
      </article>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {relatedPosts.map((post) => (
            <Link 
              key={post.id} 
              to={`/blog/${post.id}`}
              className="group block border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600">{post.title}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BolgDetailed;