import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';

const Navbar = ({ onToggleSidebar }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-3">
        <button
          onClick={onToggleSidebar}
          className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-6 w-6" />
        </button>
        <div className="text-xl font-semibold tracking-tight">VidHive</div>

        <div className="flex-1" />

        <div className="hidden md:flex items-center w-full max-w-xl">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-l-full border border-gray-300 px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
          </div>
          <button className="h-10 px-4 rounded-r-full bg-gray-100 border border-l-0 border-gray-300 hover:bg-gray-200">
            Search
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full hover:bg-gray-100"><Search className="h-5 w-5 md:hidden" /></button>
          <button className="p-2 rounded-full hover:bg-gray-100"><Bell className="h-5 w-5" /></button>
          <button className="p-2 rounded-full hover:bg-gray-100"><User className="h-5 w-5" /></button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
