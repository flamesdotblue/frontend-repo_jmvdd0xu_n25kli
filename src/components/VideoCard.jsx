import React from 'react';
import { MoreVertical } from 'lucide-react';

const formatViews = (num) => {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M views`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K views`;
  return `${num} views`;
};

const VideoCard = ({ video }) => {
  return (
    <div className="group">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
          loading="lazy"
        />
        <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
          {video.duration}
        </span>
      </div>
      <div className="mt-3 flex items-start gap-3">
        <img
          src={video.avatar}
          alt={video.channel}
          className="h-9 w-9 rounded-full object-cover bg-gray-200"
          loading="lazy"
        />
        <div className="flex-1 min-w-0">
          <h3 className="line-clamp-2 font-semibold leading-snug">{video.title}</h3>
          <p className="mt-1 text-sm text-gray-600">{video.channel}</p>
          <p className="text-xs text-gray-500">{formatViews(video.views)} • {video.published}</p>
        </div>
        <button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <MoreVertical className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default VideoCard;
