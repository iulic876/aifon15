import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Highlights from "./Components/Highlights";
import Model from "./Components/Model";

export default function App() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
    </main>
  );
}
