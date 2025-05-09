import React, { useState } from 'react';
import { FundingCard } from '../components/FundingCard';
import { SearchIcon, FilterIcon } from 'lucide-react';
export function FundingOpportunities() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'grants' | 'fellowships' | 'prizes'>('all');
  const fundingOpportunities = [{
    id: 1,
    title: 'Innovative Medical Devices Research Grant',
    organization: 'National Institutes of Health (NIH)',
    deadline: 'October 30, 2023',
    amount: '$500,000',
    eligibility: 'Academic institutions and research organizations',
    type: 'grants',
    tags: ['Medical Devices', 'Innovation', 'Research']
  }, {
    id: 2,
    title: 'Biomedical Engineering Fellowship Program',
    organization: 'Howard Hughes Medical Institute',
    deadline: 'December 15, 2023',
    amount: '$80,000 per year for 3 years',
    eligibility: 'Postdoctoral researchers',
    type: 'fellowships',
    tags: ['Fellowship', 'Career Development', 'Biomedical Engineering']
  }, {
    id: 3,
    title: 'Breakthrough Medical Technology Prize',
    organization: 'MedTech Innovation Foundation',
    deadline: 'January 31, 2024',
    amount: '$250,000',
    eligibility: 'Startups and individual inventors',
    type: 'prizes',
    tags: ['Innovation', 'Competition', 'Medical Technology']
  }, {
    id: 4,
    title: 'Translational Research in Biomaterials Grant',
    organization: 'National Science Foundation (NSF)',
    deadline: 'November 15, 2023',
    amount: '$350,000',
    eligibility: 'Academic research teams',
    type: 'grants',
    tags: ['Biomaterials', 'Translational Research', 'Development']
  }];
  const filteredOpportunities = activeFilter === 'all' ? fundingOpportunities : fundingOpportunities.filter(opportunity => opportunity.type === activeFilter);
  const searchedOpportunities = searchQuery ? filteredOpportunities.filter(opportunity => opportunity.title.toLowerCase().includes(searchQuery.toLowerCase()) || opportunity.organization.toLowerCase().includes(searchQuery.toLowerCase()) || opportunity.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) : filteredOpportunities;
  return <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          Funding Opportunities
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          Grants, fellowships, and research funding
        </p>
      </div>
      <div className="relative">
        <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search funding opportunities..." className="w-full p-3 border border-gray-300 rounded-lg text-sm pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        <SearchIcon size={16} className="absolute left-3 top-3.5 text-gray-400" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex space-x-2 overflow-x-auto">
          <button className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${activeFilter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`} onClick={() => setActiveFilter('all')}>
            All
          </button>
          <button className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${activeFilter === 'grants' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`} onClick={() => setActiveFilter('grants')}>
            Grants
          </button>
          <button className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${activeFilter === 'fellowships' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`} onClick={() => setActiveFilter('fellowships')}>
            Fellowships
          </button>
          <button className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap ${activeFilter === 'prizes' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'}`} onClick={() => setActiveFilter('prizes')}>
            Prizes
          </button>
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <FilterIcon size={18} />
        </button>
      </div>
      <div className="space-y-4">
        {searchedOpportunities.length > 0 ? searchedOpportunities.map(opportunity => <FundingCard key={opportunity.id} opportunity={opportunity} />) : <div className="text-center py-8">
            <p className="text-gray-500">
              No funding opportunities match your search criteria.
            </p>
          </div>}
      </div>
      <div className="bg-blue-50 rounded-lg p-4">
        <h3 className="font-medium text-blue-800 mb-2">Funding Alert</h3>
        <p className="text-sm text-blue-700 mb-3">
          New NIH funding program for AI applications in medical diagnostics
          announced. Deadline approaching in 2 weeks.
        </p>
        <button className="px-3 py-1.5 bg-blue-600 text-white rounded text-sm font-medium">
          View Details
        </button>
      </div>
    </div>;
}