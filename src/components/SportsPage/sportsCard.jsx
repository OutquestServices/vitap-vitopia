'use client'
import { IconHeart } from '@tabler/icons-react';
import { useState } from 'react';

function SportsCard({ beach }) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 my-4">
            <img className="w-full" src={beach.image} alt={beach.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">{beach.name}</div>
                <p className="text-gray-300 text-base">
                    {beach.description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {beach.tags.map(tag => (
                    <span key={tag} className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2">#{tag}</span>
                ))}
            </div>
            <div className="px-6 py-4 flex items-center justify-between">
                <button className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded w-[80%]">
                    Show details
                </button>
                <button onClick={() => setLiked(!liked)} className={`transition ease-in duration-300 ${liked ? 'text-red-500' : 'text-gray-500'}`}>
                    <IconHeart className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
}

export default SportsCard;
