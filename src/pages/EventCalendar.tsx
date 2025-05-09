import React, { useState } from 'react';
import { EventCard } from '../components/EventCard';
import { CalendarIcon, MapPinIcon, FilterIcon } from 'lucide-react';
export function EventCalendar() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'conferences' | 'workshops' | 'webinars'>('all');
  const events = [{
    id: 1,
    title: 'International Conference on Medical Devices and Biosensors',
    dateRange: 'October 15-18, 2023',
    location: 'Boston, MA, USA',
    type: 'conferences',
    tags: ['Medical Devices', 'Biosensors', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }, {
    id: 2,
    title: 'Workshop on Neural Engineering and Brain-Computer Interfaces',
    dateRange: 'November 5-6, 2023',
    location: 'Virtual',
    type: 'workshops',
    tags: ['Neural Engineering', 'BCI', 'AI'],
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }, {
    id: 3,
    title: 'Advances in Biomaterials for Tissue Engineering',
    dateRange: 'September 28, 2023',
    location: 'Online Webinar',
    type: 'webinars',
    tags: ['Biomaterials', 'Tissue Engineering'],
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }, {
    id: 4,
    title: 'European Symposium on Biomedical Engineering',
    dateRange: 'December 3-5, 2023',
    location: 'Munich, Germany',
    type: 'conferences',
    tags: ['Biomedical Engineering', 'Research', 'Innovation'],
    image: 'https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }];
  const filteredEvents = activeFilter === 'all' ? events : events.filter(event => event.type === activeFilter);
  return <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Event Calendar</h2>
        <p className="text-gray-600 text-sm mt-1">
          Upcoming conferences, workshops, and events
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          <button className={`px-3 py-1.5 rounded-full text-sm font-medium ${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`} onClick={() => setActiveFilter('all')}>
            All
          </button>
          <button className={`px-3 py-1.5 rounded-full text-sm font-medium ${activeFilter === 'conferences' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`} onClick={() => setActiveFilter('conferences')}>
            Conferences
          </button>
          <button className={`px-3 py-1.5 rounded-full text-sm font-medium ${activeFilter === 'workshops' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`} onClick={() => setActiveFilter('workshops')}>
            Workshops
          </button>
          <button className={`px-3 py-1.5 rounded-full text-sm font-medium ${activeFilter === 'webinars' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`} onClick={() => setActiveFilter('webinars')}>
            Webinars
          </button>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FilterIcon size={18} />
        </button>
      </div>
      <div className="flex items-center space-x-2 bg-blue-50 text-blue-800 p-3 rounded-lg">
        <CalendarIcon size={18} />
        <span className="text-sm font-medium">September 2023</span>
      </div>
      <div className="space-y-4">
        {filteredEvents.map(event => <EventCard key={event.id} event={event} />)}
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
        <h3 className="font-medium text-gray-800 mb-3">Featured Event</h3>
        <div className="space-y-3">
          <img src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="BioMed Innovation Summit" className="w-full h-40 object-cover rounded-lg" />
          <div>
            <h4 className="font-semibold text-gray-800">
              BioMed Innovation Summit 2023
            </h4>
            <div className="flex items-center text-gray-600 text-sm mt-1">
              <CalendarIcon size={14} className="mr-1" />
              <span>November 12-14, 2023</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm mt-1">
              <MapPinIcon size={14} className="mr-1" />
              <span>San Francisco, CA</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Join leading researchers, entrepreneurs, and industry experts to
              explore the future of biomedical engineering and healthcare
              innovation.
            </p>
            <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>;
}