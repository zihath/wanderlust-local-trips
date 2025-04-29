
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/sonner';
import { useBooking } from '@/contexts/BookingContext';
import { getDestinationNames, getDestination } from '@/data/destinations';

const BookTrip: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { calculateFare, addBooking } = useBooking();

  // Initialize with location state if available
  const initialDestination = location.state?.destination || '';

  const [destination, setDestination] = useState(initialDestination);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [people, setPeople] = useState(1);
  const [packageType, setPackageType] = useState<'Standard' | 'Premium'>('Standard');
  const [totalCost, setTotalCost] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const destinationOptions = getDestinationNames();
  const selectedDestinationData = getDestination(destination);

  // Calculate total cost when inputs change
  useEffect(() => {
    if (destination && startDate && endDate && people && packageType) {
      setIsCalculating(true);
      
      // Small delay to simulate calculation
      const timer = setTimeout(() => {
        const cost = calculateFare(destination, startDate, endDate, people, packageType);
        setTotalCost(cost);
        setIsCalculating(false);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setTotalCost(0);
    }
  }, [destination, startDate, endDate, people, packageType, calculateFare]);

  // Set min dates for date inputs
  const today = new Date().toISOString().split('T')[0];
  
  // Calculate min end date based on start date
  const minEndDate = startDate ? 
    new Date(new Date(startDate).getTime() + 24 * 60 * 60 * 1000).toISOString().split('T')[0] : 
    today;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!destination || !startDate || !endDate || !people || !packageType) {
      toast.error('Please fill in all fields');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      addBooking({
        destination,
        startDate,
        endDate,
        people,
        packageType,
        totalCost
      });
      
      toast.success('Trip booked successfully!');
      navigate('/bookings');
    } catch (error) {
      console.error('Error booking trip:', error);
      toast.error('An error occurred while booking your trip');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout requireAuth>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6">Book Your Trip</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Trip Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="destination">Destination</Label>
                      <Select 
                        value={destination} 
                        onValueChange={setDestination}
                      >
                        <SelectTrigger id="destination">
                          <SelectValue placeholder="Select destination" />
                        </SelectTrigger>
                        <SelectContent>
                          {destinationOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="packageType">Package Type</Label>
                      <Select 
                        value={packageType} 
                        onValueChange={(value: 'Standard' | 'Premium') => setPackageType(value)}
                      >
                        <SelectTrigger id="packageType">
                          <SelectValue placeholder="Select package type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Standard">Standard</SelectItem>
                          <SelectItem value="Premium">Premium</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startDate">Start Date</Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        min={today}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="endDate">End Date</Label>
                      <Input
                        id="endDate"
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        min={minEndDate}
                        disabled={!startDate}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="people">Number of People</Label>
                    <Input
                      id="people"
                      type="number"
                      min="1"
                      max="10"
                      value={people}
                      onChange={(e) => setPeople(parseInt(e.target.value, 10))}
                      className="mt-1"
                    />
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-4 border-t">
                    <div>
                      <p className="text-sm text-gray-600">Total Cost</p>
                      <p className="text-2xl font-bold">
                        {isCalculating ? 
                          'Calculating...' : 
                          totalCost > 0 ? `$${totalCost}` : '$0'}
                      </p>
                    </div>
                    <Button 
                      type="submit" 
                      className="mt-4 md:mt-0" 
                      disabled={isSubmitting || totalCost === 0}
                    >
                      {isSubmitting ? 'Booking...' : 'Book Now'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
          
          {/* Destination Preview */}
          <div>
            {selectedDestinationData ? (
              <Card>
                <div className="h-48 overflow-hidden">
                  <img 
                    src={selectedDestinationData.image} 
                    alt={selectedDestinationData.name} 
                    className="h-full w-full object-cover" 
                  />
                </div>
                <CardHeader>
                  <CardTitle>{selectedDestinationData.name}, {selectedDestinationData.country}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{selectedDestinationData.description}</p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Package Details:</h4>
                    <div className="flex justify-between items-center">
                      <span>Standard Package</span>
                      <span className="font-medium">${selectedDestinationData.price} / week</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Premium Package</span>
                      <span className="font-medium">${Math.round(selectedDestinationData.price * 1.5)} / week</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="h-full flex items-center justify-center">
                <CardContent className="text-center py-12">
                  <p className="text-gray-500 mb-4">Select a destination to see details</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookTrip;
