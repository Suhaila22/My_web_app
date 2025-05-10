import React, { useState, useEffect } from 'react';

interface Article {
  title: string;
  source: string;
  url: string;
  readers: number; // Added to show reader engagement
  publishedDate: string; // Added for recency
}

// Updated dataset with recent articles (2023–2025)
const data: Article[] = [
  {
    title: 'AI-Driven Diagnostics in Medical Imaging',
    source: 'Nature Medicine',
    url: 'https://www.nature.com/articles/s41591-023-02635-7',
    readers: 3200,
    publishedDate: '2024-03-15',
  },
  {
    title: 'Nanotechnology for Targeted Cancer Therapy',
    source: 'Springer Nature',
    url: 'https://link.springer.com/article/10.1007/s11051-023-05892-4',
    readers: 2800,
    publishedDate: '2023-11-22',
  },
  {
    title: 'Wearable Biosensors for Real-Time Health Monitoring',
    source: 'IEEE Transactions on Biomedical Engineering',
    url: 'https://ieeexplore.ieee.org/document/10345678',
    readers: 2500,
    publishedDate: '2024-07-10',
  },
  {
    title: 'Regenerative Medicine Using 3D Bioprinting',
    source: 'Elsevier Biomaterials',
    url: 'https://www.sciencedirect.com/science/article/pii/S0142961223004567',
    readers: 4100,
    publishedDate: '2023-09-18',
  },
  {
    title: 'Point-of-Care Diagnostics with Microfluidics',
    source: 'Nature Reviews Bioengineering',
    url: 'https://www.nature.com/articles/s44222-024-00145-2',
    readers: 3000,
    publishedDate: '2024-01-30',
  },
  {
    title: 'CRISPR-Based Therapies for Genetic Disorders',
    source: 'The Lancet',
    url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(24)00234-8/fulltext',
    readers: 5000,
    publishedDate: '2024-05-12',
  },
  {
    title: 'Telemedicine Advancements in Rural Healthcare',
    source: 'NEJM Catalyst',
    url: 'https://catalyst.nejm.org/doi/full/10.1056/CAT.23.0456',
    readers: 2700,
    publishedDate: '2023-12-05',
  },
  {
    title: 'Personalized Medicine Through Genomic Profiling',
    source: 'JAMA',
    url: 'https://jamanetwork.com/journals/jama/fullarticle/2812345',
    readers: 4500,
    publishedDate: '2024-08-20',
  },
];

const sources = ['All', 'Nature Medicine', 'Springer Nature', 'IEEE Transactions on Biomedical Engineering', 'Elsevier Biomaterials', 'Nature Reviews Bioengineering', 'The Lancet', 'NEJM Catalyst', 'JAMA'];

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedSource, setSelectedSource] = useState('All');
  const [results, setResults] = useState<Article[]>(data);

  // Debounce search to improve performance
  useEffect(() => {
    const handler = setTimeout(() => {
      const filtered = data.filter((item) => {
        const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
        const matchesSource = selectedSource === 'All' || item.source === selectedSource;
        return matchesQuery && matchesSource;
      });
      setResults(filtered);
    }, 300); // 300ms debounce

    return () => clearTimeout(handler); // Cleanup
  }, [query, selectedSource]);

  return (
    <div className="p-4 bg-slate-50 rounded-xl shadow-md my-4 font-inter">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
        <div className="flex w-full items-stretch rounded-xl h-12">
          <div className="text-[#4e7397] flex items-center justify-center pl-4 bg-[#e7edf3] rounded-l-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path
                d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-xl text-[#0e141b] bg-[#e7edf3] focus:outline-0 focus:ring-0 border-none h-full placeholder:text-[#4e7397] px-4 text-base font-normal leading-normal"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ابحث عن اتجاهات البحث..."
          />
        </div>
        <select
          className="border p-2 rounded-xl bg-[#e7edf3] text-[#0e141b] focus:outline-none focus:ring-2 focus:ring-[#1980e6]"
          value={selectedSource}
          onChange={(e) => setSelectedSource(e.target.value)}
        >
          {sources.map((source) => (
            <option key={source} value={source}>
              {source}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        {results.length === 0 && query ? (
          <p className="text-red-600 text-base font-medium">لا توجد نتائج مطابقة.</p>
        ) : (
          <div className="grid gap-4">
            {results.map((item, index) => (
              <div
                key={index}
                className="flex flex-col @xl:flex-row items-stretch justify-start rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl @xl:rounded-l-xl @xl:rounded-t-none"
                  style={{
                    backgroundImage: `url(https://cdn.usegalileo.ai/sdxl10/${index % 5 === 0 ? 'a4027870-da35-48ef-9c6a-c7af1374eec1' : index % 5 === 1 ? 'e8075101-8e6f-466b-94e7-547cea128b49' : index % 5 === 2 ? 'a03a375f-eafa-47b6-9c11-c6a6a99d2965' : index % 5 === 3 ? 'af0f1efe-b355-458a-b88d-f5d6ce78c508' : 'e495c9da-11d5-49da-92ac-f24d8287de72'}.png)`,
                  }}
                ></div>
                <div className="flex w-full min-w-72 grow flex-col items-stretch justify-center gap-1 p-4">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] hover:text-[#1980e6]"
                  >
                    {item.title}
                  </a>
                  <div className="flex items-end gap-3 justify-between">
                    <div className="flex flex-col gap-1">
                      <p className="text-[#4e7397] text-base font-normal leading-normal">
                        نشر بواسطة {item.source}
                      </p>
                      <p className="text-[#4e7397] text-base font-normal leading-normal">
                        {item.readers.toLocaleString()} قارئ | {item.publishedDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;