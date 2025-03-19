import Navbar from '../components/Navbar';
import './globals.css';

export const metadata = {
  title: 'JFK Assassination Research',
  description: 'Comprehensive research on the JFK assassination',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
