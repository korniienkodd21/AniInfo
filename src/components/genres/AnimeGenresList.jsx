import PartOfGenresList from "./PartOfGenresList";

import Heading from "../../ui/Heading";
import Box from "../../ui/Box";
import Loading from "../../ui/Loading";

import { divideIntoParts } from "../../utils/divideIntoParts";

const AnimeGenresList = ({ data, isLoading }) => {
   const parts = divideIntoParts(data, 5);

   if (isLoading) {
      return (
         <Box className="w-[150px] h-[150px] mx-auto">
            <Loading />
         </Box>
      );
   }

   if (!data || data.length === 0) {
      return (
         <Box className="text-center text-medium text-raspberry-pink">No genres available.</Box>
      );
   }

   return (
      <Box
         className="
         rounded-base bg-dark-slate-blue p-5 w-full relative
         before:absolute before:content-[''] before:w-full before:h-fullbefore:top-[-2px]
       before:bg-raspberry-pink before:rounded-base before:left-0 before:z-[-1]
         "
      >
         <Heading level={2} text="Genres" />
         <Box className="flex flex-wrap gap-4 mt-2 w-full">
            {parts.map((part, index) => (
               <PartOfGenresList key={index} data={part} />
            ))}
         </Box>
      </Box>
   );
};

export default AnimeGenresList;
