// custom_extensions/frontend/src/app/layout.tsx
import './globals.css'; // Your global styles and Tailwind imports

export const metadata = {
  title: 'Content Builder AI',
  description: 'Create online course in just 30 minutes with the help of AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full"> {/* Ensure html takes full height */}
      <body className="h-full bg-gray-50 font-['Inter',_sans-serif]"> {/* Ensure body takes full height */}
        {/* If you have an intermediate div, make it h-full too if it's the main content wrapper */}
        {/* For example: <div className="flex flex-col min-h-screen"> OR just directly children */}
        {children}
      </body>
    </html>
  );
}
