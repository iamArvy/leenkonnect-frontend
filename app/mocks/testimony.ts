export const mockGetTestimonies = () => {
  return [
    {
      id: 1,
      name: 'John Doe',
      occupation: 'CEO, Company A',
      content:
        'This product has significantly improved our workflow and productivity. Highly recommended!',
      avatar: '/avatars/john_doe.jpg',
      rating: 3
    },
    {
      id: 2,
      name: 'Jane Smith',
      occupation: 'CTO, Company B',
      content:
        'The customer support is outstanding. They helped us integrate the solution seamlessly.',
      avatar: '/avatars/jane_smith.jpg',
      rating: 5
    },
    {
      id: 3,
      name: 'Alice Johnson',
      occupation: 'Product Manager, Company C',
      content:
        'A game-changer in our industry. The features are innovative and easy to use.',
      avatar: '/avatars/alice_johnson.jpg',
      rating: 4
    }
  ]
}