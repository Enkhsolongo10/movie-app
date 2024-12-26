import { options } from "@/constants/api";
import { Movie } from "@/constants/types";

export const Section = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1`, options)
    const data = await response.json();
    const movie: Movie[] = data.results.slice(0, 10);
    return(
        <div></div>
    );
};