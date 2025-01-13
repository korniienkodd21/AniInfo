import PreviousAnimeSlideButton from "./PreviousAnimeSlideButton";
import NextAnimeSlideButton from "./NextAnimeSlideButton";

import Box from "../../ui/Box";

const SliderButtons = ({ onNextSlide, onPrevSlide }) => {
   return (
      <Box className="flex gap-x-3 absolute right-5 top-5">
         <PreviousAnimeSlideButton onPrevSlide={onPrevSlide} />
         <NextAnimeSlideButton onNextSlide={onNextSlide} />
      </Box>
   );
};

export default SliderButtons;
