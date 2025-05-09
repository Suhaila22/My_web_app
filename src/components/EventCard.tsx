import React from 'react';
import { CalendarIcon, MapPinIcon, BookmarkIcon } from 'lucide-react';
interface Event {
  id: number;
  title: string;
  dateRange: string;
  location: string;
  type: string;
  tags: string[];
  image: string;
}
interface EventCardProps {
  event: Event;
}
export function EventCard({
  event
}: EventCardProps) {
  return <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="flex">
        <div className="w-1/3">
          <img src={event.image} alt={event.title} className="h-full w-full object-cover" />
        </div>
        <div className="w-2/3 p-3 space-y-2">
          <div className="flex justify-between">
            <h3 className="font-medium text-gray-800 text-sm line-clamp-2">
              {event.title}
            </h3>
            <button className="text-gray-400 hover:text-blue-600">
              <BookmarkIcon size={16} />
            </button>
          </div>
          <div className="flex items-center text-gray-600 text-xs">
            <CalendarIcon size={12} className="mr-1" />
            <span>{event.dateRange}</span>
          </div>
          <div className="flex items-center text-gray-600 text-xs">
            <MapPinIcon size={12} className="mr-1" />
            <span>{event.location}</span>
          </div>
          <div className="flex flex-wrap gap-1 pt-1">
            {event.tags.map((tag, index) => <span key={index} className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                {tag}
              </span>)}
          </div>
        </div>
      </div>
    </div>;
}