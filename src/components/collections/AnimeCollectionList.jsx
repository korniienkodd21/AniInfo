import { collectionListItems } from "../../configs/lists/collectionListItems";
import AnimeCollection from "./AnimeCollection";

const AnimeCollectionList = () => {
   const collections = collectionListItems.map((collection) => (
      <li
         className="
         w-full smPlus:w-[calc(50%-6px)] md:w-[calc(33%-6px)]
         xl:w-[calc(25%-9px)]smPlus:min-h-[140px] lg:min-h-[200px]
         "
         key={collection.collectionID}
      >
         <AnimeCollection
            collectionGenreID={collection.collectionGenreID}
            collectionHeaderTitle={collection.collectionHeaderTitle}
            collectionImg={collection.collectionImg}
            collectionImgAlt={collection.collectionImgAlt}
         />
      </li>
   ));

   return <ul className="w-full flex flex-wrap gap-3">{collections}</ul>;
};

export default AnimeCollectionList;
