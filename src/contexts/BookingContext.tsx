
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

export type Booking = {
  id: string;
  userId: string;
  destination: string;
  startDate: string;
  endDate: string;
  people: number;
  packageType: 'Standard' | 'Premium';
  totalCost: number;
  createdAt: string;
};

type BookingContextType = {
  bookings: Booking[];
  addBooking: (bookingData: Omit<Booking, 'id' | 'userId' | 'createdAt'>) => void;
  cancelBooking: (bookingId: string) => void;
  calculateFare: (destination: string, startDate: string, endDate: string, people: number, packageType: 'Standard' | 'Premium') => number;
  getRecentDestinations: () => string[];
};

const BookingContext = createContext<BookingContextType>({} as BookingContextType);

export const useBooking = () => {
  return useContext(BookingContext);
};

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const { currentUser } = useAuth();

  // Base prices for destinations
  const destinationPrices: Record<string, number> = {
    'Paris': 1200,
    'Tokyo': 1800,
    'New York': 1000,
    'Rome': 1100,
    'Bali': 1500,
    'London': 900,
    'Sydney': 1700,
    'Dubai': 1300,
    'Cancun': 800,
    'Santorini': 1400
  };

  useEffect(() => {
    if (currentUser) {
      // Load user's bookings
      const allBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      const userBookings = allBookings.filter((booking: Booking) => booking.userId === currentUser.id);
      setBookings(userBookings);
    } else {
      setBookings([]);
    }
  }, [currentUser]);

  const calculateFare = (
    destination: string, 
    startDate: string, 
    endDate: string, 
    people: number, 
    packageType: 'Standard' | 'Premium'
  ): number => {
    // Calculate number of days
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.max(1, Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)));
    
    // Get base price for destination or use default
    const basePrice = destinationPrices[destination] || 1000;
    
    // Calculate total price
    let totalPrice = basePrice * people * (days / 7); // Price per person per week
    
    // Apply package multiplier
    totalPrice *= packageType === 'Premium' ? 1.5 : 1;
    
    return Math.round(totalPrice);
  };

  const addBooking = (bookingData: Omit<Booking, 'id' | 'userId' | 'createdAt'>) => {
    if (!currentUser) return;

    try {
      // Create new booking
      const newBooking: Booking = {
        ...bookingData,
        id: Date.now().toString(),
        userId: currentUser.id,
        createdAt: new Date().toISOString()
      };
      
      // Get all bookings and add new one
      const allBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      allBookings.push(newBooking);
      
      // Save to localStorage
      localStorage.setItem('bookings', JSON.stringify(allBookings));
      
      // Update state
      setBookings(prevBookings => [...prevBookings, newBooking]);
    } catch (error) {
      console.error('Add booking error:', error);
    }
  };

  const cancelBooking = (bookingId: string) => {
    try {
      // Get all bookings
      const allBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      
      // Filter out the cancelled booking
      const updatedBookings = allBookings.filter((booking: Booking) => booking.id !== bookingId);
      
      // Save to localStorage
      localStorage.setItem('bookings', JSON.stringify(updatedBookings));
      
      // Update state
      setBookings(prevBookings => prevBookings.filter(booking => booking.id !== bookingId));
    } catch (error) {
      console.error('Cancel booking error:', error);
    }
  };

  const getRecentDestinations = () => {
    // Return user's recent destinations (up to 5 unique ones)
    const destinations = bookings
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .map(booking => booking.destination);
    
    return [...new Set(destinations)].slice(0, 5);
  };

  const value = {
    bookings,
    addBooking,
    cancelBooking,
    calculateFare,
    getRecentDestinations
  };

  return (
    <BookingContext.Provider value={value}>
      {children}
    </BookingContext.Provider>
  );
};
