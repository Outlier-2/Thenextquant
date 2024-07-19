import { Nav } from "@/components/custom/product/Nav";
import { AboutUSPage } from "@/components/custom/atmo/AboutUS";
import Footer from "@/components/custom/product/Footer";

export default function AboutPage() {
  return (
    <div>
      <Nav />
      <div className="bg-[url('/start-sky.jpg')]  h-auto">
        <div className="p-8 rounded-lg shadow-lg flex  justify-center w-[50vw] items-center">
          <AboutUSPage />
        </div>
      </div>
      <Footer />
    </div>
  );
}
