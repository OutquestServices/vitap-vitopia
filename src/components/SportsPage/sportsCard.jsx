'use client'
import { IconExternalLink, IconHeart } from '@tabler/icons-react';
import { useState } from 'react';

function SportsCard({ beach }) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 my-4">
            <img className="w-full" src={beach.imageLink} alt={beach.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">{beach.name}</div>
                <p className="text-gray-300 text-base">
                    {beach.description ? beach.description : 'No description available'}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {beach.endPrice === beach.startPrice ? (
                    <span className='text-white'>
                        ₹ {beach.startPrice}
                    </span>
                ) : (
                    <span className='text-white'>
                        ₹ {beach.endPrice} - ₹ {beach.startPrice}
                    </span>
                )}
            </div>
            <div className="px-6 py-4 flex items-center justify-between">
                <a className="bg-blue-600 hover:bg-blue-800 text-white text-center font-bold py-2 px-4 rounded w-[80%]" href={beach.link} target='_blank'>
                    Register Now
                </a>
                <button onClick={() => setLiked(!liked)} className={`transition ease-in duration-300 ${liked ? 'text-red-500' : 'text-gray-500'}`}>
                    <IconExternalLink className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
}

export default SportsCard;
