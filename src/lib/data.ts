import type { Category, Attraction } from '@/lib/types';
import { Landmark, UtensilsCrossed, CalendarDays, MapPin } from 'lucide-react';

export const categories: Category[] = [
  {
    id: 'monuments',
    name: 'Monuments',
    icon: Landmark,
    description: 'Explore historical and architectural wonders.',
    image: 'https://placehold.co/600x400.png', // data-ai-hint="Lucknow monument collage"
  },
  {
    id: 'food',
    name: 'Food Spots',
    icon: UtensilsCrossed,
    description: 'Savor the unique flavors of Lucknowi cuisine.',
    image: 'https://placehold.co/600x400.png', // data-ai-hint="Lucknow food collage"
  },
  {
    id: 'events',
    name: 'Festivals & Events',
    icon: CalendarDays,
    description: 'Experience the vibrant culture and festivities.',
    image: 'https://placehold.co/600x400.png', // data-ai-hint="Lucknow festival celebration"
  },
  {
    id: 'nearby',
    name: 'Nearby Attractions',
    icon: MapPin,
    description: 'Discover interesting places in the vicinity.',
    image: 'https://placehold.co/600x400.png', // data-ai-hint="Lucknow surroundings map"
  },
];

export const attractions: Attraction[] = [
  {
    id: 'bara-imambara',
    name: 'Bara Imambara',
    description: 'A grand Shia Muslim shrine complex with a unique labyrinth.',
    longDescription: 'Bara Imambara is an imambara complex in Lucknow, India, built by Asaf-ud-Daula, Nawab of Awadh, in 1784. It is also called the Asafi Imambara. Bara means big. The complex includes the large Asfi mosque, the Bhul-bhulaiya (the labyrinth), and Bowli, a step well with running water.',
    images: ['https://placehold.co/600x400.png'], // data-ai-hint="Bara Imambara Lucknow"
    category: 'Monuments',
    location: {
      address: 'Machchhi Bhavan, Lucknow, Uttar Pradesh 226003',
      lat: 26.8691,
      lng: 80.9123,
    },
    rating: 4.5,
    reviewsCount: 1250,
    tags: ['history', 'architecture', 'labyrinth'],
  },
  {
    id: 'rumi-darwaza',
    name: 'Rumi Darwaza',
    description: 'An imposing gateway built in the 18th century, a symbol of Lucknow.',
    longDescription: 'The Rumi Darwaza, in Lucknow, Uttar Pradesh, India, is an imposing gateway which was built under the patronage of Nawab Asaf-Ud-Daula in 1784. It is an example of Awadhi architecture. The Rumi Darwaza, which stands sixty feet tall, was modeled (1784) after the Sublime Porte (Bab-iHümayun) in Istanbul.',
    images: ['https://placehold.co/600x400.png'], // data-ai-hint="Rumi Darwaza Lucknow"
    category: 'Monuments',
    location: {
      address: 'Lajpat Nagar, Lucknow, Uttar Pradesh 226001',
      lat: 26.8684,
      lng: 80.9135,
    },
    rating: 4.6,
    reviewsCount: 980,
    tags: ['iconic', 'architecture', 'gateway'],
  },
  {
    id: 'tunday-kababi',
    name: 'Tunday Kababi',
    description: 'Legendary eatery famous for its melt-in-the-mouth Galouti kebabs.',
    longDescription: 'Tunday Kababi is a restaurant in Lucknow, India which is famous for its Galouti kebabs. It was established in 1905 in the bustling Chowk area of Lucknow. Its name is derived from the fact that its founder, Haji Murad Ali, had only one functioning arm.',
    images: ['https://placehold.co/600x400.png'], // data-ai-hint="Tunday Kababi food"
    category: 'Food Spots',
    location: {
      address: 'Naaz Cinema Rd, Aminabad, Lucknow, Uttar Pradesh 226018',
      lat: 26.8418,
      lng: 80.9302,
    },
    rating: 4.8,
    reviewsCount: 2500,
    tags: ['kebabs', 'non-veg', 'legendary', 'mughlai'],
  },
  {
    id: 'hazratganj',
    name: 'Hazratganj Market',
    description: 'A historic and upscale shopping district in the heart of Lucknow.',
    longDescription: 'Hazratganj is a major commercial area situated in the heart of Lucknow. In addition to bazaars, it also contains shopping complexes, restaurants, hotels, theaters and offices. It is a popular destination for shoppers and tourists.',
    images: ['https://placehold.co/600x400.png'], // data-ai-hint="Hazratganj Market shopping"
    category: 'Shopping', // Could be 'Nearby' or a new 'Shopping' category
    location: {
      address: 'Hazratganj, Lucknow, Uttar Pradesh',
      lat: 26.8454,
      lng: 80.9430,
    },
    rating: 4.3,
    reviewsCount: 750,
    tags: ['shopping', 'market', 'food', 'entertainment'],
  },
  {
    id: 'ambedkar-park',
    name: 'Ambedkar Memorial Park',
    description: 'A modern architectural marvel with statues and serene surroundings.',
    longDescription: 'Ambedkar Memorial Park, formally known as Dr. Bhimrao Ambedkar Samajik Parivartan Prateek Sthal, is a public park and memorial in Gomti Nagar, Lucknow. The park honors the lives and memories of Jyotirao Phule, Narayana Guru, Birsa Munda, Shahuji Maharaj, Bhimrao Ambedkar, Kanshi Ram and all those who have devoted their life for humanity, equality and social justice.',
    images: ['https://placehold.co/600x400.png'], // data-ai-hint="Ambedkar Park Lucknow"
    category: 'Monuments',
    location: {
      address: 'Vipin Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010',
      lat: 26.8531,
      lng: 80.9930,
    },
    rating: 4.4,
    reviewsCount: 600,
    tags: ['modern', 'architecture', 'park', 'memorial'],
  }
];

// Add data-ai-hint to images in the categories array
categories.forEach(category => {
  if (category.id === 'monuments' && category.image) {
    category.image = 'https://placehold.co/600x400.png" data-ai-hint="Lucknow monument collage';
  } else if (category.id === 'food' && category.image) {
    category.image = 'https://placehold.co/600x400.png" data-ai-hint="Lucknow food collage';
  } else if (category.id === 'events' && category.image) {
    category.image = 'https://placehold.co/600x400.png" data-ai-hint="Lucknow festival celebration';
  } else if (category.id === 'nearby' && category.image) {
    category.image = 'https://placehold.co/600x400.png" data-ai-hint="Lucknow surroundings map';
  }
});

// Add data-ai-hint to images in the attractions array
attractions.forEach(attraction => {
  if (attraction.images.length > 0) {
    if (attraction.id === 'bara-imambara') {
      attraction.images[0] = 'https://placehold.co/600x400.png" data-ai-hint="Bara Imambara Lucknow';
    } else if (attraction.id === 'rumi-darwaza') {
      attraction.images[0] = 'https://placehold.co/600x400.png" data-ai-hint="Rumi Darwaza Lucknow';
    } else if (attraction.id === 'tunday-kababi') {
      attraction.images[0] = 'https://placehold.co/600x400.png" data-ai-hint="Tunday Kababi food';
    } else if (attraction.id === 'hazratganj') {
      attraction.images[0] = 'https://placehold.co/600x400.png" data-ai-hint="Hazratganj Market shopping';
    } else if (attraction.id === 'ambedkar-park') {
      attraction.images[0] = 'https://placehold.co/600x400.png" data-ai-hint="Ambedkar Park Lucknow';
    }
  }
});

