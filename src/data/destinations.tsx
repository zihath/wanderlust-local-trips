
export const destinations = [
  {
    id: '1',
    name: 'Paris',
    country: 'France',
    description: 'The City of Light with iconic architecture and romantic ambiance.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80',
    price: 1200,
  },
  {
    id: '2',
    name: 'Tokyo',
    country: 'Japan',
    description: 'A vibrant metropolis blending ultramodern and traditional.',
    image: 'https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    price: 1800,
  },
  {
    id: '3',
    name: 'New York',
    country: 'USA',
    description: 'The Big Apple, a bustling hub of culture and entertainment.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    price: 1000,
  },
  {
    id: '4',
    name: 'Rome',
    country: 'Italy',
    description: 'The Eternal City with ancient ruins and Renaissance masterpieces.',
    image: 'https://images.unsplash.com/photo-1548233420-3989ca8e5cf7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    price: 1100,
  },
  {
    id: '5',
    name: 'Bali',
    country: 'Indonesia',
    description: 'A tropical paradise with beautiful beaches and rich culture.',
    image: 'https://images.unsplash.com/photo-1565330502541-4937be8552e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    price: 1500,
  },
  {
    id: '6',
    name: 'London',
    country: 'UK',
    description: 'A diverse city with rich history and iconic landmarks.',
    image: 'https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    price: 900,
  },
  {
    id: '7',
    name: 'Sydney',
    country: 'Australia',
    description: 'A stunning harbor city with gorgeous beaches and vibrant lifestyle.',
    image: 'https://images.unsplash.com/photo-1523428096881-5bd79d043006?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    price: 1700,
  },
  {
    id: '8',
    name: 'Dubai',
    country: 'UAE',
    description: 'A futuristic city known for luxury, modern architecture, and shopping.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    price: 1300,
  },
  {
    id: '9',
    name: 'Cancun',
    country: 'Mexico',
    description: 'Beautiful beaches, vibrant nightlife, and Mayan ruins nearby.',
    image: 'https://images.unsplash.com/photo-1569072617147-7695ba9f50aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80',
    price: 800,
  },
  {
    id: '10',
    name: 'Santorini',
    country: 'Greece',
    description: 'A stunning island with white buildings and breathtaking sunsets.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    price: 1400,
  }
];

export const getDestination = (name: string) => {
  return destinations.find(destination => destination.name === name);
};

export const getDestinationNames = () => {
  return destinations.map(destination => destination.name);
};
