import { useRef, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import SliderButtons from "./SliderButtons";

import Loading from "./../../ui/Loading";
import Box from "../../ui/Box";
import Image from "../../ui/Image";

import { AnimeService } from "../../services/anime.service";

import { sliderBreakpoints } from "../../configs/slider/sliderBreakpoints";

import "swiper/css";
import "swiper/css/navigation";

const AnimeSlider = () => {
   const swiperRef = useRef(null);

   const { data, isLoading } = useQuery({
      queryKey: ["slider-anime-list"],
      queryFn: AnimeService.getFullPageAnimeList,
      select: ({ data }) => data,
   });

   const sliders = useMemo(() => {
      return data?.map((slider) => (
         <SwiperSlide
            className="xsm:w-[100px] xsm:h-[180px] lg:w-[150px] lg:h-[230px]"
            key={slider.mal_id}
         >
            <Image
               className="w-full h-full rounded-base select-none"
               src={slider.images.webp.image_url}
               alt={slider.title}
            />
         </SwiperSlide>
      ));
   }, [data]);

   if (isLoading) {
      return (
         <Box
            className="
            w-[200px] h-[200px] absolute left-[50%] top-[50%]
            translate-y-[-50%] translate-x-[-50%]
            "
         >
            <Loading />
         </Box>
      );
   }

   return (
      <Box
         className="
         w-full py-5 mb-[14px] bg-dark-slate-blue rounded-base
         relative before:absolute before:w-full before:h-full 
       before:bg-raspberry-pink before:z-[-1] before:top-[-2px]
         before:rounded-base xsm:h-[280px] lg:h-[323px]
         "
      >
         <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={12}
            slidesPerView={8}
            autoplay={{
               delay: 2000,
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            breakpoints={sliderBreakpoints}
            className="w-full px-5 absolute bottom-5"
         >
            {sliders}
         </Swiper>
         <SliderButtons
            onNextSlide={() => swiperRef.current.slideNext()}
            onPrevSlide={() => swiperRef.current.slidePrev()}
         />
      </Box>
   );
};

export default AnimeSlider;
