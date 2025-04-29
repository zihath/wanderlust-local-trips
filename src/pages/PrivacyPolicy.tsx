
import React from 'react';
import { Layout } from '@/components/Layout';

const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>Last Updated: April 29, 2025</p>
          
          <p>
            This Privacy Policy describes how Wanderlust ("we", "our", or "us") collects, uses, and shares your personal information when you use our website and services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Personal Information</h3>
          <p>
            We may collect the following types of personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact information (such as name, email address, phone number)</li>
            <li>Account information (such as password and preferences)</li>
            <li>Transaction information (such as booking details and payment information)</li>
            <li>User content (such as reviews and feedback)</li>
          </ul>
          
          <h3 className="text-xl font-medium mt-6 mb-3">Usage Information</h3>
          <p>
            We may automatically collect certain information about how you access and use our website and services, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Device information (such as IP address, browser type, and operating system)</li>
            <li>Usage details (such as pages visited, time spent on pages, and clicks)</li>
            <li>Location information (if you enable location services)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p>
            We may use your personal information for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide and maintain our services</li>
            <li>To process transactions and send related information</li>
            <li>To respond to your inquiries and provide customer support</li>
            <li>To send administrative information, such as updates to our terms and policies</li>
            <li>To send promotional messages and offers (with your consent)</li>
            <li>To improve our website and services</li>
            <li>To protect our rights and prevent fraud</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Information Sharing</h2>
          <p>
            We may share your personal information with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers who perform services on our behalf</li>
            <li>Business partners, such as hotels and airlines, to fulfill your bookings</li>
            <li>Legal authorities when required by law or to protect our rights</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access and receive a copy of your personal information</li>
            <li>The right to correct inaccurate personal information</li>
            <li>The right to delete your personal information</li>
            <li>The right to withdraw consent at any time</li>
            <li>The right to object to the processing of your personal information</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, 
            accidental loss, destruction, or damage.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes to our practices or for other operational, 
            legal, or regulatory reasons. The updated version will be indicated by an updated "Last Updated" date.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p>
            Email: privacy@wanderlust.com<br />
            Address: 123 Travel Street, City, Country
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPolicy;
