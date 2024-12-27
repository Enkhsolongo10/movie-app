import { Button } from '@/components/ui/button';
import { MovieCard } from './MovieCard'
import { Movie } from '@/constants/types';

type Props = {
    title: string;
    endpoint: string;
};

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzk2OTBmOTgzMGNlODA0Yjc4OTRhYzFkZWY0ZjdlOSIsIm5iZiI6MTczNDk0OTM3MS43NDIsInN1YiI6IjY3NjkzOWZiYzdmMTcyMDVkMTBiMGIxMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2r2TerxSJdZGmGVSLVDkk6nHT0NPqY4rOcxHtMNt0aE',
    }
};

export const Section = async ({ title, endpoint }: Props) => {
    const response = await fetch(
        `https://api.themoviedb.org/3/movie/${endpoint}?language=en-US&page=1`, options
    );
    const resJson = await response.json();
    const movies: Movie[] = resJson.results.slice(0, 10); 
    console.log(movies)
    return(
        <div className='p-3'>
            <h1 className='font-semibold'>{title}</h1>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/> 
            ))}
        </div>
    );
};