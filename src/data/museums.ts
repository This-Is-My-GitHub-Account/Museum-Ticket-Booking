export const museums = [
  {
    id: '1',
    name: 'The Metropolitan Museum of Art',
    description: 'The Metropolitan Museum of Art presents over 5,000 years of art from around the world for everyone to experience and enjoy. Since its founding in 1870, The Met has always aspired to be more than a treasury of rare and beautiful objects.',
    shortDescription: 'One of the world\'s largest and finest art museums.',
    image: 'https://images.unsplash.com/photo-1582036583990-d8bed72baa66?auto=format&fit=crop&q=80',
    images: [
      'https://images.unsplash.com/photo-1582036583990-d8bed72baa66?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1605726138024-77a8963dc149?auto=format&fit=crop&q=80'
    ],
    location: {
      city: 'New York',
      address: '1000 Fifth Avenue, NY 10028',
      coordinates: {
        lat: 40.7794,
        lng: -73.9632
      }
    },
    pricing: {
      adult: 25,
      child: 0,
      senior: 17
    },
    openingHours: {
      monday: { open: '10:00', close: '17:30' },
      tuesday: { open: '10:00', close: '17:30' },
      wednesday: { open: '10:00', close: '17:30' },
      thursday: { open: '10:00', close: '17:30' },
      friday: { open: '10:00', close: '21:00' },
      saturday: { open: '10:00', close: '21:00' },
      sunday: { open: '10:00', close: '17:30' }
    },
    rating: 4.8,
    reviews: [
      {
        id: '1',
        userId: '1',
        userName: 'John Smith',
        rating: 5,
        comment: 'An incredible collection of art from around the world. Could spend days here!',
        date: '2024-02-15'
      }
    ],
    category: ['Art', 'History', 'Culture'],
    popularity: 98
  },
  // Add more museums here...
];