import React from 'react';
interface Research {
  id: number;
  title: string;
  authors: string;
  journal: string;
  date: string;
  citations: number;
  category: string;
  image: string;
}
interface TrendCardProps {
  research: Research;
}
export function TrendCard({
  research
}: TrendCardProps) {
  return <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <div className="flex">
        <div className="w-1/3">
          <img src={research.image} alt={research.title} className="h-full w-full object-cover" />
        </div>
        <div className="w-2/3 p-3 space-y-1">
          <div className="flex justify-between items-start">
            <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-800 rounded text-xs font-medium">
              {research.category}
            </span>
            <span className="text-xs text-gray-500">{research.date}</span>
          </div>
          <h3 className="font-medium text-gray-800 line-clamp-2 text-sm">
            {research.title}
          </h3>
          <p className="text-xs text-gray-500">{research.authors}</p>
          <div className="flex justify-between items-center text-xs pt-1">
            <span className="text-gray-600">{research.journal}</span>
            <span className="text-gray-500">
              {research.citations} citations
            </span>
          </div>
        </div>
      </div>
    </div>;
}