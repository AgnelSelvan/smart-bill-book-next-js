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

export default function WhyChooseSmartBillBook() {
  return (
    <>
      <AppBar />
      <div className="max-w-4xl mx-auto px-4 py-8 mt-24">
        <Link href="/blog" className="text-blue-500 hover:underline">&larr; Back to Blog</Link>
        <motion.h1
          className="text-4xl font-bold mt-4 mb-6"
          initial="initial"
          animate="animate"
          variants={fadeIn}
        >
          <span className="text-[#fd8d00]">Smart Bill Book</span>: The Best GST Billing Software for Retail Shops
        </motion.h1>

        <motion.p
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="text-gray-600"
        >
          Looking for reliable retail billing software? Smart Bill Book is the complete GST invoice billing software designed specifically for retail shops and small businesses. Our billing app combines powerful features with ease of use, allowing you to generate online invoices, manage inventory, and create GST-compliant bills effortlessly. As a trusted invoice bill software, we understand the unique challenges retailers face daily.
        </motion.p>

        <motion.div
          className="my-12 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-xl"></div>
            <img
              src="/why_smart_bill_book.png"
              alt="Smart Bill Book - Best GST Billing Software for Retail Shops"
              className="w-full h-auto rounded-xl"
            />
          </div>
        </motion.div>

        <motion.h2
          className="text-2xl font-semibold mt-6 mb-4"
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          Why Choose Our Retail Store Billing Software:
        </motion.h2>
        <motion.ul
          className="list-disc pl-6 space-y-4 text-gray-600"
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={{ delay: 0.6 }}
        >
          <li>
            <strong className="text-gray-900">Complete GST Invoice Software:</strong>
            <p>Generate GST-compliant invoices instantly with our invoice billing software. Perfect for retail shops needing quick and accurate billing.</p>
          </li>
          <li>
            <strong className="text-gray-900">Smart Bill Book App Features:</strong>
            <p>Our billing software for small business includes expense tracking, inventory management, and comprehensive business reports.</p>
          </li>
          <li>
            <strong className="text-gray-900">Advanced GST Software:</strong>
            <p>Stay compliant with automated GST calculations and filing. The best GST billing software for your retail business needs.</p>
          </li>
          <li>
            <strong className="text-gray-900">Cloud-Based Bill App:</strong>
            <p>Access your billing data anywhere with our cloud-enabled retail billing software. Perfect for managing multiple stores.</p>
          </li>
          <li>
            <strong className="text-gray-900">Free Billing Software Features:</strong>
            <p>Start with our billing software free version and upgrade as your business grows. Ideal for small retail shops.</p>
          </li>
          <li>
            <strong className="text-gray-900">User-Friendly Interface:</strong>
            <p>Our invoicing software for small business is designed to be intuitive and easy to use, requiring minimal training.</p>
          </li>
        </motion.ul>
        <motion.div
          className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200"
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4">Download the Best Retail Billing Software Today!</h3>
          <p className="text-gray-600 mb-4">
            Join thousands of retail businesses using Smart Bill Book as their trusted GST invoice software. Transform your billing process with our comprehensive bill app!
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://apps.microsoft.com/detail/9pkxj10brmpk?mode=direct"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-[#0078D4] text-white rounded-lg hover:bg-[#006cbd] transition-colors"
            >
              Download Billing Software for Windows
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.smartbillbook.app"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-[#414141] text-white rounded-lg hover:bg-[#2d2d2d] transition-colors"
            >
              Get Bill App for Android
            </a>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}