export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Kiran Reddy Yaramala. All rights reserved.
        </p>
        <p className="text-gray-500 mt-2 text-sm">
          Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
