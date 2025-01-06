'use client';
import { Button } from '@/components/ui/button';
import { MovieCard } from './MovieCard';
import { Movie } from '@/constants/types';
import { Prop } from '@/constants/types';
import { options } from '@/constants/api';
import Link from 'next/link';
import { IoArrowForwardSharp } from 'react-icons/io5';

export const Section = async ({ title, endpoint }: Prop) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`, options
    );
    const resJson = await response.json();
    const movies: Movie[] = resJson.results.slice(0, 10); 
    return( 
        <div className="p-7 lg:px-10">
            <div className='flex items-center justify-between mb-5 pr-5'>
                <h1 className='flex items-center text-2xl font-semibold'>{title}</h1>
                <Link href={`/${endpoint}?language=en-US&page=3`} className='flex items-center gap-[8px]'>
                    <p>See more</p>
                    <IoArrowForwardSharp />
                </Link>
            </div>
            <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}/> 
                ))}
            </div>
        </div>
    );
};
