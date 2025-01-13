import PreviousPageButton from "./PreviousPageButton";
import NextPageButton from "./NextPageButton";
import CurrentPage from "./CurrentPage";

import Box from "../../ui/Box";

const PaganationButtons = ({ currentPage, onNextPagePagination, onPreviousPagePagination }) => {
   return (
      <Box className="flex gap-x-3 items-center xsm:self-end">
         {currentPage > 1 && (
            <PreviousPageButton onPreviousPagePaganation={onPreviousPagePagination} />
         )}
         <CurrentPage currentPage={currentPage} />
         <NextPageButton onNextPagePaganation={onNextPagePagination} />
      </Box>
   );
};

export default PaganationButtons;
