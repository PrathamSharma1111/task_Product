import React from 'react';
import avatar from '../assets/avatar.png'
import stars from '../assets/stars.png'
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
        <div className="h-96 overflow-y-auto mb-10 custom-scrollbar">
            <div className="p-4 space-y-4">
                {reviews.map((review) => (
                    <div key={review.id} className="flex flex-col md:flex-row items-start md:space-x-4 md:space-y-0 space-y-4 mb-4">
                        <img
                            src={review.avatar}
                            alt={`${review.user} Avatar`}
                            className="w-12 h-12 rounded-full"
                        />
                        <div className="flex flex-col md:flex-row w-full items-start md:items-start md:justify-between gap-4">
                            <div className="flex flex-col">
                                <h3 className="font-semibold">{review.user}</h3>
                                <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col md:flex-row justify-between items-start">
                                    <p className="text-lg font-semibold">{review.title}</p>
                                    <div className="flex items-center">
                                        <span className="text-lg">{review.rating}</span>
                                        <div className="ml-2 text-yellow-500">
                                            <img src={stars} alt="stars" />
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 mt-2">{review.review}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewsSection;
