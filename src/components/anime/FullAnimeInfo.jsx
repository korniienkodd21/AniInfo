import { useMemo } from "react";

import Loading from "../../ui/Loading";
import Heading from "../../ui/Heading";
import Box from "../../ui/Box";
import Image from "../../ui/Image";
import Text from "../../ui/Text";

import { getFullAnimeInfo } from "../../configs/lists/fullAnimeInfo";

const FullAnimeInfo = ({ data, isLoading }) => {
   const animeGenres = useMemo(() => data?.genres.map((genre) => genre.name).join(" / "), [data]);

   const animeStudios = useMemo(
      () => data?.studios.map((studio) => studio.name).join(" / "),
      [data]
   );

   const animeProducers = useMemo(
      () => data?.producers.map((producer) => producer.name).join(" / "),
      [data]
   );

   const animeDetails = useMemo(
      () =>
         getFullAnimeInfo({
            title: data?.title,
            episodes: data?.episodes,
            episodeDuration: data?.duration,
            genres: animeGenres,
            rank: data?.rank,
            score: data?.score,
            rating: data?.rating,
            year: data?.year,
            studios: animeStudios,
            producers: animeProducers,
         }),
      [
         data?.title,
         data?.episodes,
         data?.duration,
         animeGenres,
         data?.rank,
         data?.score,
         data?.rating,
         data?.year,
         animeStudios,
         animeProducers,
      ]
   );

   const detailsList = animeDetails.map((animeDetail) => (
      <li key={animeDetail.titleId}>
         <Box className="flex gap-x-4">
            <Text>{animeDetail.titleLabel}</Text>
            <Text className="font-medium">{animeDetail.titleValue}</Text>
         </Box>
      </li>
   ));

   if (isLoading) {
      return (
         <Box className="w-[200px] h-[200px] flex justify-center items-center">
            <Loading />
         </Box>
      );
   }

   return (
      <Box className="w-full">
         <Box className="flex gap-x-7 xsm:flex-col xl:flex-row">
            <Box className="flex gap-x-7 xsm:flex-col sm:flex-row">
               <Box
                  className="
                  w-[232px] h-[332px] xsm:mx-auto xsm:w-[200px]
                  xsm:h-[300px] smPlus:w-[232px] smPlus:h-[332px]
                  "
               >
                  <Image
                     className="rounded-base w-full h-full"
                     src={data?.images.webp.image_url}
                     alt="hero"
                  />
               </Box>
               <Box className="xsm:mt-4 sm:mt-0 sm:flex-1 xl:w-[400px]">
                  <Box
                     className="
                     px-4 py-2 border-2 border-raspberry-pink text-center
                     rounded-base mb-5 xsm:w-full sm:max-w-[360px] xl:max-w-full
                     "
                  >
                     {data?.status}
                  </Box>
                  <ul className="flex flex-col gap-y-[6px] w-full">{detailsList}</ul>
               </Box>
            </Box>
            <Box className="xsm:mt-10 xl:mt-0 xl:flex-1">
               <Heading className="pb-3" level={2} text="Synopsis" />
               <Text className="tracking-wider leading-6" text={data?.synopsis} />
            </Box>
         </Box>
      </Box>
   );
};

export default FullAnimeInfo;
