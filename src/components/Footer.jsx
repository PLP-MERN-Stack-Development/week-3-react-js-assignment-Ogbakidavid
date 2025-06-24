export default function Footer() {
  return (
    <footer className="bg-blue-600 text-zinc-100 dark:bg-zinc-900 text-center text-sm mt-auto p-4">
      &copy; {new Date().getFullYear()} All Rights Reserved.
    </footer>
  );
}