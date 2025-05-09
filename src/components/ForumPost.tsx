import React from 'react';
import { MessageSquareIcon, ThumbsUpIcon, BookmarkIcon, ShareIcon } from 'lucide-react';
interface ForumPostData {
  id: number;
  title: string;
  author: string;
  authorRole: string;
  date: string;
  content: string;
  likes: number;
  comments: number;
  tags: string[];
  authorAvatar: string;
}
interface ForumPostProps {
  post: ForumPostData;
}
export function ForumPost({
  post
}: ForumPostProps) {
  return <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      <div className="flex items-start space-x-3">
        <img src={post.authorAvatar} alt={post.author} className="w-10 h-10 rounded-full object-cover" />
        <div className="flex-1">
          <div className="flex justify-between">
            <div>
              <h3 className="font-medium text-gray-800">{post.title}</h3>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <span className="font-medium text-gray-700">{post.author}</span>
                <span className="mx-1">•</span>
                <span>{post.authorRole}</span>
                <span className="mx-1">•</span>
                <span>{post.date}</span>
              </div>
            </div>
            <button className="text-gray-400 hover:text-blue-600">
              <BookmarkIcon size={16} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">
            {post.content}
          </p>
          <div className="flex flex-wrap gap-1 mt-3">
            {post.tags.map((tag, index) => <span key={index} className="inline-block px-2 py-0.5 bg-gray-100 text-gray-600 rounded text-xs">
                #{tag}
              </span>)}
          </div>
          <div className="flex justify-between mt-3 pt-2 border-t border-gray-100">
            <button className="flex items-center text-gray-500 text-xs hover:text-blue-600">
              <ThumbsUpIcon size={14} className="mr-1" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center text-gray-500 text-xs hover:text-blue-600">
              <MessageSquareIcon size={14} className="mr-1" />
              <span>{post.comments} comments</span>
            </button>
            <button className="flex items-center text-gray-500 text-xs hover:text-blue-600">
              <ShareIcon size={14} className="mr-1" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </div>;
}