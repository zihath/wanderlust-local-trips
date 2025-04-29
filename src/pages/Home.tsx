
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/Layout';
import { destinations } from '@/data/destinations';
import { DestinationCard } from '@/components/DestinationCard';

const Home: React.FC = () => {
  // Display only 6 destinations on home page
  const featuredDestinations = destinations.slice(0, 6);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section min-h-[80vh] flex items-center justify-center text-center relative">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Explore the World with Wanderlust
          </h1>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Discover new destinations, create memories, and experience the journey of a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-travel-primary hover:bg-travel-primary/90">
              <Link to="/book">Book Your Trip</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-white text-black hover:bg-gray-100">
              <Link to="/signup">Create Account</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our most sought-after travel destinations and find your next adventure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                id={destination.id}
                name={destination.name}
                country={destination.country}
                description={destination.description}
                image={destination.image}
                price={destination.price}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild>
              <Link to="/book">View All Destinations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Wanderlust</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide exceptional travel experiences tailored to your needs and preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-travel-primary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-travel-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Price Guarantee</h3>
              <p className="text-gray-600">Find a lower price? We'll match it and give you an additional discount.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-travel-secondary/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-travel-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
              <p className="text-gray-600">Your personal information and payments are always protected.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="h-14 w-14 rounded-full bg-travel-accent/10 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-travel-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Our travel experts are available around the clock to assist you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-travel-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied travelers who have experienced the world with Wanderlust.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-travel-primary hover:bg-gray-100">
            <Link to="/signup">Create Your Account</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
