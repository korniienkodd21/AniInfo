import { Link, useLocation } from "react-router-dom";

import Heading from "../../ui/Heading";
import Box from "../../ui/Box";
import Image from "../../ui/Image";

const AnimeCollection = ({
   collectionGenreID,
   collectionHeaderTitle,
   collectionImg,
   collectionImgAlt,
}) => {
   const location = useLocation();

   const linkTo = `${location.pathname}/${collectionGenreID}`;

   return (
      <Link className="flex flex-col h-full hover:text-raspberry-pink" to={linkTo}>
         <Heading className="mb-2" level={2} text={collectionHeaderTitle} />
         <Box className="rounded-base overflow-hidden flex-grow">
            <Image className="w-full h-full" src={collectionImg} alt={collectionImgAlt} />
         </Box>
      </Link>
   );
};

export default AnimeCollection;
