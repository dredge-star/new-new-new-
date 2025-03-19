'use client';

import { useState, useEffect } from 'react';

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    date: 'November 22, 1963',
    title: 'Assassination of President Kennedy',
    description: 'President John F. Kennedy is assassinated while riding in a motorcade in Dallas, Texas at 12:30 PM CST.'
  },
  {
    id: 2,
    date: 'November 22, 1963',
    title: 'Lee Harvey Oswald Arrested',
    description: 'Lee Harvey Oswald is arrested at the Texas Theatre in Dallas at 1:50 PM, less than 90 minutes after the assassination.'
  },
  {
    id: 3,
    date: 'November 24, 1963',
    title: 'Oswald Murdered by Jack Ruby',
    description: 'While being transferred from the city jail to the county jail, Oswald is shot and killed by Dallas nightclub owner Jack Ruby.'
  },
  {
    id: 4,
    date: 'November 29, 1963',
    title: 'Warren Commission Established',
    description: 'President Lyndon B. Johnson establishes the Warren Commission to investigate the assassination.'
  },
  {
    id: 5,
    date: 'September 24, 1964',
    title: 'Warren Commission Report Released',
    description: 'The Warren Commission releases its report, concluding that Lee Harvey Oswald acted alone in assassinating President Kennedy.'
  },
  {
    id: 6,
    date: 'January 1979',
    title: 'House Select Committee on Assassinations Report',
    description: 'The HSCA concludes that Kennedy was "probably assassinated as a result of a conspiracy" but disagrees with other conspiracy theories.'
  },
  {
    id: 7,
    date: 'October 26, 1992',
    title: 'JFK Records Act',
    description: 'President George H. W. Bush signs the JFK Records Act, which mandates the release of all assassination-related documents.'
  },
  {
    id: 8,
    date: 'October 26, 2017',
    title: 'Release of JFK Assassination Records',
    description: 'President Donald Trump orders the release of thousands of previously classified JFK assassination documents.'
  },
  {
    id: 9,
    date: 'December 15, 2022',
    title: 'Final Release of JFK Documents',
    description: 'The Biden administration releases the final batch of documents related to the Kennedy assassination.'
  }
];

export default function InteractiveTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleEventClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
  };

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">JFK Assassination Timeline</h2>
      
      <div className="relative">
        {/* Timeline line - vertical on desktop, horizontal on mobile */}
        {isMobile ? (
          <div className="absolute top-1/2 transform -translate-y-1/2 h-1 w-full bg-gray-300"></div>
        ) : (
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
        )}
        
        {/* Timeline events */}
        <div className={isMobile ? "space-y-12" : "space-y-12"}>
          {timelineEvents.map((event, index) => (
            <div 
              key={event.id} 
              className={isMobile 
                ? "flex flex-col items-center mb-8" 
                : `flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`
              }
            >
              {!isMobile && (
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div 
                    className="cursor-pointer hover:bg-gray-100 p-4 rounded-lg border border-gray-200 shadow-sm transition-all"
                    onClick={() => handleEventClick(event)}
                  >
                    <h3 className="font-bold text-lg">{event.title}</h3>
                    <p className="text-sm text-gray-500">{event.date}</p>
                  </div>
                </div>
              )}
              
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full border-4 border-white">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              {isMobile ? (
                <div 
                  className="cursor-pointer hover:bg-gray-100 p-4 rounded-lg border border-gray-200 shadow-sm transition-all mt-4 w-full"
                  onClick={() => handleEventClick(event)}
                >
                  <h3 className="font-bold text-lg">{event.title}</h3>
                  <p className="text-sm text-gray-500">{event.date}</p>
                </div>
              ) : (
                <div className="w-5/12"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Event details modal - full screen on mobile */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`bg-white rounded-lg p-6 ${isMobile ? 'w-full max-h-full overflow-y-auto' : 'max-w-lg w-full'}`}>
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold">{selectedEvent.title}</h3>
                <p className="text-sm text-gray-500">{selectedEvent.date}</p>
              </div>
              <button 
                onClick={() => setSelectedEvent(null)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-700">{selectedEvent.description}</p>
            <button 
              onClick={()  => setSelectedEvent(null)}
              className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
