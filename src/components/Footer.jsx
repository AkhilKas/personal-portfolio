export default function Footer() {
  return (
    <footer className="py-6 border-t border-gray-200 dark:border-gray-700 light:border-gray-200 bg-white dark:bg-gray-900 light:bg-white">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 light:text-gray-500">
          © {new Date().getFullYear()} Akhilesh Kasturi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
