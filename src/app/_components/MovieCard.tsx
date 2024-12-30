import { Movie } from "@/constants/types";
import { StarIcon } from "lucide-react";

export const MovieCard = ({movie}:{movie: Movie}) => {
    return(
        <div className="rounded bg-gray-100">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                className="rounded-tr-lg rounded-tl-lg"
            />
            <div className="p-2">
                <div className="flex items-center gap-3">
                    <StarIcon size={16} className="fill-yellow-300" />
                    <p>{movie.vote_average.toFixed(1)}</p>
                </div>
            </div>
                <h1 className="text-sm text-[#09090B] pl-2 -mt-[10px]">{movie.title}</h1>
        </div>
    );
}; 