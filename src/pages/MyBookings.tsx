
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from '@/components/ui/sonner';
import { useBooking, Booking } from '@/contexts/BookingContext';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const MyBookings: React.FC = () => {
  const { bookings, cancelBooking } = useBooking();
  const [bookingToCancel, setBookingToCancel] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Separate upcoming and past bookings
  const now = new Date();
  
  const upcomingBookings = bookings.filter(booking => new Date(booking.startDate) > now)
    .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime());
  
  const pastBookings = bookings.filter(booking => new Date(booking.startDate) <= now)
    .sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime());

  const handleCancelClick = (bookingId: string) => {
    setBookingToCancel(bookingId);
    setIsDialogOpen(true);
  };

  const confirmCancellation = () => {
    if (bookingToCancel) {
      cancelBooking(bookingToCancel);
      toast.success('Booking cancelled successfully');
      setIsDialogOpen(false);
      setBookingToCancel(null);
    }
  };

  const BookingCard: React.FC<{ booking: Booking; isUpcoming: boolean }> = ({ booking, isUpcoming }) => {
    const startDate = new Date(booking.startDate).toLocaleDateString();
    const endDate = new Date(booking.endDate).toLocaleDateString();
    
    return (
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex justify-between items-center">
            <span>{booking.destination}</span>
            <span className={`text-sm font-medium px-2 py-1 rounded-full ${
              booking.packageType === 'Premium' 
                ? 'bg-travel-secondary/10 text-travel-secondary' 
                : 'bg-travel-primary/10 text-travel-primary'
            }`}>
              {booking.packageType}
            </span>
          </CardTitle>
          <CardDescription>{startDate} - {endDate}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Travelers</span>
            <span>{booking.people}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Cost</span>
            <span className="font-semibold">${booking.totalCost}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Booking Date</span>
            <span>{new Date(booking.createdAt).toLocaleDateString()}</span>
          </div>
        </CardContent>
        {isUpcoming && (
          <CardFooter>
            <Button 
              variant="destructive" 
              className="w-full"
              onClick={() => handleCancelClick(booking.id)}
            >
              Cancel Booking
            </Button>
          </CardFooter>
        )}
      </Card>
    );
  };

  return (
    <Layout requireAuth>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">My Bookings</h1>
        
        <Tabs defaultValue="upcoming">
          <TabsList className="mb-4">
            <TabsTrigger value="upcoming">Upcoming ({upcomingBookings.length})</TabsTrigger>
            <TabsTrigger value="past">Past ({pastBookings.length})</TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming">
            {upcomingBookings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingBookings.map(booking => (
                  <BookingCard key={booking.id} booking={booking} isUpcoming={true} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-gray-600 mb-4">You don't have any upcoming bookings.</p>
                  <Button asChild>
                    <a href="/book">Book a Trip</a>
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
          
          <TabsContent value="past">
            {pastBookings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pastBookings.map(booking => (
                  <BookingCard key={booking.id} booking={booking} isUpcoming={false} />
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-gray-600">You don't have any past bookings.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </div>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Cancel Booking</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to cancel this booking? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>No, Keep It</AlertDialogCancel>
            <AlertDialogAction onClick={confirmCancellation}>
              Yes, Cancel Booking
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Layout>
  );
};

export default MyBookings;
