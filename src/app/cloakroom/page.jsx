import { Footer } from "@/components/Homepage/sections/footer";
import Navbar from "@/components/Homepage/sections/navbar";
import CloakRoomEntry from "@/components/CloakRoom/CloakRoomEntry";
export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <CloakRoomEntry />
      <Footer />
    </div>
  );
}
