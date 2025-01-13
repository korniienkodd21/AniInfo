import { motion, AnimatePresence } from "framer-motion";

import Image from "../../ui/Image";

import searchbarIcon from "./../../assets/icons/searchbar-icon.svg";

import { motionSearchbarButtonVariant } from "../../configs/animations/motionSearchbarButtonVariant";

const AnimeSearchbarButton = ({ isQueryAnimeInputEmpty }) => {
   return (
      <AnimatePresence initial={false}>
         {isQueryAnimeInputEmpty && (
            <motion.button
               {...motionSearchbarButtonVariant}
               className="absolute right-[20px] flex items-center justify-center rounded-base"
               type="submit"
            >
               <Image src={searchbarIcon} alt="Searchbar Icon" width="24px" height="24px" />
            </motion.button>
         )}
      </AnimatePresence>
   );
};

export default AnimeSearchbarButton;
