import { Nav } from "@/components/custom/product/Nav";
import { AboutUSPage } from "@/components/custom/atmo/AboutUS";
import Footer from "@/components/custom/product/Footer";
import { License } from "@/components/custom/atmo/License";

export default function AboutPage() {
  return (
    <div>
      <Nav />
      <div className="bg-[url('/avatar.jpg')]  h-auto">
        <div className="p-8 rounded-lg shadow-lg flex  justify-center w-[50vw] items-center">
          <License />
        </div>
      </div>
      <Footer />
    </div>
  );
}
