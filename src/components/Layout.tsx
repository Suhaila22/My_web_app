import React from 'react';
import { Navigation } from './Navigation';
interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({
  children
}: LayoutProps) {
  return <div className="bg-gray-50 min-h-screen flex flex-col">
      <header className="bg-white shadow-sm py-4 px-4 fixed top-0 w-full z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-blue-800">BioMed Trends</h1>
          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-medium">
              ME
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 pt-16 pb-20 px-4 overflow-y-auto">
        {children}
      </main>
      <Navigation />
    </div>;
}