import React from 'react';
import VideoCard from './VideoCard';

const VideoGrid = ({ videos, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-6 gap-y-10">
      {videos.map((v) => (
        <VideoCard key={v.id} video={v} onClick={onSelect} />
      ))}
    </div>
  );
};

export default VideoGrid;
