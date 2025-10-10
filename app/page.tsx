import Counter from "./components/Counter";
import Gallery from "./components/Gallery";

const page = () => {
  return (
    <div>
      <Counter />
      <Gallery />

      <footer className="text-center text-gray-500 py-6">
        GAIA Genesis © 2025 — Built with Next.js & Tailwind
      </footer>
    </div>
  );
};

export default page;
