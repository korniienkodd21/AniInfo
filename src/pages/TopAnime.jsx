import { useQuery } from "@tanstack/react-query";

import MainLayout from "../layouts/MainLayout";
import AnimeList from "../components/anime/AnimeList";

import { usePageManager } from "../hooks/usePageManager";
import { useSearchbar } from "../hooks/useSearchbar";

import { AnimeService } from "../services/anime.service";

const TopAnime = () => {
   const { queryInputValue, handleGetQueryInputValue } = useSearchbar();
   const { currentPage, handleNextPagePagination, handlePreviousPagePagination } = usePageManager();

   const { data, isFetching } = useQuery({
      queryKey: ["top-anime", currentPage],
      queryFn: () => AnimeService.getTopAnimeWithLimit(currentPage),
      select: ({ data }) => data,
   });

   return (
      <MainLayout
         currentPage={currentPage}
         animeQueryTitle={queryInputValue}
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

export default TopAnime;
