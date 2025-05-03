"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import AppBar from "@/app/components/AppBar";
import Footer from "@/app/components/Footer";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const blogs = [
  {
    slug: "why-choose-smart-bill-book",
    title: "Why Choose Smart Bill Book",
    summary: "Discover how Smart Bill Book can transform your billing process and streamline your business operations with its powerful features and user-friendly interface.",
    date: "March 20, 2024",
    thumbnail: "/why_smart_bill_book.png"
  }
  // Add more blog posts here
];

export default function BlogList() {
  return (
    <>
      <AppBar />
      <div className="max-w-4xl mx-auto px-4 py-8 mt-24">
        <motion.h1
          className="text-4xl font-bold mb-8"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          Blog
        </motion.h1>
        <div className="space-y-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.slug}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${blog.slug}`} className="block">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="relative h-48 md:h-full">
                      <img
                        src={blog.thumbnail}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <h2 className="text-2xl font-semibold mb-2 text-gray-900 hover:text-[#fd8d00] transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{blog.summary}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{blog.date}</span>
                      <span className="mx-2">•</span>
                      <span className="text-[#fd8d00] hover:underline">Read more →</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}