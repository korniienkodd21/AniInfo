import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AnimeList from "../components/anime/AnimeList";

import { AnimeService } from "../services/anime.service";

const CollectionsByGenre = () => {
   const params = useParams();

   const { data, isFetching } = useQuery({
      queryKey: ["collections-by-genre", params.collectionId],
      queryFn: () => AnimeService.getCollectionAnimeList(params.collectionId),
      select: ({ data }) => data,
   });

   return (
      <MainLayout>
         <AnimeList animeListData={data || []} isFetching={isFetching} />
      </MainLayout>
   );
};

export default CollectionsByGenre;
