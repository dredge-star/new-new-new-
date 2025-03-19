export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="bg-gray-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About This Project</h1>
          <p className="text-xl">
            The purpose, methodology, and people behind this JFK assassination research
          </p>
        </div>
      </div>

      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold mb-6">Project Mission</h2>
            <p className="mb-4">
              The JFK Assassination Research website aims to provide a comprehensive, balanced, and educational resource on the assassination of President John F. Kennedy. Our mission is to present the facts, evidence, and various perspectives on this pivotal historical event in an accessible format.
            </p>
            <p className="mb-4">
              We believe that understanding this moment in history is crucial for several reasons:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>It represents a significant turning point in American history and politics</li>
              <li>It continues to shape public discourse about government transparency and trust</li>
              <li>It demonstrates the importance of critical thinking and evidence evaluation</li>
              <li>It provides insights into Cold War tensions and their domestic implications</li>
            </ul>
            <p className="mb-4">
              This website does not advocate for any particular theory or conclusion. Instead, we present multiple perspectives and encourage visitors to examine the evidence and form their own informed opinions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-3xl font-bold mb-6">Research Methodology</h2>
            <p className="mb-4">
              Our approach to researching the JFK assassination includes:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Consulting primary source documents, including government reports, photographs, films, and witness testimonies</li>
              <li>Reviewing scholarly works from historians, political scientists, and other academic experts</li>
              <li>Examining journalistic investigations and credible secondary sources</li>
              <li>Considering multiple perspectives, including official conclusions and alternative theories</li>
              <li>Distinguishing between established facts, reasonable inferences, and speculation</li>
            </ul>
            <p className="mb-4">
              We strive for accuracy and fairness in our presentation of information. When conflicts exist in the historical record, we attempt to present the various viewpoints and the evidence supporting each.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="mb-4">
              We welcome feedback, corrections, and suggestions for improving this resource. If you have information to contribute or questions about our content, please contact us at:
            </p>
            <p className="mb-6">
              Email: <a href="mailto:info@jfkresearch.org" className="text-blue-600 hover:underline">info@jfkresearch.org</a>
            </p>
            <p className="mb-4">
              For media inquiries or interview requests, please contact:
            </p>
            <p className="mb-6">
              Email: <a href="mailto:media@jfkresearch.org" className="text-blue-600 hover:underline">media@jfkresearch.org</a>
            </p>
            <p className="text-sm text-gray-600 mt-8">
              © 2025 JFK Assassination Research Project. All rights reserved. This website is for educational purposes only.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
