
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface DestinationCardProps {
  id: string;
  name: string;
  country: string;
  description: string;
  image: string;
  price: number;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  id,
  name,
  country,
  description,
  image,
  price
}) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle>{name}, {country}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground">{description}</p>
        <p className="mt-2 text-lg font-medium text-travel-primary">${price} / week</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link to="/book" state={{ destination: name }}>Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
