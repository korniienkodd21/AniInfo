import episodesIcon from "./../../assets/icons/episodes-icon.svg";
import ratingIcon from "./../../assets/icons/rating-icon.svg";
import rankingIcon from "./../../assets/icons/ranking-icon.svg";

import Box from "../../ui/Box";
import Image from "../../ui/Image";
import Text from "../../ui/Text";

const AnimeCardStats = ({ animeEpisodes, animeRating, countRatingByMembers, animeRank }) => {
   return (
      <ul className="flex flex-col gap-y-3 mb-8">
         {animeEpisodes && (
            <li>
               <Box className="flex items-center gap-x-[6px]">
                  <Image src={episodesIcon} alt="Episodes icon" width="32px" height="32px" />
                  <Text className="text-large" text={`${animeEpisodes} episodes`} />
               </Box>
            </li>
         )}
         {animeRating && (
            <li>
               <Box className="flex items-center gap-x-[6px]">
                  <Image src={ratingIcon} alt="Rating icon" width="32px" height="32px" />
                  <Text className="text-large flex items-center gap-x-[5px]">
                     {animeRating} <Text>-</Text>
                     <Text className="text-medium" text={`${countRatingByMembers} users`} />
                  </Text>
               </Box>
            </li>
         )}
         {animeRank && (
            <li>
               <Box className="flex items-center gap-x-[6px]">
                  <Image src={rankingIcon} alt="Ranking icon" width="32px" height="32px" />
                  <Text className="text-large" text={`${animeRank} - Ranking`} />
               </Box>
            </li>
         )}
      </ul>
   );
};

export default AnimeCardStats;
