"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { useEffect, useState } from "react";
import { options } from '@/constants/api';
import { Badge } from "@/components/ui/badge"
import { GenreType } from "@/constants/types";

export const FilterGenre = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            const response= await fetch(
                `https://api.themoviedb.org/3/genre/movie/list?language=en`,
                options
            );
            const data = await response.json();
            setGenres(data.genres); 
        };
        fetchGenres();
    }, []);

    const onClickGenre = (genreId: number) => {
        `https://teams.microsoft.com/l/message/19:FmKUoW9ritPs7j9aoqNyLvd86GV33_Kfd47gnfLH6qE1@thread.tacv2/1735544179878?tenantId=aae8fbe2-488b-49d9-b471-e4be61674a71&groupId=11b33c35-afff-4926-83d3-bc82250c6fab&parentMessageId=1735541364923&teamName=24MP2A&channelName=General&createdTime=1735544179878`
    };

    return(
        <Popover>
            <PopoverTrigger>
                <div className="border rounded-lg p-4 w-[150px]">GENRE</div>
            </PopoverTrigger>
            <PopoverContent>{genres?.map((genre: GenreType) => (
                <Badge key={`genre-${genre.id}`}>{genre?.name}</Badge>
            ))}</PopoverContent>
        </Popover>
    );
};