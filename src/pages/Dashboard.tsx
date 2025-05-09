import React from 'react';
import { TrendCard } from '../components/TrendCard';
export function Dashboard() {
  const trendCategories = [{
    id: 1,
    name: 'AI in Medicine',
    count: 128
  }, {
    id: 2,
    name: 'Precision Medicine',
    count: 95
  }, {
    id: 3,
    name: 'Biomaterials',
    count: 87
  }, {
    id: 4,
    name: 'Nanotechnology',
    count: 76
  }, {
    id: 5,
    name: 'Point-of-Care Diagnostics',
    count: 64
  }];
  const trendingResearch = [{
    id: 1,
    title: 'AI-Powered Early Detection of Cardiovascular Disease Using Wearable Sensors',
    authors: 'Zhang, J., Patel, K., et al.',
    journal: 'Nature Biomedical Engineering',
    date: 'June 2023',
    citations: 42,
    category: 'AI in Medicine',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }, {
    id: 2,
    title: 'Novel Biodegradable Scaffold for Neural Tissue Engineering',
    authors: 'Rodriguez, S., Chen, L., et al.',
    journal: 'Advanced Materials',
    date: 'May 2023',
    citations: 37,
    category: 'Biomaterials',
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }, {
    id: 3,
    title: 'Nanopore Sequencing for Rapid Pathogen Detection in Clinical Settings',
    authors: 'Gupta, A., Williams, T., et al.',
    journal: 'Science Translational Medicine',
    date: 'July 2023',
    citations: 28,
    category: 'Point-of-Care Diagnostics',
    image: 'https://images.unsplash.com/photo-1579154341098-e4e158cc7f55?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }];
  return <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Research Trends</h2>
      <div className="flex overflow-x-auto py-2 -mx-4 px-4 space-x-3">
        {trendCategories.map(category => <div key={category.id} className="flex-shrink-0 px-4 py-3 bg-white rounded-lg shadow-sm border border-gray-100">
            <p className="text-sm font-medium text-blue-800">{category.name}</p>
            <p className="text-xs text-gray-500">{category.count} papers</p>
          </div>)}
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">
            Trending Research
          </h3>
          <button className="text-sm text-blue-600 font-medium">See all</button>
        </div>
        <div className="space-y-4">
          {trendingResearch.map(research => <TrendCard key={research.id} research={research} />)}
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Weekly Digest</h3>
          <button className="text-sm text-blue-600 font-medium">
            Customize
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <h4 className="font-medium text-gray-800 mb-2">
            Top Biomedical Engineering Advances This Week
          </h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 mr-2"></div>
              <p>New breakthrough in 3D bioprinting of functional tissues</p>
            </li>
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 mr-2"></div>
              <p>FDA approves novel implantable glucose monitoring system</p>
            </li>
            <li className="flex items-start">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 mr-2"></div>
              <p>
                Machine learning algorithm improves cancer detection accuracy by
                27%
              </p>
            </li>
          </ul>
          <button className="mt-3 text-blue-600 text-sm font-medium">
            Read full digest
          </button>
        </div>
      </div>
    </div>;
}