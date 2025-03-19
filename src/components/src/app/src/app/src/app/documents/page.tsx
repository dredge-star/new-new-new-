import Search from '../../components/search/Search';

export default function DocumentsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">JFK Assassination Documents</h1>
          <p className="text-xl">
            Primary sources, declassified files, and research materials
          </p>
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold mb-6">Search Documents</h2>
            <Search />
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Featured Documents</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Warren Commission Report</h3>
                <p className="text-gray-600 mb-4">September 24, 1964</p>
                <p className="mb-4">
                  The official report of the Warren Commission, which investigated the assassination of President Kennedy.
                </p>
                <a href="#" className="text-blue-600 hover:underline">View document →</a>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Autopsy Report</h3>
                <p className="text-gray-600 mb-4">November 22, 1963</p>
                <p className="mb-4">
                  The official autopsy report detailing the injuries sustained by President Kennedy.
                </p>
                <a href="#" className="text-blue-600 hover:underline">View document →</a>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Zapruder Film Analysis</h3>
                <p className="text-gray-600 mb-4">Various dates</p>
                <p className="mb-4">
                  Technical analysis of the famous film that captured the assassination.
                </p>
                <a href="#" className="text-blue-600 hover:underline">View document →</a>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">House Select Committee on Assassinations Report</h3>
                <p className="text-gray-600 mb-4">July 1979</p>
                <p className="mb-4">
                  The report that concluded Kennedy was "probably assassinated as a result of a conspiracy."
                </p>
                <a href="#" className="text-blue-600 hover:underline">View document →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
