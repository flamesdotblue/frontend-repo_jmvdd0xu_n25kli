import React from 'react';
import VideoPlayer from './VideoPlayer';
import VideoGrid from './VideoGrid';
import { ThumbsUp, ThumbsDown, Share2, Download, MoreHorizontal } from 'lucide-react';

const formatViews = (num) => {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M views`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K views`;
  return `${num} views`;
};

const WatchPage = ({ video, related = [], onBackToHome }) => {
  if (!video) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-8 py-6">
      <div className="flex-1 min-w-0">
        <VideoPlayer src={video.videoUrl} poster={video.thumbnail} title={video.title} />
        <h1 className="mt-4 text-xl sm:text-2xl font-semibold leading-tight">{video.title}</h1>

        <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <img src={video.avatar} alt={video.channel} className="h-10 w-10 rounded-full object-cover" />
            <div>
              <div className="font-medium">{video.channel}</div>
              <div className="text-xs text-gray-500">{formatViews(video.views)} • {video.published}</div>
            </div>
            <button className="ml-2 rounded-full px-4 py-2 bg-black text-white text-sm font-medium">Subscribe</button>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-full bg-gray-100 hover:bg-gray-200 px-4 py-2 text-sm font-medium">
              <ThumbsUp className="h-4 w-4" /> Like
            </button>
            <button className="flex items-center gap-2 rounded-full bg-gray-100 hover:bg-gray-200 px-4 py-2 text-sm font-medium">
              <ThumbsDown className="h-4 w-4" /> Dislike
            </button>
            <button className="flex items-center gap-2 rounded-full bg-gray-100 hover:bg-gray-200 px-4 py-2 text-sm font-medium">
              <Share2 className="h-4 w-4" /> Share
            </button>
            <button className="flex items-center gap-2 rounded-full bg-gray-100 hover:bg-gray-200 px-4 py-2 text-sm font-medium">
              <Download className="h-4 w-4" /> Download
            </button>
            <button className="rounded-full bg-gray-100 hover:bg-gray-200 p-2">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm text-gray-700">
          <div className="font-medium mb-1">Description</div>
          <p>Explore tips, techniques, and behind-the-scenes of creating engaging videos. This guide covers setup, shooting, and post-production workflows that scale.</p>
          <button onClick={onBackToHome} className="mt-3 text-indigo-600 hover:underline">Back to home</button>
        </div>
      </div>

      <aside className="w-full lg:w-[380px] xl:w-[420px] shrink-0">
        <div className="text-base font-semibold mb-3">Up next</div>
        <div className="grid grid-cols-1 gap-6">
          {related.slice(0, 10).map((v) => (
            <div key={v.id} className="grid grid-cols-[168px_1fr] gap-3">
              <button onClick={() => onBackToHome(v)} className="block w-full">
                <img src={v.thumbnail} alt={v.title} className="aspect-video w-full rounded-lg object-cover" />
              </button>
              <div className="min-w-0">
                <div className="font-medium line-clamp-2 leading-snug">{v.title}</div>
                <div className="text-xs text-gray-500 mt-1">{v.channel}</div>
                <div className="text-xs text-gray-500">{formatViews(v.views)} • {v.published}</div>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default WatchPage;
