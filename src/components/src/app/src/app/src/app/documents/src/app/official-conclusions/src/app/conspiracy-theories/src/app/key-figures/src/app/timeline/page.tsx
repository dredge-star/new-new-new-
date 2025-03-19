import InteractiveTimeline from '../../components/timeline/InteractiveTimeline';

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">JFK Assassination Timeline</h1>
          <p className="text-xl">
            A chronological exploration of events before, during, and after the assassination
          </p>
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold mb-6">Interactive Timeline</h2>
            <p className="mb-8 text-lg">
              Click on any event in the timeline below to view more details about that moment in history.
            </p>
            <InteractiveTimeline />
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold mb-6">Detailed Timeline of Events</h2>
            
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4">Before the Assassination</h3>
              <div className="border-l-4 border-gray-300 pl-6 space-y-6">
                <div>
                  <h4 className="text-xl font-bold">September 26, 1963</h4>
                  <p className="text-gray-600 mb-2">Lee Harvey Oswald travels to Mexico City</p>
                  <p>
                    Oswald visits both the Cuban and Soviet embassies in Mexico City, allegedly attempting to secure visas. His activities during this trip remain a subject of investigation and speculation.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold">October 16, 1963</h4>
                  <p className="text-gray-600 mb-2">Oswald begins work at Texas School Book Depository</p>
                  <p>
                    Lee Harvey Oswald obtains employment at the Texas School Book Depository in Dallas through a referral from Ruth Paine, a friend of his wife Marina.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold">November 18, 1963</h4>
                  <p className="text-gray-600 mb-2">Motorcade route published</p>
                  <p>
                    The Dallas newspapers publish the planned route of the presidential motorcade, which includes passing through Dealey Plaza in front of the Texas School Book Depository.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold">November 21, 1963</h4>
                  <p className="text-gray-600 mb-2">President Kennedy arrives in Texas</p>
                  <p>
                    President and Mrs. Kennedy arrive in San Antonio, Texas, beginning a two-day tour of the state designed to smooth over frictions in the Democratic Party between liberal and conservative factions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-4">Day of the Assassination: November 22, 1963</h3>
              <div className="border-l-4 border-gray-300 pl-6 space-y-6">
                <div>
                  <h4 className="text-xl font-bold">Morning</h4>
                  <p className="text-gray-600 mb-2">Oswald and motorcade preparations</p>
                  <p>
                    Lee Harvey Oswald rides to work with co-worker Buell Wesley Frazier, carrying a package he claims contains curtain rods. The presidential motorcade prepares to travel through Dallas.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold">11:38 AM</h4>
                  <p className="text-gray-600 mb-2">Air Force One lands in Dallas</p>
                  <p>
                    The presidential plane lands at Love Field in Dallas. The Kennedys greet a crowd of well-wishers before boarding the presidential limousine for the motorcade.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold">12:29 PM</h4>
                  <p className="text-gray-600 mb-2">Motorcade enters Dealey Plaza</p>
                  <p>
                    The presidential motorcade enters Dealey Plaza and slows to make the sharp left turn onto Elm Street, passing the Texas School Book Depository.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold">12:30 PM</h4>
                  <p className="text-gray-600 mb-2">Shots fired at President Kennedy</p>
                  <p>
                    Multiple shots are fired at President Kennedy's motorcade. The president is struck in the neck and head. Texas Governor John Connally is also wounded. The limousine speeds to Parkland Memorial Hospital.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold">1:00 PM</h4>
                  <p className="text-gray-600 mb-2">President Kennedy pronounced dead</p>
                  <p>
                    President Kennedy is pronounced dead at Parkland Memorial Hospital. Doctors had attempted emergency procedures but were unable to save him due to the severity of his head wound.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
