import AnimeCard from "../components/anime/AnimeCard";

export const renderAnimeList = (animeList) => {
   return animeList?.map((anime, index) => (
      <li
         className="
         w-1/2 h-[200px] xsm:w-[calc(50%-4px)] smPlus:w-[calc(33%-4px)]
         sm:w-[calc(25%-6px)] sm:h-[230px] md:w-[calc(33%-4px) md:h-[260px]
         lg:w-[calc(20%-7px)] lg:h-[280px] xl:h-[340px] 2xl:w-[calc(16.667%-7px)]
         "
         key={`${anime.mal_id}-${index}`}
      >
         <AnimeCard
            animeId={anime.mal_id}
            animeImg={anime.images.webp.image_url}
            animeTitleForAlt={anime.title}
            animeTitle={anime.title}
            animeEpisodes={anime?.episodes}
            animeRating={anime?.score}
            countRatingByMembers={anime?.scored_by}
            animeRank={anime?.rank}
            animeGenres={anime?.genres}
         />
      </li>
   ));
};
