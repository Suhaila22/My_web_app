import React, { useState } from 'react';
import { SearchIcon, FileTextIcon, UploadIcon, LinkIcon } from 'lucide-react';
export function ResearchSummarizer() {
  const [inputType, setInputType] = useState<'text' | 'url' | 'file'>('text');
  const [inputValue, setInputValue] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [summary, setSummary] = useState<string | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate API call delay
    setTimeout(() => {
      setSummary("This study presents a novel approach to neural tissue engineering using biodegradable scaffolds. The researchers developed a composite biomaterial combining polycaprolactone and graphene oxide, which demonstrated superior mechanical properties and cellular compatibility. In vitro tests with neural stem cells showed enhanced differentiation and axonal growth compared to conventional scaffolds. The material's degradation profile aligns well with tissue regeneration timelines, making it promising for spinal cord injury applications. Key innovation: Controlled release of growth factors via engineered nanopores in the scaffold structure.");
      setIsProcessing(false);
    }, 2000);
  };
  return <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">
          AI Research Summarizer
        </h2>
        <p className="text-gray-600 text-sm mt-1">
          Get concise summaries and key insights from research papers
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
        <div className="flex border-b border-gray-200">
          <button className={`px-4 py-2 text-sm font-medium ${inputType === 'text' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`} onClick={() => setInputType('text')}>
            <div className="flex items-center">
              <FileTextIcon size={16} className="mr-2" />
              Text
            </div>
          </button>
          <button className={`px-4 py-2 text-sm font-medium ${inputType === 'url' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`} onClick={() => setInputType('url')}>
            <div className="flex items-center">
              <LinkIcon size={16} className="mr-2" />
              URL
            </div>
          </button>
          <button className={`px-4 py-2 text-sm font-medium ${inputType === 'file' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`} onClick={() => setInputType('file')}>
            <div className="flex items-center">
              <UploadIcon size={16} className="mr-2" />
              Upload
            </div>
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          {inputType === 'text' && <textarea value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Paste abstract or introduction text here..." className="w-full h-32 p-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />}
          {inputType === 'url' && <div className="relative">
              <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)} placeholder="Enter paper URL (e.g., DOI link)" className="w-full p-3 border border-gray-300 rounded-lg text-sm pl-10 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
              <LinkIcon size={16} className="absolute left-3 top-3.5 text-gray-400" />
            </div>}
          {inputType === 'file' && <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <UploadIcon size={24} className="mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-600 mb-1">
                Upload PDF or Word document
              </p>
              <p className="text-xs text-gray-500 mb-3">Max file size: 10MB</p>
              <button type="button" className="px-4 py-2 bg-gray-100 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">
                Select File
              </button>
            </div>}
          <button type="submit" disabled={!inputValue && inputType !== 'file'} className={`w-full py-3 rounded-lg text-white font-medium flex justify-center items-center ${!inputValue && inputType !== 'file' ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'}`}>
            {isProcessing ? <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </> : <>
                <SearchIcon size={18} className="mr-2" />
                Generate Summary
              </>}
          </button>
        </form>
      </div>
      {summary && <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
          <h3 className="font-semibold text-gray-800 mb-2">Summary</h3>
          <div className="text-sm text-gray-700 space-y-2">
            <p>{summary}</p>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100">
            <h4 className="font-medium text-gray-800 text-sm mb-2">
              Key Insights
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 mr-2"></div>
                <p className="text-gray-700">
                  Novel composite biomaterial combining polycaprolactone and
                  graphene oxide
                </p>
              </li>
              <li className="flex">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 mr-2"></div>
                <p className="text-gray-700">
                  Enhanced neural stem cell differentiation and axonal growth
                </p>
              </li>
              <li className="flex">
                <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-1.5 mr-2"></div>
                <p className="text-gray-700">
                  Controlled release of growth factors via engineered nanopores
                </p>
              </li>
            </ul>
          </div>
          <div className="mt-4 flex space-x-2">
            <button className="px-3 py-1.5 bg-blue-100 text-blue-700 rounded text-sm font-medium">
              Save
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded text-sm font-medium">
              Export
            </button>
            <button className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded text-sm font-medium">
              Share
            </button>
          </div>
        </div>}
    </div>;
}