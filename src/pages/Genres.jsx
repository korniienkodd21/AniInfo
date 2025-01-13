import { useQuery } from "@tanstack/react-query";

import MainLayout from "../layouts/MainLayout";
import AnimeGenresList from "../components/genres/AnimeGenresList";

import { AnimeService } from "../services/anime.service";

const Genres = () => {
   const { data, isLoading } = useQuery({
      queryKey: ["genres"],
      queryFn: AnimeService.getAnimeGenres,
      select: ({ data }) => data,
   });

   return (
      <MainLayout>
         <AnimeGenresList data={data || []} isLoading={isLoading} />
      </MainLayout>
   );
};

export default Genres;
