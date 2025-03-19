export default function OfficialConclusionsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Official Conclusions</h1>
          <p className="text-xl">
            Findings from government investigations into the JFK assassination
          </p>
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold mb-6">The Warren Commission (1963-1964)</h2>
            <p className="mb-4">
              The Warren Commission was established by President Lyndon B. Johnson on November 29, 1963, to investigate the assassination of President Kennedy. The Commission was chaired by Chief Justice Earl Warren and included representatives from both political parties.
            </p>
            <p className="mb-4">
              After a 10-month investigation, the Commission concluded that:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Lee Harvey Oswald acted alone in assassinating President Kennedy</li>
              <li>Oswald fired three shots from the sixth floor of the Texas School Book Depository</li>
              <li>The Commission found no evidence of a conspiracy, either domestic or foreign</li>
              <li>Jack Ruby also acted alone in killing Oswald</li>
            </ul>
            <p className="mb-4">
              The Commission's findings have been controversial since their release, with many critics questioning the "single bullet theory" and other aspects of the investigation.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold mb-6">House Select Committee on Assassinations (1976-1979)</h2>
            <p className="mb-4">
              The House Select Committee on Assassinations (HSCA) was established in 1976 to investigate the assassinations of both President Kennedy and Dr. Martin Luther King Jr.
            </p>
            <p className="mb-4">
              The HSCA's conclusions regarding the Kennedy assassination differed from the Warren Commission:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>President Kennedy was "probably assassinated as a result of a conspiracy"</li>
              <li>The committee found acoustic evidence suggesting a high probability that two gunmen fired at the President</li>
              <li>Scientific evidence did not preclude the possibility of two gunmen firing at the President</li>
              <li>The committee believed that the conspiracy did not involve the Soviet Union, Cuba, or organized crime</li>
            </ul>
            <p className="mb-4">
              However, the acoustic evidence that formed the basis for the HSCA's conspiracy conclusion has been questioned by subsequent scientific analysis.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Other Official Investigations</h2>
            <p className="mb-4">
              Several other government agencies conducted investigations into aspects of the assassination:
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-2">The Clark Panel (1968)</h3>
            <p className="mb-4">
              A panel of medical experts that reviewed the autopsy materials and generally supported the Warren Commission's findings regarding the President's wounds.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-2">The Rockefeller Commission (1975)</h3>
            <p className="mb-4">
              Investigated CIA activities within the United States and examined questions related to the assassination, finding no evidence of CIA involvement.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-2">The Church Committee (1975-1976)</h3>
            <p className="mb-4">
              Investigated intelligence gathering by the CIA and FBI, uncovering operations against Cuba but finding no direct evidence linking these to the assassination.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-2">Assassination Records Review Board (1994-1998)</h3>
            <p className="mb-4">
              Not an investigative body, but responsible for collecting and releasing assassination-related records. The ARRB's work led to the declassification of millions of pages of documents.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
