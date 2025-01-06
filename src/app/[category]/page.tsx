"use client";

import { options } from "@/constants/api";
import { Movie } from "@/constants/types";
import { useParams, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { MovieCard } from "../_components/MovieCard";
import { Pagination } from "../_components/Pagination";
import { Header } from "../_components/Header";
import { Footer } from "../_components/Footer";

export default function Page() {
    const params = useParams();
    const searchParams = useSearchParams();
    const page = searchParams.get('page');
    const [movies, setMovies] = useState<Movie[]>();

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await fetch(
                `https://api.themoviedb.org/3/movie/${params.category}?language=en-US&page=${page}`, 
                options
            );
            const data = await response.json();
            setMovies(data.results.slice(0, 10));
        };
        fetchMovies();
    }, [params]);

    return(
        <div>
            <Header />
            <h1 className="flex items-center text-2xl font-semibold">{params.category}</h1>
            <div className="p-4 grid gap-4 grid-cols-2 md:grid-cols-5 lg:px-10">{movies?.map((movie) => (
                <MovieCard movie={movie}/>
            ))}
            </div>
            <Pagination />
            <Footer />
        </div>
    );
};