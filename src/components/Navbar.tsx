import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="text-xl font-bold mb-2 md:mb-0">
          JFK Assassination: The Evidence
        </Link>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="hover:text-blue-300">
            Home
          </Link>
          <Link href="/documents" className="hover:text-blue-300">
            Documents
          </Link>
          <Link href="/official-conclusions" className="hover:text-blue-300">
            Official Conclusions
          </Link>
          <Link href="/conspiracy-theories" className="hover:text-blue-300">
            Conspiracy Theories
          </Link>
          <Link href="/key-figures" className="hover:text-blue-300">
            Key Figures
          </Link>
          <Link href="/timeline" className="hover:text-blue-300">
            Timeline
          </Link>
          <Link href="/about" className="hover:text-blue-300">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
