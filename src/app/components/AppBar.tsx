"use client";
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Download } from 'lucide-react';
import Link from 'next/link';

export default function AppBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const buttonOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0, 0.1], [20, 0]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#fd8d00] origin-left z-50"
        style={{ scaleX }}
      />
      <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-40 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center">
              <img src="/logo.png" alt="Smart Bill Book Logo" className="h-8 w-8" />
              <span className="ml-3 text-xl font-bold tracking-wide">Smart<span className="text-[#fd8d00]"> Bill Book</span></span>
            </Link>
            <motion.div
              className="flex items-center space-x-4"
              style={{
                opacity: buttonOpacity,
                y: buttonY
              }}
            >
              <a
                href="https://apps.microsoft.com/detail/9pkxj10brmpk?mode=direct"
                target="_blank"
                className="flex items-center space-x-2 bg-[#0078D4] text-white px-4 py-2 rounded-lg hover:bg-[#006cbd] transition-colors text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300"
              >
                <Download className="h-4 w-4" />
                <span>Windows</span>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.smartbillbook.app&pcampaignid=web_share"
                target="_blank"
                className="flex items-center space-x-2 bg-[#414141] text-white px-4 py-2 rounded-lg hover:bg-[#2d2d2d] transition-colors text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-300"
              >
                <Download className="h-4 w-4" />
                <span>Android</span>
              </a>
            </motion.div>
          </div>
        </div>
      </nav>
    </>
  );
}