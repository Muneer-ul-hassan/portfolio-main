'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Sports = () => {
  const sportPhotos: PhotoItem[] = [
    {
  src: '/hike.JPG',
  alt: 'Hiking adventure in Naran Valley',
  caption: 'Went on a hike in Naran and came back via zipline — wild, scenic, and completely unplanned. No photos, just memories!',
},
{
  src: '/Saif-ul-Malook.jpg',
  alt: 'Lake Saif-ul-Malook in Northern Pakistan',
  caption: 'Me at Lake Saif-ul-Malook — surrounded by majestic mountains and crystal-clear water. One of the most spontaneous trips I’ve taken!',
},
{
  src: '/img-kalam.jpg',
  alt: 'Exploring Kalam Valley in Swat',
  caption: 'A calm afternoon in Kalam Valley — lush forests, cool breeze, and the sound of rivers cutting through the mountains.',
},
{
  src: '/img-kashmir.jpg',
  alt: 'View from a hillside in Kashmir',
  caption: 'One of the most peaceful views I’ve witnessed — Kashmir’s hills wrapped in mist and silence. A place that stays with you.',
  
},

  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          My Sporting Career
        </h2>
        <p className="mt-4 text-muted-foreground">
          Sometimes, I go on hiking adventures to explore nature and disconnect from the digital world. I've explored beautiful places like Swat, Naran, Kashmir, and the stunning Lake Saif-ul-Malook. Here are a few highlights from those peaceful and memorable moments.
        </p>
      </div>
      <Photos photos={sportPhotos} />
    </div>
  );
};

export default Sports;