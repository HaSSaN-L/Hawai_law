import React, { useLayoutEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const BlogPostPage = () => {
    const { id } = useParams<{ id: string }>();
    

    const post = blogPosts.find(post => post.id === id);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
                    <Link 
                        to="/blog"
                        className="text-amber-400 hover:text-amber-500 transition-colors"
                    >
                        Return to Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main>
            {/* Hero Section */}
            <section className="relative py-24 bg-gray-900 text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-20"
                    />
                </div>
                <div className="container relative z-10">
                    <div className="max-w-3xl">
                        <Link 
                            to="/blog"
                            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            <span>Back to Blog</span>
                        </Link>
                        <div className="mb-6">
                            <span className="bg-amber-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                                {post.category}
                            </span>
                        </div>
                        <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
                        <div className="flex items-center gap-6 text-gray-300">
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                <span>{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-8">
                            <div className="prose prose-lg max-w-none">
                                {post.content.map((block, index) => (
                                    block.type === 'heading' ? (
                                        <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{block.content}</h2>
                                    ) : (
                                        <p key={index} className="mb-6 text-gray-600 leading-relaxed">{block.content}</p>
                                    )
                                ))}
                            </div>

                            {/* Share Buttons */}
                            <div className="mt-12 pt-12 border-t">
                                <h3 className="text-lg font-semibold mb-4">Share this article</h3>
                                <div className="flex gap-4">
                                    <button
                                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-amber-400 transition-colors group"
                                    >
                                        <Facebook className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
                                    </button>
                                    <button
                                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-amber-400 transition-colors group"
                                    >
                                        <Twitter className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
                                    </button>
                                    <button
                                        className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-amber-400 transition-colors group"
                                    >
                                        <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4">
                            {/* Author Info */}
                            <div className="bg-gray-50 p-6 rounded-2xl mb-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <img
                                        src={post.author.image}
                                        alt={post.author.name}
                                        className="w-16 h-16 rounded-full object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">{post.author.name}</h3>
                                        <p className="text-gray-500">{post.author.position}</p>
                                    </div>
                                </div>
                                <Link
                                    to="/attorneys"
                                    className="block w-full bg-amber-400 text-gray-900 text-center px-4 py-2 rounded-lg font-semibold hover:bg-amber-500 transition-colors"
                                >
                                    View Profile
                                </Link>
                            </div>

                            {/* Related Posts */}
                            <div>
                                <h3 className="text-xl font-bold mb-6">Related Articles</h3>
                                <div className="space-y-6">
                                    {blogPosts
                                        .filter(p => p.id !== post.id)
                                        .slice(0, 2)
                                        .map((relatedPost, index) => (
                                            <Link key={index} to={`/blog/${relatedPost.id}`} className="group block">
                                                <div className="relative overflow-hidden rounded-xl mb-4">
                                                    <img
                                                        src={relatedPost.image}
                                                        alt={relatedPost.title}
                                                        className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                                    />
                                                </div>
                                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="w-4 h-4" />
                                                        <span>{relatedPost.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        <span>{relatedPost.readTime}</span>
                                                    </div>
                                                </div>
                                                <h4 className="font-bold mb-2 group-hover:text-amber-400 transition-colors">
                                                    {relatedPost.title}
                                                </h4>
                                                <p className="text-gray-600 text-sm">{relatedPost.excerpt}</p>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gray-900 text-white">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-6">
                            Need Legal Assistance?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Our experienced team is ready to help you with any legal matters.
                        </p>
                        <Link 
                            to="#contact"
                            className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-500 transition-colors text-lg group"
                        >
                            <span>Schedule a Consultation</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BlogPostPage;
