import Heading from "../../ui/Heading";
import Box from "../../ui/Box";
import Image from "../../ui/Image";
import Text from "../../ui/Text";

import collectionDescriptionIcon from "./../../assets/icons/collection-description-icon.svg";

const CollectionsDescription = () => {
   return (
      <Box
         className="
       bg-dark-slate-blue rounded-base p-4 relative
         before:absolute before:w-full before:h-fullbefore:bg-raspberry-pink
         before:z-[-1] before:top-[-2px] before:left-0 before:rounded-base
         "
      >
         <Box className="relative max-w-max">
            <Heading className="mb-3 xsm:text-large sm:text-vlarge" level={1} text="Description" />
            {collectionDescriptionIcon && (
               <Image
                  className="
               absolute right-[-40px] top-0 w-8 h-8 xsm:w-6 xsm:h-6
               xsm:right-[-32px] sm:right-[-40px] sm:w-8 sm:h-8
               "
                  src={collectionDescriptionIcon}
                  alt="Collection description icon"
               />
            )}
         </Box>
         <Text className="text-medium tracking-wider leading-6 xsm:text-medium">
            <Text className="font-bold text-raspberry-pink" text="Сollections" /> are unique
            collections created specifically for those who want to discover the exciting world of
            anime. We have collected the best works, divided them by genre, so that you can easily
            find stories that inspire and give bright emotions. Each collection is a carefully
            selected masterpiece filled with interesting plots, charismatic characters, and an
            unforgettable atmosphere. Anime for every taste awaits you here – from romance to
            fantasy, from action to comedy. Immerse yourself in amazing worlds that will not leave
            you indifferent, and discover an anime that will become your new favorite! Each
            collection contains only 24 anime, carefully chosen to ensure the perfect balance of
            quality and variety, making it easier than ever to explore and enjoy the best of the
            genre.
         </Text>
      </Box>
   );
};

export default CollectionsDescription;
