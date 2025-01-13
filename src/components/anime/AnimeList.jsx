import { useQuery } from "@tanstack/react-query";

import AnimeListLoading from "./AnimeListLoading";
import AnimeNotFound from "./AnimeNotFound";

import { renderAnimeList } from "../../utils/renderAnimeList";

import { AnimeService } from "../../services/anime.service";

const AnimeList = ({ animeListData, isFetching, queryInputValue }) => {
   const { data } = useQuery({
      queryKey: ["anime(s)-by-title", queryInputValue],
      queryFn: () => AnimeService.getAnimeByTitle(queryInputValue),
      select: ({ data }) => data,
      enabled: !!queryInputValue,
   });

   const animeList = renderAnimeList(animeListData);
   const animeListWithTitle = renderAnimeList(data);

   const displayAnimeList = queryInputValue ? animeListWithTitle : animeList;

   if (isFetching) {
      return <AnimeListLoading />;
   }

   return (
      <>
         {displayAnimeList?.length && !isFetching ? (
            <ul className="flex gap-y-[14px] gap-x-2 flex-wrap">{displayAnimeList}</ul>
         ) : (
            <AnimeNotFound />
         )}
      </>
   );
};

export default AnimeList;
