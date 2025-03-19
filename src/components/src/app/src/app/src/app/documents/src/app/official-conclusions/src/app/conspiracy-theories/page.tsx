export default function ConspiracyTheoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Conspiracy Theories</h1>
          <p className="text-xl">
            Alternative explanations for the assassination of President Kennedy
          </p>
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-bold mb-6">Introduction to JFK Conspiracy Theories</h2>
            <p className="mb-4">
              Since November 22, 1963, numerous alternative theories have emerged challenging the official conclusion that Lee Harvey Oswald acted alone in assassinating President Kennedy. Public opinion polls consistently show that a majority of Americans believe some form of conspiracy was involved.
            </p>
            <p className="mb-4">
              This page presents major conspiracy theories that have gained significant attention. The inclusion of these theories does not constitute endorsement; rather, they are presented for educational and research purposes.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-bold mb-6">The Grassy Knoll / Multiple Shooters Theory</h2>
            <p className="mb-4">
              One of the most enduring conspiracy theories suggests that at least one additional shooter was positioned on the grassy knoll area of Dealey Plaza, firing at the presidential motorcade from the front.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-2">Key Points:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Many witnesses reported hearing shots from the grassy knoll area</li>
              <li>Some interpret the backward movement of Kennedy's head in the Zapruder film as evidence of a shot from the front</li>
              <li>Acoustic evidence analyzed by the House Select Committee on Assassinations suggested a high probability of a second shooter</li>
              <li>Critics argue that the medical evidence does not support a shot from the front</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-bold mb-6">Organized Crime Involvement</h2>
            <p className="mb-4">
              This theory suggests that organized crime figures orchestrated Kennedy's assassination, possibly in retaliation for the administration's crackdown on organized crime or due to connections with Cuba.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-2">Key Points:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Robert Kennedy, as Attorney General, had intensified efforts against organized crime</li>
              <li>Jack Ruby, who killed Oswald, had connections to organized crime figures</li>
              <li>Some mob figures were recorded making threats against Kennedy</li>
              <li>The CIA and FBI had working relationships with certain organized crime figures regarding Cuba</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-bold mb-6">CIA/Intelligence Community Involvement</h2>
            <p className="mb-4">
              This theory suggests elements within the U.S. intelligence community were involved in the assassination, possibly due to disagreements over Cuba policy or other Cold War issues.
            </p>
            <h3 className="text-xl font-bold mt-6 mb-2">Key Points:</h3>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Kennedy had conflicts with the CIA, particularly after the Bay of Pigs invasion</li>
              <li>Questions about Oswald's activities in Russia and Mexico City and possible intelligence connections</li>
              <li>Allegations of CIA operations to eliminate foreign leaders</li>
              <li>Claims of altered or destroyed evidence by intelligence agencies</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Other Notable Theories</h2>
            
            <h3 className="text-xl font-bold mt-4 mb-2">Military-Industrial Complex</h3>
            <p className="mb-4">
              Suggests Kennedy was killed because he planned to withdraw from Vietnam, threatening defense industry profits.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-2">Soviet/Cuban Involvement</h3>
            <p className="mb-4">
              Proposes that the Soviet Union or Cuba orchestrated the assassination in response to U.S. policies during the Cold War.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-2">Lyndon Johnson Involvement</h3>
            <p className="mb-4">
              Suggests Vice President Johnson was involved in a plot to assassinate Kennedy to become president.
            </p>
            
            <h3 className="text-xl font-bold mt-6 mb-2">Secret Service Accidental Discharge</h3>
            <p className="mb-4">
              Proposes that a Secret Service agent accidentally fired his weapon after hearing Oswald's shots, accidentally hitting Kennedy.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
