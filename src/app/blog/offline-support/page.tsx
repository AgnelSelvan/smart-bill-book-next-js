"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import AppBar from "@/app/components/AppBar";
import Footer from "@/app/components/Footer";
import { CloudOff, Cloud, Zap } from 'lucide-react';
import Head from 'next/head';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function OfflineSupport() {
  return (
    <>
      <Head>
        <title>Best Free Offline Billing Software for Small Business | Smart Bill Book</title>
        <meta name="description" content="Discover Smart Bill Book - the best free offline billing software for small business. Create GST-compliant invoices, manage inventory, and track sales without internet. Download now!" />
        <meta name="keywords" content="offline billing software, free offline billing software for small business, offline invoice software, offline gst billing software, free billing software for pc offline, offline billing software for retail shop" />
        <meta property="og:title" content="Best Free Offline Billing Software for Small Business | Smart Bill Book" />
        <meta property="og:description" content="Create GST-compliant invoices offline. The most reliable free offline billing software for retail shops and small businesses. Download now!" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="/offline_support.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Free Offline Billing Software for Small Business | Smart Bill Book" />
        <meta name="twitter:description" content="Create GST-compliant invoices offline. The most reliable free offline billing software for retail shops and small businesses. Download now!" />
        <meta name="twitter:image" content="/offline_support.png" />
        <link rel="canonical" href="https://smartbillbook.com/blog/offline-support" />
      </Head>
      <AppBar />
      <main className="max-w-4xl mx-auto px-4 py-8 mt-24">

        <article>
          <header>
            <Link href="/blog" className="text-blue-500 hover:underline">&larr; Back to Blog</Link>
            <motion.h1
              className="text-4xl font-bold mt-4 mb-6"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              The Best Free Offline Billing Software for Small Business: <span className="text-[#fd8d00]">Smart Bill Book</span>
            </motion.h1>
            <motion.p
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
              className="text-gray-600"
            >
              Looking for the best offline billing software for your retail shop? Unlike other offline invoice software that leaves you stranded when the internet goes down, Smart Bill Book ensures your business operations continue smoothly, even without an internet connection. As a free offline billing software for PC, we understand that your small business can't afford to stop - not even for a moment.
            </motion.p>
          </header>

          <motion.div
            className="my-12 rounded-xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-xl"></div>
              <img
                src="/offline_support.png"
                alt="Smart Bill Book - Free Offline Billing Software for Small Business"
                className="w-full h-auto rounded-xl"
                width="800"
                height="400"
                loading="eager"
              />
            </div>
          </motion.div>

          <section aria-labelledby="features-heading">
            <motion.div
              className="grid md:grid-cols-2 gap-8 mb-12"
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <CloudOff className="h-8 w-8 text-[#fd8d00] mr-3" />
                  <h2 id="features-heading" className="text-xl font-semibold">Complete Offline Billing Software</h2>
                </div>
                <p className="text-gray-600">
                  As a free offline billing software for retail shop, Smart Bill Book lets you create GST-compliant invoices, manage inventory, and track sales even when you're offline. All your data is stored locally and automatically syncs when you're back online.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <Cloud className="h-8 w-8 text-[#fd8d00] mr-3" />
                  <h2 className="text-xl font-semibold">Seamless Sync</h2>
                </div>
                <p className="text-gray-600">
                  Once you're back online, all your offline data automatically syncs across all your devices in real-time, ensuring you never lose any information. Perfect for small businesses that need reliable offline GST billing software.
                </p>
              </div>
            </motion.div>
          </section>

          <section aria-labelledby="benefits-heading">
            <motion.div
              className="bg-gray-50 p-8 rounded-xl border border-gray-200"
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{ delay: 0.6 }}
            >
              <h2 id="benefits-heading" className="text-2xl font-semibold mb-4">Why Choose Our Free Offline Billing Software for PC?</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-[#fd8d00] mr-3 mt-1" />
                  <div>
                    <strong className="text-gray-900">No Business Interruption</strong>
                    <p>Keep your retail shop running smoothly even during internet outages or poor connectivity. Our offline billing software free version includes all essential features.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-[#fd8d00] mr-3 mt-1" />
                  <div>
                    <strong className="text-gray-900">Data Security</strong>
                    <p>Your business data is safely stored locally and automatically backed up when you're online. Perfect for small businesses that need reliable offline invoice software.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Zap className="h-6 w-6 text-[#fd8d00] mr-3 mt-1" />
                  <div>
                    <strong className="text-gray-900">Real-time Synchronization</strong>
                    <p>All your data syncs automatically across devices as soon as you're back online. The best free offline billing software for small business with GST support.</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </section>

          <section aria-labelledby="cta-heading">
            <motion.div
              className="mt-12 p-6 bg-[#fd8d00] rounded-xl text-white"
              initial="initial"
              animate="animate"
              variants={fadeIn}
              transition={{ delay: 0.8 }}
            >
              <h2 id="cta-heading" className="text-xl font-semibold mb-4">Ready to Experience the Best Free Offline Billing Software?</h2>
              <p className="mb-6">
                Download Smart Bill Book today - the most reliable offline billing software for small business. Never worry about internet connectivity again. Your retail shop deserves a billing solution that works for you, not against you.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://apps.microsoft.com/detail/9pkxj10brmpk?mode=direct"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-[#fd8d00] rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Download Free Offline Billing Software for Windows PC"
                >
                  Download Free Offline Billing Software for PC
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.smartbillbook.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-white text-[#fd8d00] rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Download Smart Bill Book for Android"
                >
                  Download for Android
                </a>
              </div>
            </motion.div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}