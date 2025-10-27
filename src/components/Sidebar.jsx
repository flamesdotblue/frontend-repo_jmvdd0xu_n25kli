import React from 'react';
import { Home, Compass, Library, Clock, Settings, PlayCircle, Film, Music } from 'lucide-react';

const itemsPrimary = [
  { icon: Home, label: 'Home' },
  { icon: Compass, label: 'Explore' },
  { icon: PlayCircle, label: 'Subscriptions' },
];

const itemsLibrary = [
  { icon: Library, label: 'Library' },
  { icon: Clock, label: 'History' },
  { icon: Film, label: 'Movies' },
  { icon: Music, label: 'Music' },
  { icon: Settings, label: 'Settings' },
];

const SidebarItem = ({ icon: Icon, label, expanded }) => {
  if (expanded) {
    return (
      <button className="group flex items-center w-full gap-3 rounded-lg px-3 py-2 hover:bg-gray-100 transition-colors justify-start">
        <Icon className="h-5 w-5" />
        <span className="text-sm">{label}</span>
      </button>
    );
  }

  return (
    <button className="group w-full rounded-xl px-0 py-3 grid place-items-center text-center">
      <span className="rounded-lg p-2 transition-colors group-hover:bg-gray-100">
        <Icon className="h-5 w-5" />
      </span>
      <span className="mt-1 block text-[11px] text-gray-600">{label}</span>
    </button>
  );
};

const Sidebar = ({ expanded }) => {
  return (
    <aside
      className={`${expanded ? 'w-60' : 'w-20'} shrink-0 transition-[width] duration-200 ease-in-out h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto border-r bg-white`}
      aria-label="Sidebar"
    >
      <nav className="p-3">
        <div className="space-y-1">
          {itemsPrimary.map((it) => (
            <SidebarItem key={it.label} icon={it.icon} label={it.label} expanded={expanded} />
          ))}
        </div>
        <div className="my-3 border-t" />
        <div className="space-y-1">
          {itemsLibrary.map((it) => (
            <SidebarItem key={it.label} icon={it.icon} label={it.label} expanded={expanded} />
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
