import { motion } from "framer-motion";

import loadingIcon from "./../assets/icons/loading-icon.svg";

import { motionLoadingVariant } from "../configs/animations/motionLoadingVariant";

const Loading = () => {
   return <motion.img {...motionLoadingVariant} className="w-full h-full" src={loadingIcon} />;
};

export default Loading;
