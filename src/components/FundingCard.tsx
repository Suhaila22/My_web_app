import React from 'react';
import { CalendarIcon, DollarSignIcon, UsersIcon, TagIcon } from 'lucide-react';
interface FundingOpportunity {
  id: number;
  title: string;
  organization: string;
  deadline: string;
  amount: string;
  eligibility: string;
  type: string;
  tags: string[];
}
interface FundingCardProps {
  opportunity: FundingOpportunity;
}
export function FundingCard({
  opportunity
}: FundingCardProps) {
  return <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <div className="space-y-2">
        <h3 className="font-medium text-gray-800">{opportunity.title}</h3>
        <p className="text-sm text-gray-600">{opportunity.organization}</p>
        <div className="flex flex-wrap gap-y-2">
          <div className="w-1/2 flex items-center text-gray-600 text-xs">
            <CalendarIcon size={12} className="mr-1" />
            <span>Deadline: {opportunity.deadline}</span>
          </div>
          <div className="w-1/2 flex items-center text-gray-600 text-xs">
            <DollarSignIcon size={12} className="mr-1" />
            <span>{opportunity.amount}</span>
          </div>
          <div className="w-full flex items-center text-gray-600 text-xs">
            <UsersIcon size={12} className="mr-1" />
            <span>Eligibility: {opportunity.eligibility}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1 pt-1">
          {opportunity.tags.map((tag, index) => <span key={index} className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
              {tag}
            </span>)}
        </div>
        <div className="pt-2 flex justify-between">
          <button className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded text-xs font-medium">
            Save
          </button>
          <button className="px-3 py-1.5 bg-blue-600 text-white rounded text-xs font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>;
}