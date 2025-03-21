"use client"
import { motion, useScroll, useSpring } from 'framer-motion';
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
  ShoppingCart
} from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none">
            {/* <p className="text-gray-600 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p> */}

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600">
                Smart Bill Book ("we," "our," or "us") is committed to protecting your privacy by not collecting
                any personal information. Our free plan is designed to operate completely offline, ensuring your
                data stays exclusively on your device.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Data Collection Policy</h2>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>We do not collect, store, or process any personal information. All your business data,
                billing information, and settings remain exclusively on your local device.</li>

              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">What This Means For You:</h3>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Complete privacy - no personal information leaves your device</li>
                <li>All data is stored locally on your device</li>
                <li>No cloud storage or synchronization</li>
                <li>No tracking or analytics</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How Your Data is Handled</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Storage</h3>
                  <ul className="list-disc pl-6 text-gray-600">
                    <li>All data stored locally</li>
                    <li>No internet connection required</li>
                    <li>Data remains under your control</li>
                    <li>Secure on your device</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Control</h3>
                  <ul className="list-disc pl-6 text-gray-600">
                    <li>Full access to your data</li>
                    <li>Complete data deletion control</li>
                    <li>No external backups</li>
                    <li>No third-party access</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Device Permissions</h2>
              <p className="text-gray-600 mb-4">
                Our application may request the following device permissions, which are used only for local operations:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Storage access (to save bills and data locally)</li>
                <li>Printer access (for printing bills)</li>
                <li>Camera access (for scanning QR codes, if applicable)</li>
              </ul>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-blue-800">
                  <strong>Important Note:</strong> These permissions are used solely for local device operations.
                  No data is transmitted outside your device.
                </p>
              </div>
            </section> */}

            {/* <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600 mb-4">
                While we don't collect any data, we recommend following these best practices to protect your local data:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Regularly backup your device data</li>
                <li>Use device encryption if available</li>
                <li>Keep your device's operating system updated</li>
                <li>Use strong device passwords/PIN</li>
              </ul>
            </section> */}

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about our privacy practices, please contact us at:
                <br /><br />
                Email: smart.billing.book@gmail.com
              </p>
            </section>

            {/* <div className="mt-12 p-6 bg-yellow-50 rounded-lg">
              <p className="text-yellow-800">
                <strong>Note about the Free Plan:</strong> This privacy policy applies to the free version of
                Smart Bill Book, which operates entirely offline. If you upgrade to our Basic plan, different
                privacy terms will apply regarding data collection and cloud synchronization features.
              </p>
            </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;