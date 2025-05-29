
export interface Category {
  id: string;
  name: string;
  icon: React.ElementType; // Lucide icon component
  description?: string;
  image?: string; // Optional image for category card
}

export interface Review {
  id: string;
  userName: string;
  rating: number; // 1-5
  comment: string;
  date: string;
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  images: string[]; // URLs to images
  category: string; // e.g., "Monuments", "Food"
  location: {
    address: string;
    lat: number;
    lng: number;
  };
  rating: number; // Average rating
  reviewsCount: number;
  reviews?: Review[]; // Optional detailed reviews
  tags?: string[];
}

export type AITourSuggestion = {
  name: string;
  description: string;
  category: string;
  why: string;
};
