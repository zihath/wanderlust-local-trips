
import React from 'react';
import { Layout } from '@/components/Layout';

const Terms: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>Last Updated: April 29, 2025</p>
          
          <p>
            Please read these Terms and Conditions ("Terms") carefully before using the Wanderlust website and services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website and services, you agree to be bound by these Terms. If you do not agree to all the Terms, you may not access or use our services.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Changes to Terms</h2>
          <p>
            We may revise and update these Terms from time to time at our sole discretion. All changes are effective immediately when we post them.
            Your continued use of the website following the posting of revised Terms means that you accept and agree to the changes.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. User Accounts</h2>
          <p>
            When you create an account with us, you must provide accurate, complete, and up-to-date information. 
            You are responsible for safeguarding the password and for all activities that occur under your account.
          </p>
          <p>
            You agree to notify us immediately of any unauthorized access to or use of your account.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Booking and Cancellation</h2>
          <p>
            All bookings are subject to availability and confirmation. Prices displayed are per person unless otherwise stated.
          </p>
          <p>
            Cancellation policies vary depending on the type of booking and how close to the departure date you cancel.
            For this demonstration application, all cancellations are allowed without penalty.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Payments</h2>
          <p>
            For this demonstration application, no actual payments are processed.
            In a production environment, all payments would be processed securely and in accordance with our Privacy Policy.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Wanderlust shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
            or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without regard to its conflict of law provisions.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p>
            Email: legal@wanderlust.com<br />
            Address: 123 Travel Street, City, Country
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Terms;
