"use client"
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  Cloud,
  Receipt,
  Smartphone,
  Printer,
  Camera,
  ChevronRight,
  BarChart3,
  Zap,
  Users,
  Check,
  Download,
  CloudOff,
  ReceiptText,
  ShoppingCart,
  Calendar1
} from 'lucide-react';
import Link from "next/link";
import { useState, useEffect } from 'react';
import AppBar from './components/AppBar';
import Footer from './components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const buttonOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0, 0.1], [20, 0]);

  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      src: "/smart_bill_book_mobile_app.png",
      alt: "Smart Bill Book Mobile App",
      width: "w-64",
      rotate: "-rotate-3"
    },
    {
      src: "/smart_bill_book_windows.png",
      alt: "Smart Bill Book Windows App",
      width: "w-140",
      rotate: "rotate-3"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        // If current image is mobile (0), show it for 5 seconds
        // If current image is Windows (1), show it for 3 seconds
        const nextImage = (prev + 1) % images.length;
        return nextImage;
      });
    }, currentImage === 0 ? 5000 : 3000);

    return () => clearInterval(interval);
  }, [currentImage]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-[#fd8d00] origin-left z-50"
            style={{ scaleX }}
          />
          {/* Hero Section */}
          {/* <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-40 border-b border-white/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <img src="/logo.png" alt="Smart Bill Book Logo" className="h-8 w-8" />
                  <span className="ml-3 text-xl font-bold text-gray-700 tracking-wider">Smart Bill Book</span>
                </div>
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
                    className="flex items-center space-x-2 bg-[#0078D4] text-white px-4 py-2 rounded-lg hover:bg-[#006cbd] transition-colors text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Download className="h-4 w-4" />
                    <span>Windows</span>
                  </a>
                  <a
                    href="https://smartbillbook.onelink.me/RkYa/96yotwdr"
                    target="_blank"
                    className="flex items-center space-x-2 bg-[#414141] text-white px-4 py-2 rounded-lg hover:bg-[#2d2d2d] transition-colors text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Download className="h-4 w-4" />
                    <span>Android</span>
                  </a>
                </motion.div>
              </div>
            </div>
          </nav> */}
          <AppBar />

          {/* Floating Book A Call Button */}
          <motion.div
            className="fixed bottom-8 right-8 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.a
              href="https://calendly.com/smartbillbook/demo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white text-base font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"

            >
              Book A Call
              <Calendar1 className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>

          <section className="pt-20 pb-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-12 mt-10 md:mt-5">
                <motion.div
                  className="flex-1 text-left"
                  initial="initial"
                  animate="animate"
                  variants={fadeIn}
                >
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                    Transform Your Billing <br />
                    <span className="text-primary">Into Digital Magic</span>
                  </h1>
                  <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                    Say goodbye to paper bills. Create, manage, and sync your invoices across all devices with our cloud-based smart billing system.
                  </p>
                  <p className="text-sm text-gray-700 mb-8 flex items-center">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold mr-2">Free</span>
                    Available on Windows and Android at no cost - download now and start transforming your business!
                  </p>
                  <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
                    <a
                      href="https://apps.microsoft.com/detail/9pkxj10brmpk?mode=direct"
                      target="_blank"
                      className="transform transition-all duration-300 hover:scale-110"
                    >
                      <img
                        src="https://get.microsoft.com/images/en-us%20dark.svg"
                        width="200"
                        alt="Download from Microsoft Store"
                        className="transition-all duration-300"
                      />
                    </a>

                    <a
                      href="https://smartbillbook.onelink.me/RkYa/96yotwdr"
                      target="_blank"
                      className="transform transition-all duration-300 hover:scale-110"
                    >
                      <img
                        src="/google_play.png"
                        width="185"
                        alt="Download from Google Play"
                        className="transition-all duration-300"
                      />
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <div className="relative flex items-center justify-center" style={{ height: '600px' }}>
                    <motion.div
                      key={currentImage}
                      className={`relative ${images[currentImage].width}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className={`absolute -inset-4 bg-primary/10 rounded-3xl transform ${images[currentImage].rotate}`}></div>
                      <motion.img
                        src={images[currentImage].src}
                        alt={images[currentImage].alt}
                        className={`relative rounded-2xl w-full animate-float ${
                          currentImage === 0 ? 'shadow-[0_25px_60px_rgba(253,141,0,0.35)]' : ''
                        }`}
                        animate={{
                          scale: [1, 1.02, 1],
                          boxShadow: currentImage === 0 ? [
                            "0 25px 60px rgba(253,141,0,0.35)",
                            "0 30px 70px rgba(253,141,0,0.4)",
                            "0 25px 60px rgba(253,141,0,0.35)"
                          ] : undefined
                        }}
                        transition={{
                          duration: 3,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4"><span className="text-[#fd8d00]">Powerful</span> Features</h2>
                <p className="text-xl text-gray-600">Everything you need to manage your billing efficiently</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Cloud className="h-8 w-8 text-primary" />,
                    title: "Cloud Sync",
                    description: "Real-time synchronization across all your devices"
                  },
                  {
                    icon: <CloudOff className="h-8 w-8 text-primary" />,
                    title: "Offline Support",
                    description: "You can continue managing your billing even without an internet connection"
                  },
                  {
                    icon: <ReceiptText className="h-8 w-8 text-primary" />,
                    title: "Instant Bill Generation",
                    description: "Create sales bills in just a few clicks, with thermal printing support for easy printing"
                  },
                  {
                    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
                    title: "Product Management",
                    description: "Seamlessly manage your product inventory"
                  },
                  {
                    icon: <Printer className="h-8 w-8 text-primary" />,
                    title: "Multi-Printer Support",
                    description: "Connect to any type of printer effortlessly"
                  },
                  {
                    icon: <BarChart3 className="h-8 w-8 text-primary" />,
                    title: "Sales Analytics Dashboard",
                    description: "View interactive graphs and analytics of your sales performance"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="bg-[#fd8d00]/10 p-3 rounded-lg w-fit mb-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="bg-[#fd8d00] py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8 text-white text-center">
                {[
                  { icon: <Zap className="h-8 w-8" />, number: "3K+", label: "Bills Generated" },
                  { icon: <Users className="h-8 w-8" />, number: "190+", label: "Happy Users" },
                  { icon: <Cloud className="h-8 w-8" />, number: "99.9%", label: "Uptime" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex flex-col items-center"
                  >
                    {stat.icon}
                    <span className="text-4xl font-bold mt-4">{stat.number}</span>
                    <span className="text-[#ffd7a0]">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          {/* <section id="pricing" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
                <p className="text-xl text-gray-600">Start managing your bills efficiently today</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    name: "Free",
                    price: "₹0",
                    description: "Perfect for small businesses",
                    features: [
                      "Offline Support",
                      "Manual entry of bills",
                      "Basic reporting",
                      "Access to single-device",
                      "Email support"
                    ],
                    cta: "Get Started",
                    popular: false
                  },
                  {
                    name: "Basic",
                    price: "₹39",
                    description: "Most popular for growing businesses",
                    features: [
                      "Everything in Free",
                      "Cloud backup & sync",
                      "Multi-device access",
                      "Advanced reporting",
                      "Priority support",
                      "Sales analytics dashboard",
                    ],
                    cta: "Start Basic",
                    popular: true
                  },
                  // {
                  //   name: "Enterprise",
                  //   price: "₹99",
                  //   description: "For large scale operations",
                  //   features: [
                  //     "Everything in Basic",
                  //     "Custom branding",
                  //     "API access",
                  //     "Dedicated support",
                  //     "Team management",
                  //     "Advanced analytics",
                  //     "Custom integrations"
                  //   ],
                  //   cta: "Contact Sales",
                  //   popular: false
                  // }
                ].map((plan, index) => (
                  <motion.div
                    key={index}
                    className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group ${
                      plan.popular ? 'border-2 border-primary' : 'border-2 border-transparent hover:border-primary'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 right-0 bg-[#fd8d00] text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                        Most Popular
                      </div>
                    )}
                    <div className={`p-8 text-center transition-colors duration-300 ${
                      plan.popular ? 'bg-[#fd8d00] group-hover:bg-[#fd8d00]' : 'bg-gray-50 group-hover:bg-[#fd8d00]'
                    }`}>
                      <h3 className={`text-2xl font-bold transition-colors duration-300 ${
                        plan.popular ? 'text-white' : 'text-gray-900 group-hover:text-white'
                      }`}>
                        {plan.name}
                      </h3>
                      <div className="mt-4">
                        <span className={`text-5xl font-bold transition-colors duration-300 ${
                          plan.popular ? 'text-white' : 'text-gray-900 group-hover:text-white'
                        }`}>
                          {plan.price}
                        </span>
                        <span className={`transition-colors duration-300 ${
                          plan.popular ? 'text-white opacity-80' : 'text-gray-600 group-hover:text-white/80'
                        }`}>
                          /month
                        </span>
                      </div>
                      <p className={`mt-4 transition-colors duration-300 ${
                        plan.popular ? 'text-white' : 'text-gray-600 group-hover:text-white'
                      }`}>
                        {plan.description}
                      </p>
                    </div>
                    <div className="p-8">
                      <ul className="space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <Check className="h-5 w-5 text-primary mr-3" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <a
                          href="#"
                          className={`block w-full py-3 px-6 rounded-lg text-center font-medium transition-all duration-300 ${
                            plan.popular
                              ? 'bg-[#fd8d00] text-white hover:bg-[#fd8d00] hover:border-2 hover:border-primary'
                              : 'bg-gray-100 text-gray-900 group-hover:bg-[#fd8d00] group-hover:text-white hover:border-2 hover:border-primary'
                          }`}
                        >
                          {plan.cta}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section> */}

          {/* Schedule Demo Section */}
          <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">See Smart Bill Book in Action</h2>
                <p className="text-xl text-gray-600">Schedule a personalized demo and discover how Smart Bill Book can transform your business</p>
              </motion.div>

              <motion.div
                className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Book Your Demo Call</h3>
                      <ul className="space-y-4 mb-8">
                        <li className="flex items-start">
                          <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-600">Personalized walkthrough of features</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-600">Q&A session with our experts</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
                          <span className="text-gray-600">Custom solutions for your business</span>
                        </li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <a
                        href="https://calendly.com/smartbillbook/demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                      >
                        Schedule Demo
                        <Calendar1 className="ml-2 h-5 w-5" />
                      </a>
                      <p className="mt-4 text-sm text-gray-500">45-minute call • No commitment required</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                className="bg-gray-900 rounded-3xl p-12 text-center"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Billing?</h2>
                <p className="text-xl text-gray-400 mb-8">Join thousands of businesses that trust Smart Bill Book</p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <a
                      href="https://apps.microsoft.com/detail/9pkxj10brmpk?mode=direct"
                      target="_blank"
                      className="transition-transform hover:scale-105"
                    >
                      <img src="https://get.microsoft.com/images/en-us%20dark.svg" width="200"/>
                    </a>

                    <a
                      href="https://smartbillbook.onelink.me/RkYa/96yotwdr"
                      target="_blank"
                      className="transition-transform hover:scale-105"
                    >
                      <img src="/google_play.png" width="185"/>
                    </a>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Footer */}
          <Footer />
          {/* <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Smart Bill Book</h3>
                  <p className="text-gray-400">
                    Transform your billing experience with our smart, cloud-based solution.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Legal</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact</h3>
                  <p className="text-gray-400">
                    Email: smart.billing.book@gmail.com<br />
                    Phone: +91-9167877725
                  </p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>&copy; {new Date().getFullYear()} Smart Bill Book. All rights reserved.</p>
              </div>
            </div>
          </footer> */}
        </div>
  );
}

