import MainLayout from "../layouts/MainLayout";

import AnimeCollectionList from "../components/collections/AnimeCollectionList";
import CollectionsDescription from "../components/collections/CollectionsDescription";

import Box from "../ui/Box";

const Collections = () => {
   return (
      <MainLayout>
         <Box className="mb-4">
            <CollectionsDescription />
         </Box>
         <AnimeCollectionList />
      </MainLayout>
   );
};

export default Collections;
