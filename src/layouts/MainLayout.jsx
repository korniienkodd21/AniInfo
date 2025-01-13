import AnimeSearchbar from "../components/searchbar/AnimeSearchbar";
import PaganationButtons from "../components/pagination/PaginationButtons";

import Box from "../ui/Box";
import AnimeQueryTitle from "../components/anime/AnimeQueryTitle";

const MainLayout = ({
   currentPage,
   animeQueryTitle,
   onNextPagePagination,
   onPreviousPagePagination,
   onGetQueryInputValue,
   children,
}) => {
   return (
      <main className="flex">
         <Box className="w-full">
            <Box
               className="
               mb-4 flex items-center gap-x-8
               xsm:flex-colxsm:gap-y-4 sm:flex-row
               "
            >
               {onGetQueryInputValue && (
                  <AnimeSearchbar onGetQueryInputValue={onGetQueryInputValue} />
               )}
               {currentPage && !animeQueryTitle && (
                  <PaganationButtons
                     currentPage={currentPage}
                     onNextPagePagination={onNextPagePagination}
                     onPreviousPagePagination={onPreviousPagePagination}
                  />
               )}
            </Box>
            <Box className="mb-4">
               <AnimeQueryTitle title={animeQueryTitle} />
            </Box>
            {children}
         </Box>
      </main>
   );
};

export default MainLayout;
