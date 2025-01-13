import { useState } from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

import Image from "../../ui/Image";

import AnimeCardInfo from "./AnimeCardInfo";

const AnimeCard = ({
   animeId,
   animeImg,
   animeTitleForAlt,
   animeTitle,
   animeEpisodes,
   animeRating,
   countRatingByMembers,
   animeRank,
   animeGenres,
}) => {
   const [isVisibleAnimeCardInfo, setIsVisibleAnimeCardInfo] = useState(false);
   const location = useLocation();

   return (
      <Link
         className="
         block w-full h-full rounded-base relative
         before:content-[''] before:absolute before:h-full
         before:w-full before:rounded-base before:bg-raspberry-pink
         before:top-[-2px] before:left-0 before:z-[-3]
         "
         onMouseEnter={() => setIsVisibleAnimeCardInfo(true)}
         onMouseLeave={() => setIsVisibleAnimeCardInfo(false)}
         to={`${location.pathname}/${animeId}`}
      >
         <Image
            className="absolute w-full h-full rounded-base z-[-2]"
            src={animeImg}
            alt={animeTitleForAlt}
         />
         {isVisibleAnimeCardInfo && (
            <AnimeCardInfo
               animeTitle={animeTitle}
               animeEpisodes={animeEpisodes}
               animeRating={animeRating}
               countRatingByMembers={countRatingByMembers}
               animeRank={animeRank}
               animeGenres={animeGenres}
            />
         )}
      </Link>
   );
};

export default AnimeCard;
