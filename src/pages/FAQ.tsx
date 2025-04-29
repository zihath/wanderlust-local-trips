
import React from 'react';
import { Layout } from '@/components/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How do I book a trip?",
    answer: "To book a trip, first sign up or log in to your account. Then, navigate to the 'Book a Trip' page, select your destination, dates, number of people, and package type. Review your booking details and confirm your reservation."
  },
  {
    question: "What payment methods do you accept?",
    answer: "For this demonstration version, we don't process actual payments. In a real application, we would typically accept major credit cards, PayPal, and other payment methods."
  },
  {
    question: "Can I cancel my booking?",
    answer: "Yes, you can cancel upcoming bookings through the 'My Bookings' page. Select the booking you wish to cancel and click the 'Cancel Booking' button. Please note that in a real application, cancellation policies would apply depending on how close to the departure date you cancel."
  },
  {
    question: "What's the difference between Standard and Premium packages?",
    answer: "Standard packages include basic accommodations and essential services. Premium packages offer upgraded accommodations, additional amenities, priority service, and often include extra experiences or activities at the destination."
  },
  {
    question: "How do I update my personal information?",
    answer: "To update your personal information, log in to your account and go to the 'Profile' page. Here you can edit your name, email, phone number, and other details. Don't forget to save your changes."
  },
  {
    question: "Is my personal information secure?",
    answer: "Yes, we take data security seriously. In this demo application, your information is stored in localStorage for demonstration purposes only. In a production environment, we would use secure servers with encryption and follow best practices for data protection."
  },
  {
    question: "What happens if I forgot my password?",
    answer: "If you forget your password, go to the 'Login' page and click on 'Forgot Password'. Enter the email address associated with your account, and we'll send you instructions to reset your password."
  },
  {
    question: "Can I book for someone else?",
    answer: "Yes, you can book trips for other people. When making a booking, simply enter the number of travelers and proceed with the booking process. All communication regarding the booking will be sent to your email address."
  },
  {
    question: "How far in advance should I book my trip?",
    answer: "For the best availability and prices, we recommend booking at least 3-6 months in advance for international trips and 1-3 months for domestic trips. However, last-minute bookings are also possible based on availability."
  },
  {
    question: "Do you offer group discounts?",
    answer: "Yes, we offer discounts for group bookings of 6 or more travelers. In a real application, these discounts would be automatically applied during the booking process. For this demo, we've simplified the pricing structure."
  }
];

const FAQ: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        
        <div className="mb-8">
          <p className="text-lg text-gray-700">
            Find answers to common questions about booking travel, managing your account, and using our services.
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 bg-gray-50 rounded-lg p-6 border">
          <h2 className="text-xl font-semibold mb-4">Still have questions?</h2>
          <p className="mb-4">
            If you couldn't find the answer to your question, feel free to contact our customer support team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center">
              <svg className="h-5 w-5 text-travel-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>support@wanderlust.com</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 text-travel-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+1 (555) 123-4567</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
