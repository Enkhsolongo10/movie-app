import Image from "next/image";
import { useState } from "react";
import { Navigation } from "./_components/Navigation" 
import { Scroll } from "./_components/Scroll"
import { HomeScreen } from "./_components/HomeScreen";
import { Footer } from "./_components/Footer";
import { MOVIE_ENDPOINT, options } from "@/constants/api";

export default async function Home() {

 await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, options)
  .then((response) => response.json())
  .then((data)=> {
    console.log(data.results) 
  })


  return (
    <div>
      <Navigation />
      <Scroll />
      <HomeScreen />
      <Footer />
    </div>
  );
};     
