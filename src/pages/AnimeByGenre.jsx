import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AnimeList from "../components/anime/AnimeList";

import { usePageManager } from "../hooks/usePageManager";
import { useSearchbar } from "../hooks/useSearchbar";

import { AnimeService } from "../services/anime.service";

const AnimeByGenre = () => {
   const { queryInputValue, handleGetQueryInputValue } = useSearchbar();
   const { currentPage, handleNextPagePagination, handlePreviousPagePagination } = usePageManager();

   const params = useParams();

   const { data, isFetching } = useQuery({
      queryKey: ["anime-by-genres", { genreID: params.genreId, page: currentPage }],
      queryFn: () => AnimeService.getAnimeByGenre(params.genreId, currentPage),
      select: ({ data }) => data,
   });

   return (
      <MainLayout
         currentPage={currentPage}
         onNextPagePagination={handleNextPagePagination}
         onPreviousPagePagination={handlePreviousPagePagination}
         onGetQueryInputValue={handleGetQueryInputValue}
      >
         <AnimeList
            animeListData={data || []}
            isFetching={isFetching}
            queryInputValue={queryInputValue}
         />
      </MainLayout>
   );
};

export default AnimeByGenre;
