import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import FullAnimeInfo from "../components/anime/FullAnimeInfo";

import { AnimeService } from "../services/anime.service";

const AnimeInfo = () => {
   const params = useParams();

   const { data, isLoading } = useQuery({
      queryKey: ["anime-page", params.animeId],
      queryFn: () => AnimeService.getFullAnimeInfo(params.animeId),
      select: ({ data }) => data,
   });

   return (
      <MainLayout>
         <FullAnimeInfo data={data} isLoading={isLoading} />
      </MainLayout>
   );
};

export default AnimeInfo;
