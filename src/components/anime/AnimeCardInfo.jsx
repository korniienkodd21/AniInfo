import { useMemo } from "react";
import { motion } from "framer-motion";

import Heading from "../../ui/Heading";
import Box from "../../ui/Box";
import Text from "../../ui/Text";

import AnimeCardStats from "./AnimeCardStats";

import { motionAnimeCardInfoVariant } from "../../configs/animations/motionAnimeCardInfoVariant";

const AnimeCardInfo = ({
   animeTitle,
   animeEpisodes,
   animeRating,
   countRatingByMembers,
   animeRank,
   animeGenres,
}) => {
   const displayAnimeTitle = animeTitle.length > 25 ? `${animeTitle.slice(0, 25)}...` : animeTitle;

   const displayGenres = (() => {
      const animeGenresList = animeGenres.map((genre) => genre.name).join(", ");
      return animeGenresList.length > 30 ? `${animeGenresList.slice(0, 30)}...` : animeGenresList;
   })();

   return (
      <motion.div
         {...motionAnimeCardInfoVariant}
         className="relative w-full rounded-base overflow-hidden"
      >
         <Box className="absolute w-full h-full bg-black rounded-base opacity-80 z-[-1]" />
         <Box className="p-4">
            <Heading text={displayAnimeTitle} level={2} />
            <Box className="mt-8">
               <AnimeCardStats
                  animeEpisodes={animeEpisodes}
                  animeRating={animeRating}
                  countRatingByMembers={countRatingByMembers}
                  animeRank={animeRank}
               />
            </Box>
            <Text className="text-large" text={displayGenres} />
         </Box>
      </motion.div>
   );
};

export default AnimeCardInfo;
