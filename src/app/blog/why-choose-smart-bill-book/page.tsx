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
          Why Choose <span className="text-primary">Smart Bill Book</span>
        </motion.h1>

        <motion.p
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
          className="text-gray-600"
        >
          In today's fast-paced business world, efficiency and accuracy in billing and accounting are crucial. Smart Bill Book stands out from other billing solutions because it's built by a retailer for retailers - we understand your daily challenges firsthand. Our solution is designed to simplify your business operations, offering a seamless experience that truly reflects the real needs of retail businesses, from managing invoices and tracking expenses to generating insightful reports that matter to you.
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
              alt="Why Choose Smart Bill Book"
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
          Key Benefits:
        </motion.h2>
        <motion.ul
          className="list-disc pl-6 space-y-4 text-gray-600"
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={{ delay: 0.6 }}
        >
          <li>
            <strong className="text-gray-900">Easy Invoicing:</strong>
            <p>Create and send professional invoices in seconds. Our intuitive interface lets you generate detailed invoices with just a few clicks.</p>
          </li>
          <li>
            <strong className="text-gray-900">Expense Tracking:</strong>
            <p>Monitor your business expenses effortlessly. Keep track of all your expenses in one place and generate detailed reports.</p>
          </li>
          <li>
            <strong className="text-gray-900">Insightful Reports:</strong>
            <p>Get real-time insights into your business performance. View detailed analytics and make informed decisions.</p>
          </li>
          <li>
            <strong className="text-gray-900">Cloud Access:</strong>
            <p>Access your data securely from anywhere, anytime. Your data is safely stored in the cloud and synced across all your devices.</p>
          </li>
          <li>
            <strong className="text-gray-900">GST Ready:</strong>
            <p>Generate GST-compliant invoices and reports with ease. Stay compliant with the latest tax regulations.</p>
          </li>
          <li>
            <strong className="text-gray-900">User Friendly:</strong>
            <p>Intuitive interface designed for all business owners, regardless of their technical expertise.</p>
          </li>
        </motion.ul>
        <motion.div
          className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200"
          initial="initial"
          animate="animate"
          variants={fadeIn}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-600 mb-4">
            Join thousands of businesses that trust Smart Bill Book for their billing needs. Start streamlining your billing process today!
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://apps.microsoft.com/detail/9pkxj10brmpk?mode=direct"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-[#0078D4] text-white rounded-lg hover:bg-[#006cbd] transition-colors"
            >
              Download for Windows
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.smartbillbook.app"
              target="_blank"
              className="inline-flex items-center px-6 py-3 bg-[#414141] text-white rounded-lg hover:bg-[#2d2d2d] transition-colors"
            >
              Download for Android
            </a>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
}