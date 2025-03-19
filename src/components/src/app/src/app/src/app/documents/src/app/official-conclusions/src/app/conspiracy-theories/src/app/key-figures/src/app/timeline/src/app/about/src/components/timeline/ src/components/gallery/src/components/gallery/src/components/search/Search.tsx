'use client';

import { useState } from 'react';

interface Document {
  id: number;
  title: string;
  date: string;
  category: string;
  description: string;
}

const documents: Document[] = [
  {
    id: 1,
    title: "Warren Commission Report",
    date: "September 24, 1964",
    category: "Official Investigation",
    description: "The official report of the Warren Commission, which investigated the assassination of President Kennedy."
  },
  {
    id: 2,
    title: "Autopsy Report",
    date: "November 22, 1963",
    category: "Medical Evidence",
    description: "The official autopsy report detailing the injuries sustained by President Kennedy."
  },
  {
    id: 3,
    title: "Zapruder Film Analysis",
    date: "Various dates",
    category: "Visual Evidence",
    description: "Technical analysis of the famous film that captured the assassination."
  },
  {
    id: 4,
    title: "House Select Committee on Assassinations Report",
    date: "July 1979",
    category: "Official Investigation",
    description: "The report that concluded Kennedy was 'probably assassinated as a result of a conspiracy.'"
  },
  {
    id: 5,
    title: "CIA File on Lee Harvey Oswald",
    date: "1959-1964",
    category: "Intelligence Records",
    description: "CIA documents related to Lee Harvey Oswald's activities before the assassination."
  },
  {
    id: 6,
    title: "FBI Investigation Summary",
    date: "December 9, 1963",
    category: "Official Investigation",
    description: "The FBI's summary report on their investigation into the assassination."
  },
  {
    id: 7,
    title: "Testimony of Marina Oswald",
    date: "February 3-6, 1964",
    category: "Witness Testimony",
    description: "Warren Commission testimony from Lee Harvey Oswald's wife."
  },
  {
    id: 8,
    title: "Ballistics Evidence Report",
    date: "December 1963",
    category: "Forensic Evidence",
    description: "Analysis of the rifle, bullets, and ballistics evidence from the assassination."
  }
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  
  const categories = Array.from(new Set(documents.map(doc => doc.category)));
  
  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = searchTerm === '' || 
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = selectedCategory === '' || doc.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-grow">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">Search Documents</label>
            <input
              type="text"
              id="search"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search by title or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="md:w-1/3">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Filter by Category</label>
            <select
              id="category"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        {filteredDocuments.length > 0 ? (
          filteredDocuments.map((doc) => (
            <div key={doc.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">{doc.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{doc.date} • {doc.category}</p>
                  <p className="text-gray-700">{doc.description}</p>
                </div>
                <a href="#" className="text-blue-600 hover:underline whitespace-nowrap ml-4">
                  View
                </a>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">No documents found matching your search criteria.</p>
            <button 
              className="mt-2 text-blue-600 hover:underline"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
