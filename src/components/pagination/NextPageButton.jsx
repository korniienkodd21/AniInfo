import { motion } from "framer-motion";

import Image from "../../ui/Image";

import nextPageIcon from "./../../assets/icons/next-page-button-icon.svg";

import { motionPageChangeButtonsVariant } from "../../configs/animations/motionPageChangeButtonsVariant";

const NextPageButton = ({ onNextPagePaganation }) => {
   return (
      <motion.button
         {...motionPageChangeButtonsVariant}
         className="
         h-[50px] w-[50px] flex justify-center items-center
         rounded-base border-2 border-raspberry-pink bg-dark-slate-blue
         "
         onClick={onNextPagePaganation}
      >
         <Image src={nextPageIcon} alt="Next page icon" width="32px" height="32px" />
      </motion.button>
   );
};

export default NextPageButton;
