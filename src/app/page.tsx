"use client";

import { Header } from "./_components/Header";
import { Section } from "./_components/Section";
import { Footer } from "./_components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Section title="Upcoming" endpoint="upcoming" />
      <Section title="Popular" endpoint="popular" />
      <Section title="Top rated" endpoint="top_rated" />
      <Footer />
    </div>
  );
};
