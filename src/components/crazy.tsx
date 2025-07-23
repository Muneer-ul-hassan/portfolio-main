'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Crazy = () => {
  const sportPhotos: PhotoItem[] = [
    {
      src: '/Saif-ul-Malook.jpg',
      alt: 'Lake Saif-ul-Malook in Northern Pakistan',
      caption: 'Me at Lake Saif-ul-Malook — surrounded by majestic mountains and crystal-clear water. One of the most spontaneous trips I’ve taken!',
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Lake Saif-ul-Malook (3,224m)
        </h2>
      </div>
      <Photos photos={sportPhotos} />
    </div>
  );
};

export default Crazy;