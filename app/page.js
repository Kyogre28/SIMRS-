import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Modules from "@/components/Modules";
import Roles from "@/components/Roles";
import BookingForm from "@/components/BookingForm";
import Hours from "@/components/Hours";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Modules />
        <Roles />
        <BookingForm />
        <Hours />
        <Stats />
      </main>
      <footer>
        <div className="w">SIMRS Medic · Tugas Requirement Engineering · Prototipe antarmuka, data contoh</div>
      </footer>
    </>
  );
}
