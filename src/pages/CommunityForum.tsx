import React, { useState } from 'react';
import { ForumPost } from '../components/ForumPost';
import { SearchIcon, PlusIcon, TrendingUpIcon, ClockIcon, StarIcon } from 'lucide-react';
export function CommunityForum() {
  const [activeTab, setActiveTab] = useState<'trending' | 'recent' | 'following'>('trending');
  const [searchQuery, setSearchQuery] = useState('');
  const forumPosts = [{
    id: 1,
    title: 'Advances in machine learning for medical image analysis',
    author: 'Dr. Sarah Chen',
    authorRole: 'Research Scientist',
    date: '2 hours ago',
    content: "I've been exploring new CNN architectures for tumor detection in MRI scans. Has anyone worked with Vision Transformers for this application?",
    likes: 24,
    comments: 8,
    tags: ['AI', 'Machine Learning', 'Medical Imaging'],
    authorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  }, {
    id: 2,
    title: 'Regulatory challenges for novel biomaterials',
    author: 'Michael Rodriguez',
    authorRole: 'Regulatory Affairs Specialist',
    date: 'Yesterday',
    content: "Our team is developing a new biodegradable scaffold for tissue engineering. What's the current FDA pathway for such materials?",
    likes: 16,
    comments: 12,
    tags: ['Regulatory', 'Biomaterials', 'FDA'],
    authorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  }, {
    id: 3,
    title: 'Point-of-care diagnostics for resource-limited settings',
    author: 'Dr. Amara Okafor',
    authorRole: 'Assistant Professor',
    date: '3 days ago',
    content: 'Looking for collaborators on a project developing low-cost diagnostic tools for infectious diseases in rural areas. Any recommendations for robust, field-deployable biosensors?',
    likes: 31,
    comments: 15,
    tags: ['Diagnostics', 'Global Health', 'Biosensors'],
    authorAvatar: 'https://randomuser.me/api/portraits/women/65.jpg'
  }];
  const filteredPosts = searchQuery ? forumPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.content.toLowerCase().includes(searchQuery.toLowerCase()) || post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))) : forumPosts;
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Community Forum</h2>
        <button className="p-2 bg-blue-600 rounded-full text-white">
          <PlusIcon size={18} />
        </button>
      </div>
      <div className="relative">
        <input type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} placeholder="Search discussions..." className="w-full p-3 border border-gray-300 rounded-lg text-sm pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
        <SearchIcon size={16} className="absolute left-3 top-3.5 text-gray-400" />
      </div>
      <div className="flex border-b border-gray-200">
        <button className={`px-4 py-2 text-sm font-medium ${activeTab === 'trending' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`} onClick={() => setActiveTab('trending')}>
          <div className="flex items-center">
            <TrendingUpIcon size={16} className="mr-2" />
            Trending
          </div>
        </button>
        <button className={`px-4 py-2 text-sm font-medium ${activeTab === 'recent' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`} onClick={() => setActiveTab('recent')}>
          <div className="flex items-center">
            <ClockIcon size={16} className="mr-2" />
            Recent
          </div>
        </button>
        <button className={`px-4 py-2 text-sm font-medium ${activeTab === 'following' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`} onClick={() => setActiveTab('following')}>
          <div className="flex items-center">
            <StarIcon size={16} className="mr-2" />
            Following
          </div>
        </button>
      </div>
      <div className="space-y-4">
        {filteredPosts.length > 0 ? filteredPosts.map(post => <ForumPost key={post.id} post={post} />) : <div className="text-center py-8">
            <p className="text-gray-500">
              No discussions match your search criteria.
            </p>
          </div>}
      </div>
      <div className="bg-blue-50 rounded-lg p-4">
        <h3 className="font-medium text-blue-800 mb-2">Popular Topics</h3>
        <div className="flex flex-wrap gap-2">
          <button className="px-3 py-1.5 bg-white text-blue-700 rounded-full text-xs font-medium border border-blue-200">
            #ArtificialIntelligence
          </button>
          <button className="px-3 py-1.5 bg-white text-blue-700 rounded-full text-xs font-medium border border-blue-200">
            #Biomaterials
          </button>
          <button className="px-3 py-1.5 bg-white text-blue-700 rounded-full text-xs font-medium border border-blue-200">
            #MedicalDevices
          </button>
          <button className="px-3 py-1.5 bg-white text-blue-700 rounded-full text-xs font-medium border border-blue-200">
            #Nanotechnology
          </button>
          <button className="px-3 py-1.5 bg-white text-blue-700 rounded-full text-xs font-medium border border-blue-200">
            #RegenerationMedicine
          </button>
        </div>
      </div>
    </div>;
}