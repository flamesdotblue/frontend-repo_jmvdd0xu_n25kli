import React, { useMemo, useState, useCallback } from 'react';
import Navbar from './components/Navbar.jsx';
import Sidebar from './components/Sidebar.jsx';
import VideoGrid from './components/VideoGrid.jsx';
import WatchPage from './components/WatchPage.jsx';

function App() {
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const videos = useMemo(() => {
    const sampleTitles = [
      'Mastering Color Grading: A Practical Guide',
      'Minimal Editing Workflow for Creators',
      'Cinematic B-Roll with Everyday Gear',
      'Lighting Tips for Small Studios',
      'Audio Hacks: Crisp Sound on a Budget',
      'Storyboarding Your Next Short Film',
      'Vertical vs Horizontal: Format Deep Dive',
      'Lens Choices Explained in 8 Minutes',
      'How I Plan a Shoot: From Brief to Wrap',
      'The Secret to Engaging Intros',
      'Motion Graphics Essentials in 10 Steps',
      'Export Settings for Every Platform',
    ];

    const videoSources = [
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    ];

    return sampleTitles.map((title, idx) => {
      const id = idx + 1;
      const picsumId = 100 + id;
      const avatarId = 200 + id;
      const durations = ['8:12', '12:45', '5:33', '9:27', '16:02', '7:50'];
      const views = [8234, 15432, 987654, 2301, 45321, 1200456, 76543, 33421, 9801, 64532, 445566, 1203];
      const published = ['2 days ago', '1 week ago', '3 weeks ago', '1 month ago', '2 months ago', '3 months ago'];

      return {
        id,
        title,
        channel: `Creator Channel ${((id % 6) + 1)}`,
        views: views[idx % views.length],
        published: published[idx % published.length],
        duration: durations[idx % durations.length],
        thumbnail: `https://picsum.photos/id/${picsumId}/1280/720`,
        avatar: `https://picsum.photos/id/${avatarId}/200/200`,
        videoUrl: videoSources[idx % videoSources.length],
      };
    });
  }, []);

  const handleSelectVideo = useCallback((video) => {
    setCurrentVideo(video);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackOrSelectNext = useCallback((v) => {
    if (v) {
      setCurrentVideo(v);
      window.scrollTo({ top: 0 });
    } else {
      setCurrentVideo(null);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onToggleSidebar={() => setSidebarExpanded((v) => !v)} />
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6">
          <Sidebar expanded={sidebarExpanded} />
          <main className="flex-1 py-6">
            {!currentVideo ? (
              <VideoGrid videos={videos} onSelect={handleSelectVideo} />
            ) : (
              <WatchPage video={currentVideo} related={videos.filter(v => v.id !== currentVideo.id)} onBackToHome={handleBackOrSelectNext} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
