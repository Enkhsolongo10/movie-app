import { Movie } from "@/constants/types";

export const MovieCard = ({movie}:{movie: Movie}) => {
    return(
        <div><h1>{movie.title}</h1></div>
    );
}; 