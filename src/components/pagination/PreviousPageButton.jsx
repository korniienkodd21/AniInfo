import { motion } from "framer-motion";

import Image from "../../ui/Image";

import previosPageIcon from "./../../assets/icons/previous-page-button-icon.svg";

import { motionPageChangeButtonsVariant } from "../../configs/animations/motionPageChangeButtonsVariant";

const PreviousPageButton = ({ onPreviousPagePaganation }) => {
   return (
      <motion.button
         {...motionPageChangeButtonsVariant}
         className="
         h-[50px] w-[50px] flex justify-center items-center
         rounded-base border-2 border-raspberry-pink bg-dark-slate-blue
         "
         onClick={onPreviousPagePaganation}
      >
         <Image src={previosPageIcon} alt="Previous page icon" width="32px" height="32px" />
      </motion.button>
   );
};

export default PreviousPageButton;
