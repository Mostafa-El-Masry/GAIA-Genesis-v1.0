import Link from "next/link";
import Healthtracker from "./Healthtracker/page";
import Gallery from "./Gallery/page";

const page = () => {
  return (
    <div>
      <Link href="/" className="text-3xl font-bold text-center block my-6">
        GAIA Genesis
      </Link>

      <Link
        href="/Gallery"
        className="text-blue-500 underline block text-center mb-6"
      >
        View Gallery
      </Link>
      <Link
        href="/Healthtracker"
        className="text-blue-500 underline block text-center mb-6"
      >
        View Health Tracker
      </Link>

      <footer className="text-center text-gray-500 py-6">
        GAIA Genesis © 2025 — Built with Next.js & Tailwind
      </footer>
    </div>
  );
};

export default page;
