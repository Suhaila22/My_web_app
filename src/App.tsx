import React, { useState, useEffect } from 'react';

interface Article {
  title: string;
  source: string;
  url: string;
}

const data: Article[] = [
  {
    title: "AI for Medical Diagnosis",
    source: "Nature",
    url: "https://www.nature.com/articles/s41591-019-0721-3"
  },
  {
    title: "Big Data Analytics",
    source: "IEEE",
    url: "https://ieeexplore.ieee.org/document/7528210"
  },
  {
    title: "Bioengineering Trends",
    source: "Elsevier",
    url: "https://www.sciencedirect.com/science/article/pii/S1369702116300699"
  },
  {
    title: "Nanotech in Medicine",
    source: "Springer",
    url: "https://link.springer.com/article/10.1007/s11051-019-4528-0"
  },
  {
    title: "Neural Networks Research",
    source: "IEEE",
    url: "https://ieeexplore.ieee.org/document/9065670"
  },
  {
    title: "Cancer Genomics Study",
    source: "Nature",
    url: "https://www.nature.com/articles/s41586-020-1969-6"
  },
  {
    title: "Machine Learning in Imaging",
    source: "Elsevier",
    url: "https://www.sciencedirect.com/science/article/pii/S0895611119301640"
  },
  {
    title: "Robotics in Surgery",
    source: "Springer",
    url: "https://link.springer.com/article/10.1007/s11548-019-02022-1"
  }
];

const sources = ["All", "Nature", "IEEE", "Elsevier", "Springer"];

const SearchComponent: React.FC = () => {
  const [query, setQuery] = useState('');
  const [selectedSource, setSelectedSource] = useState('All');
  const [results, setResults] = useState<Article[]>([]);

  useEffect(() => {
    const filtered = data.filter((item) => {
      const matchesQuery = item.title.toLowerCase().includes(query.toLowerCase());
      const matchesSource = selectedSource === 'All' || item.source === selectedSource;
      return matchesQuery && matchesSource;
    });
    setResults(filtered);
  }, [query, selectedSource]); // يتم التحديث عند أي تغيير

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md my-4">
      <div className="flex flex-col md:flex-row gap-2 items-start md:items-center">
        <input
          type="text"
          className="border p-2 flex-1 w-full md:w-auto"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="اكتب كلمات البحث..."
        />
        <select
          className="border p-2"
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

      <ul className="mt-4 list-disc ps-6">
        {results.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-semibold underline"
            >
              {item.title}
            </a>{' '}
            <span className="text-gray-600">— {item.source}</span>
          </li>
        ))}
        {results.length === 0 && query && (
          <li className="text-red-600">لا توجد نتائج مطابقة.</li>
        )}
      </ul>
    </div>
  );
};

export default SearchComponent;
