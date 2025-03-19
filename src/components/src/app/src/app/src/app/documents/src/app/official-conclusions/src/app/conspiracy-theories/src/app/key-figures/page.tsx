export default function KeyFiguresPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Key Figures</h1>
          <p className="text-xl">
            The individuals central to the JFK assassination and its investigation
          </p>
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">John F. Kennedy</h2>
              <p className="text-gray-600 mb-2">35th President of the United States (1961-1963)</p>
              <p className="mb-4">
                John Fitzgerald Kennedy served as President during a period of significant Cold War tension. His administration faced the Bay of Pigs invasion, the Cuban Missile Crisis, and the early stages of the Vietnam War. Kennedy's domestic agenda, known as the "New Frontier," included initiatives on civil rights, economic growth, and space exploration.
              </p>
              <p className="mb-4">
                On November 22, 1963, while visiting Dallas, Texas, Kennedy was assassinated while riding in an open motorcade through Dealey Plaza. His death shocked the nation and the world, leading to decades of investigation and speculation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Lee Harvey Oswald</h2>
              <p className="text-gray-600 mb-2">Alleged Assassin</p>
              <p className="mb-4">
                Lee Harvey Oswald was a former U.S. Marine who had defected to the Soviet Union in 1959 before returning to the United States in 1962. He worked at the Texas School Book Depository, from which the Warren Commission concluded he fired the shots that killed President Kennedy.
              </p>
              <p className="mb-4">
                Oswald was arrested hours after the assassination for the murder of Dallas police officer J.D. Tippit. While in police custody, he denied killing either Kennedy or Tippit, claiming he was a "patsy." On November 24, 1963, while being transferred from the city jail to the county jail, Oswald was shot and killed by Dallas nightclub owner Jack Ruby.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Jack Ruby</h2>
              <p className="text-gray-600 mb-2">Nightclub Owner who Killed Oswald</p>
              <p className="mb-4">
                Jacob Leon Rubenstein, known as Jack Ruby, was a Dallas nightclub owner who fatally shot Lee Harvey Oswald on November 24, 1963, while Oswald was in police custody. The shooting occurred in the basement of Dallas Police Headquarters and was broadcast live on national television.
              </p>
              <p className="mb-4">
                Ruby claimed he had acted on impulse, motivated by grief over Kennedy's death and a desire to spare Jacqueline Kennedy the ordeal of a trial. However, his connections to organized crime figures and the timing of his actions have fueled conspiracy theories. Ruby was convicted of Oswald's murder and sentenced to death, but the conviction was later overturned. He died of cancer in 1967 while awaiting a new trial.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Earl Warren</h2>
              <p className="text-gray-600 mb-2">Chief Justice, Chairman of the Warren Commission</p>
              <p className="mb-4">
                Earl Warren was the Chief Justice of the United States Supreme Court who was appointed by President Lyndon B. Johnson to head the commission investigating Kennedy's assassination. The Warren Commission conducted a 10-month investigation and concluded that Lee Harvey Oswald acted alone in assassinating Kennedy and that Jack Ruby also acted alone in killing Oswald.
              </p>
              <p className="mb-4">
                Warren's leadership of the commission has been both praised for its thoroughness and criticized for alleged oversights and a perceived rush to judgment. The commission's report, released in September 1964, remains controversial to this day.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Lyndon B. Johnson</h2>
              <p className="text-gray-600 mb-2">Vice President, succeeded Kennedy as President</p>
              <p className="mb-4">
                Lyndon Baines Johnson was sworn in as the 36th President of the United States aboard Air Force One shortly after Kennedy's assassination. Johnson established the Warren Commission to investigate the assassination and went on to implement many of Kennedy's policies, including the Civil Rights Act and the Great Society programs.
              </p>
              <p className="mb-4">
                Some conspiracy theories have suggested Johnson's involvement in the assassination, citing his political ambitions and policy differences with Kennedy, particularly regarding Vietnam. However, no credible evidence has emerged to support these claims.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Abraham Zapruder</h2>
              <p className="text-gray-600 mb-2">Filmed the Assassination</p>
              <p className="mb-4">
                Abraham Zapruder was a clothing manufacturer who captured the assassination on his 8mm home movie camera while standing on a concrete pedestal in Dealey Plaza. The Zapruder film provides the clearest visual record of the assassination and has been studied extensively by investigators and researchers.
              </p>
              <p className="mb-4">
                The film shows the presidential limousine as it moves down Elm Street, the moment Kennedy was struck, and the aftermath. It has been crucial evidence in determining the timing and nature of the shots fired. Life magazine purchased the film from Zapruder shortly after the assassination, and it was not shown in its entirety to the public until 1975.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
