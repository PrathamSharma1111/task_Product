import React from 'react';
import avatar from '../assets/avatar.png'
const reviews = [
  {
    id: 1,
    user: 'Sama Seth',
    date: '2 days ago',
    title: 'Easy The most comfortable Shoes',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4.9,
    avatar: avatar, 
  },
  {
    id: 2,
    user: 'Sama Seth',
    date: '2 days ago',
    title: 'Easy The most comfortable Shoes',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4.9,
    avatar: avatar,
  },
  {
    id: 3,
    user: 'Sama Seth',
    date: '2 days ago',
    title: 'Easy The most comfortable Shoes',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4.9,
    avatar: avatar,
  },
  {
    id: 4,
    user: 'Sama Seth',
    date: '2 days ago',
    title: 'Easy The most comfortable Shoes',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4.9,
    avatar: avatar,
  },
  {
    id: 5,
    user: 'Sama Seth',
    date: '2 days ago',
    title: 'Easy The most comfortable Shoes',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit..',
    rating: 4.9,
    avatar: avatar,
  },
  {
    id: 6,
    user: 'Sama Seth',
    date: '2 days ago',
    title: 'Easy The most comfortable Shoes',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4.9,
    avatar: avatar,
  },
  {
    id: 7,
    user: 'Sama Seth',
    date: '2 days ago',
    title: 'Easy The most comfortable Shoes',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4.9,
    avatar: avatar,
  },
  {
    id: 8,
    user: 'Sama Seth',
    date: '2 days ago',
    title: 'Easy The most comfortable Shoes',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    rating: 4.9,
    avatar: avatar,
  },
];

const ReviewsSection = () => {
  return (
    <div className="h-96 overflow-y-scroll custom-scrollbar">
      <div className="p-4">
        {reviews.map((review) => (
          <div key={review.id} className="flex items-start space-x-4 mb-4">
            <img
              src={review.avatar}
              alt={`${review.user} Avatar`}
              className="w-12 h-12 rounded-full"
            />
            <div className='flex items-start justify-between gap-10'>
             <div className=''>
             <h3 className="font-semibold w-20">{review.user}</h3>
             <p>{review.date}</p>
             </div>
             <div>
             <div className='flex justify-between'>
             <p className="text-2xl">{review.title}</p>
             <div className="flex items-center">
                <span className="text-lg">{review.rating}</span>
                <div className="ml-2 text-yellow-500">
                  {'⭐'.repeat(Math.round(review.rating))}
                </div>
              </div>
             </div>
              <p className=" text-gray-600">{review.review}</p>
              
             </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
