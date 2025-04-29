
import React from 'react';
import { Layout } from '@/components/Layout';

const About: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-6">About Wanderlust</h1>
        
        <div className="prose prose-lg max-w-none">
          <p>
            Founded in 2010, Wanderlust has grown from a small startup to one of the world's leading travel booking platforms. 
            Our mission is to make travel accessible, enjoyable, and enriching for everyone.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Story</h2>
          <p>
            Wanderlust was founded by a group of passionate travelers who believed that planning a trip should be as enjoyable as the trip itself. 
            What started as a small team working out of a tiny office has now grown into a global company with offices in major cities around the world.
          </p>
          <p>
            Despite our growth, we've never lost sight of our original vision: to help people discover the world and create unforgettable memories.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p>
            At Wanderlust, we believe that travel is one of life's greatest experiences. Our mission is to make it easy for everyone to explore the world, 
            experience different cultures, and create lasting memories.
          </p>
          <p>
            We're committed to providing exceptional service, competitive prices, and a seamless booking experience for all our customers.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Us</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Best Price Guarantee - We'll match any lower price you find elsewhere.</li>
            <li>24/7 Customer Support - Our team is always ready to assist you.</li>
            <li>Secure Booking - Your personal information and payments are always protected.</li>
            <li>Flexibility - Easy cancellations and modifications for most bookings.</li>
            <li>Curated Experiences - We personally vet all our destinations and packages.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
          <p>
            Our diverse team consists of passionate travelers, industry experts, and dedicated professionals who work tirelessly to bring you the best travel experiences.
            From our customer service representatives to our developers, everyone at Wanderlust shares the same goal: to help you explore the world.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">Join Us on Our Journey</h2>
          <p>
            Whether you're planning your first trip or you're a seasoned traveler, we invite you to join us on our journey. 
            Let Wanderlust be your guide to the world's most amazing destinations.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
