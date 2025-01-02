import { Navigation } from "./_components/Navigation" 
import { Section } from "./_components/Section";
import { Footer } from "./_components/Footer";
import Image from "next/image";


export default function Home() {
  return (
    <div>
      <Navigation />
      <Section title="Upcoming" endpoint="upcoming"/>
      <Section title="Popular" endpoint="popular"/>
      <Section title="Top rated" endpoint="top_rated"/>
      <Footer />
    </div>
  );
};

