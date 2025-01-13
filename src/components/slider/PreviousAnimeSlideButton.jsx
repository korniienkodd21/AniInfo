import { motion } from "framer-motion";

import Image from "../../ui/Image";

import previousSlideIcon from "./../../assets/icons/previous-slide-button-icon.svg";

import { motionSliderButtonsVariant } from "../../configs/animations/motionSliderButtonsVariant";

const PreviousAnimeSlideButton = ({ onPrevSlide }) => {
   return (
      <motion.button
         {...motionSliderButtonsVariant}
         className="
         bg-deep-space-blue h-[34px] w-[34px]
         flex items-center justify-center rounded-l-[20px]
         border-2 border-raspberry-pink xsm:w-[60px] smPlus:w-[74px]
         "
         type="button"
         onClick={onPrevSlide}
      >
         <Image
            className="xsm:w-[26px] xsm:h-[26px] smPlus:w-[32px] smPlus:h-[32px]"
            src={previousSlideIcon}
            alt="Next slide icon"
         />
      </motion.button>
   );
};

export default PreviousAnimeSlideButton;
