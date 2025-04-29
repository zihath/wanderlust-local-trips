
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useBooking } from '@/contexts/BookingContext';
import { destinations } from '@/data/destinations';
import { DestinationCard } from '@/components/DestinationCard';

const Dashboard: React.FC = () => {
  const { currentUser } = useAuth();
  const { bookings, getRecentDestinations } = useBooking();
  const [upcomingBookings, setUpcomingBookings] = useState<any[]>([]);

  // Get 4 random recommended destinations
  const recommendedDestinations = React.useMemo(() => {
    const shuffled = [...destinations].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }, []);

  useEffect(() => {
    // Filter upcoming bookings (where start date is in the future)
    const now = new Date();
    const upcoming = bookings
      .filter(booking => new Date(booking.startDate) > now)
      .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
      .slice(0, 3);
    
    setUpcomingBookings(upcoming);
  }, [bookings]);

  return (
    <Layout requireAuth>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome, {currentUser?.name}!</h1>
          <p className="text-gray-600 mt-2">Manage your trips and discover new destinations.</p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Book a Trip</CardTitle>
              <CardDescription>Plan your next adventure</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Explore our destinations and create your perfect travel package.
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="/book">Start Booking</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">My Bookings</CardTitle>
              <CardDescription>View your upcoming and past trips</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Check details, make changes, or cancel your upcoming bookings.
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link to="/bookings">View Bookings</Link>
              </Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Edit Profile</CardTitle>
              <CardDescription>Update your personal information</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-gray-600">
              Change your name, email, phone number, or password.
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <Link to="/profile">Edit Profile</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Upcoming Trips */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Upcoming Trips</h2>
            {upcomingBookings.length > 0 && (
              <Button asChild variant="ghost">
                <Link to="/bookings">View All</Link>
              </Button>
            )}
          </div>
          
          {upcomingBookings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingBookings.map((booking) => {
                const startDate = new Date(booking.startDate);
                const endDate = new Date(booking.endDate);
                const formattedStartDate = startDate.toLocaleDateString();
                const formattedEndDate = endDate.toLocaleDateString();
                
                return (
                  <Card key={booking.id}>
                    <CardHeader className="pb-2">
                      <CardTitle>{booking.destination}</CardTitle>
                      <CardDescription>{formattedStartDate} - {formattedEndDate}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">
                        <span className="font-medium">People:</span> {booking.people}
                      </p>
                      <p className="text-sm">
                        <span className="font-medium">Package:</span> {booking.packageType}
                      </p>
                      <p className="text-sm font-bold mt-2 text-travel-primary">
                        ${booking.totalCost}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/bookings">View Details</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card>
              <CardContent className="py-8 text-center">
                <p className="text-gray-600 mb-4">You have no upcoming trips.</p>
                <Button asChild>
                  <Link to="/book">Book Your First Trip</Link>
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Recommended Packages */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Recommended Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {recommendedDestinations.map((destination) => (
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
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
