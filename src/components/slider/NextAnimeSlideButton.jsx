import { motion } from "framer-motion";

import Image from "../../ui/Image";

import nextSlideIcon from "./../../assets/icons/next-slide-button-icon.svg";

import { motionSliderButtonsVariant } from "../../configs/animations/motionSliderButtonsVariant";

const NextAnimeSlideButton = ({ onNextSlide }) => {
   return (
      <motion.button
         {...motionSliderButtonsVariant}
         className="
         bg-deep-space-blue w-[74px] h-[34px]
         flex items-center justify-center rounded-r-[20px]
         border-2 border-raspberry-pink xsm:w-[60px] smPlus:w-[74px]
         "
         type="button"
         onClick={onNextSlide}
      >
         <Image
            className="xsm:w-[26px] xsm:h-[26px] smPlus:w-[32px] smPlus:h-[32px]"
            src={nextSlideIcon}
            alt="Next slide icon"
         />
      </motion.button>
   );
};

export default NextAnimeSlideButton;
