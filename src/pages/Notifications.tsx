import React, { useState } from 'react';
import { BellIcon, SettingsIcon, CheckIcon, TrashIcon } from 'lucide-react';
export function Notifications() {
  const [activeTab, setActiveTab] = useState<'all' | 'unread'>('all');
  const notifications = [{
    id: 1,
    title: 'New research on AI in cardiovascular diagnostics',
    description: 'A new paper matching your interests in AI and diagnostics has been published in Nature Biomedical Engineering.',
    date: '2 hours ago',
    isRead: false,
    type: 'research'
  }, {
    id: 2,
    title: 'Funding opportunity alert',
    description: 'NSF has announced a new grant for innovative medical device development. Application deadline in 30 days.',
    date: 'Yesterday',
    isRead: false,
    type: 'funding'
  }, {
    id: 3,
    title: 'Conference registration deadline',
    description: 'Early bird registration for the International Biomedical Engineering Conference ends tomorrow.',
    date: '2 days ago',
    isRead: true,
    type: 'event'
  }, {
    id: 4,
    title: 'New discussion in Biomaterials forum',
    description: 'Dr. Emily Johnson started a discussion on novel hydrogels for drug delivery that matches your interests.',
    date: '3 days ago',
    isRead: true,
    type: 'forum'
  }];
  const filteredNotifications = activeTab === 'all' ? notifications : notifications.filter(notification => !notification.isRead);
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Notifications</h2>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <SettingsIcon size={18} />
        </button>
      </div>
      <div className="flex border-b border-gray-200">
        <button className={`px-4 py-2 text-sm font-medium ${activeTab === 'all' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`} onClick={() => setActiveTab('all')}>
          All
        </button>
        <button className={`px-4 py-2 text-sm font-medium ${activeTab === 'unread' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`} onClick={() => setActiveTab('unread')}>
          Unread
        </button>
      </div>
      <div className="space-y-3">
        {filteredNotifications.length > 0 ? filteredNotifications.map(notification => <div key={notification.id} className={`p-4 rounded-lg border ${!notification.isRead ? 'bg-blue-50 border-blue-100' : 'bg-white border-gray-100'}`}>
              <div className="flex justify-between">
                <h3 className={`font-medium ${!notification.isRead ? 'text-blue-800' : 'text-gray-800'}`}>
                  {notification.title}
                </h3>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-blue-600">
                    <CheckIcon size={16} />
                  </button>
                  <button className="text-gray-400 hover:text-red-600">
                    <TrashIcon size={16} />
                  </button>
                </div>
              </div>
              <p className={`text-sm mt-1 ${!notification.isRead ? 'text-blue-700' : 'text-gray-600'}`}>
                {notification.description}
              </p>
              <div className="flex justify-between items-center mt-2">
                <span className={`text-xs ${!notification.isRead ? 'text-blue-600' : 'text-gray-500'}`}>
                  {notification.date}
                </span>
                <div className={`inline-block px-2 py-0.5 rounded text-xs font-medium
                    ${notification.type === 'research' ? 'bg-purple-100 text-purple-800' : notification.type === 'funding' ? 'bg-green-100 text-green-800' : notification.type === 'event' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                  {notification.type.charAt(0).toUpperCase() + notification.type.slice(1)}
                </div>
              </div>
            </div>) : <div className="text-center py-8">
            <BellIcon size={40} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500">No unread notifications</p>
          </div>}
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
        <h3 className="font-medium text-gray-800 mb-3">Alert Preferences</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700">
                Research Updates
              </p>
              <p className="text-xs text-gray-500">
                Get alerts for new research in your areas of interest
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700">
                Funding Opportunities
              </p>
              <p className="text-xs text-gray-500">
                Notifications about grants and funding relevant to your field
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700">
                Event Reminders
              </p>
              <p className="text-xs text-gray-500">
                Reminders about upcoming conferences and events
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-700">
                Community Activity
              </p>
              <p className="text-xs text-gray-500">
                Notifications about forum discussions and replies
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>;
}